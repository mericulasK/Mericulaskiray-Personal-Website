/* ==========================================================================
   THE SANCTUM CODEX — WEB AUDIO API SYNTHESIZER
   Procedural Sci-Fi / Dark Fantasy Soundscape & UI Sound Effects Engine
   ========================================================================== */

class SanctumAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false; // Audio enabled by default per user request
    this.ambientGain = null;
    this.masterGain = null;
    this.ambientOsc = null;
    this.ambientLfo = null;
    this.hasAutoStarted = false;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioCtx();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.5;
    this.masterGain.connect(this.ctx.destination);

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.value = 0;
    this.ambientGain.connect(this.masterGain);
  }

  autoStart() {
    if (this.isMuted) return;
    this.init();
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        try {
          const buffer = this.ctx.createBuffer(1, 1, 22050);
          const source = this.ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(this.ctx.destination);
          source.start(0);
        } catch (e) {
          // Fallback if silent buffer unsupported
        }
        this.ctx.resume().then(() => {
          if (!this.isMuted) {
            this.startAmbientDrone();
          }
        });
      } else {
        this.startAmbientDrone();
      }
    }
    this.hasAutoStarted = true;
    this.updateBtnUI();
  }

  toggleSound() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;
    
    if (!this.isMuted) {
      this.startAmbientDrone();
      this.playChime(600, 'sine', 0.2);
    } else {
      this.stopAmbientDrone();
    }

    this.updateBtnUI();
  }

  updateBtnUI() {
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) {
      btn.innerHTML = this.isMuted 
        ? '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/></svg>'
        : '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
      btn.title = this.isMuted ? "Sesi Aç / Turn Audio On" : "Sesi Kapat / Turn Audio Off";
    }
  }

  startAmbientDrone() {
    if (!this.ctx || this.ambientOsc) return;

    // Deep low drone oscillator (55Hz / A1 note)
    this.ambientOsc = this.ctx.createOscillator();
    this.ambientOsc.type = 'sawtooth';
    this.ambientOsc.frequency.setValueAtTime(55, this.ctx.currentTime);

    // Low pass filter for dark warm soundscape
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, this.ctx.currentTime);

    // LFO for subtle pulsing atmosphere
    this.ambientLfo = this.ctx.createOscillator();
    this.ambientLfo.frequency.setValueAtTime(0.2, this.ctx.currentTime);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(40, this.ctx.currentTime);
    this.ambientLfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    this.ambientOsc.connect(filter);
    filter.connect(this.ambientGain);

    this.ambientOsc.start();
    this.ambientLfo.start();

    // Fade in
    this.ambientGain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 3);
  }

  stopAmbientDrone() {
    if (this.ambientGain) {
      this.ambientGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1);
      setTimeout(() => {
        if (this.ambientOsc) {
          this.ambientOsc.stop();
          this.ambientOsc.disconnect();
          this.ambientOsc = null;
        }
        if (this.ambientLfo) {
          this.ambientLfo.stop();
          this.ambientLfo.disconnect();
          this.ambientLfo = null;
        }
      }, 1000);
    }
  }

  playClick() {
    if (this.isMuted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playChime(freq = 440, type = 'sine', duration = 0.3) {
    if (this.isMuted || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }
}

const sanctumAudio = new SanctumAudioEngine();

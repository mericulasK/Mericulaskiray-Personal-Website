/* ==========================================================================
   THE SANCTUM CODEX — INTERACTIVE MINI-GAMES SANCTUM
   Game 1: Cipher Matrix (Runic Hacking / Speed Typing Terminal)
   Game 2: 3D Relic Aligner (Three.js Interactive Runic Ring Puzzle)
   ========================================================================== */

class CipherMatrixGame {
  constructor() {
    this.snippets = [
      "builder.Services.AddControllersWithViews();",
      "const [state, dispatch] = useReducer(authReducer, initial);",
      "public async Task<IActionResult> GetOrderById(int id)",
      "db.Orders.Include(o => o.Items).FirstOrDefaultAsync();",
      "export const fetchUserMatrix = async (guid: string) => {};",
      "docker-compose up -d --build --remove-orphans",
      "git commit -m 'feat(core): unleash $10K Awwwards architecture'"
    ];
    this.currentIndex = 0;
    this.targetText = "";
    this.startTime = null;
    this.score = 0;

    this.inputEl = document.getElementById('cipher-input');
    this.targetEl = document.getElementById('cipher-target');
    this.scoreEl = document.getElementById('cipher-score');
    this.wpmEl = document.getElementById('cipher-wpm');

    if (this.inputEl) {
      this.init();
    }
  }

  init() {
    this.loadNextSnippet();
    this.inputEl.addEventListener('input', this.handleInput.bind(this));
  }

  loadNextSnippet() {
    this.targetText = this.snippets[Math.floor(Math.random() * this.snippets.length)];
    if (this.targetEl) {
      this.targetEl.textContent = this.targetText;
    }
    if (this.inputEl) {
      this.inputEl.value = "";
    }
    this.startTime = null;
  }

  handleInput() {
    if (!this.startTime) {
      this.startTime = performance.now();
    }

    const val = this.inputEl.value;

    if (typeof sanctumAudio !== 'undefined') {
      sanctumAudio.playClick();
    }

    if (val === this.targetText) {
      const timeTakenSec = (performance.now() - this.startTime) / 1000;
      const wpm = Math.round((this.targetText.length / 5) / (timeTakenSec / 60));

      this.score += 150 + wpm;
      if (this.scoreEl) this.scoreEl.textContent = this.score;
      if (this.wpmEl) this.wpmEl.textContent = wpm;

      if (typeof sanctumAudio !== 'undefined') {
        sanctumAudio.playChime(880, 'sine', 0.5);
      }

      this.loadNextSnippet();
    }
  }
}

class RelicAligner3DGame {
  constructor() {
    this.container = document.getElementById('relic-3d-container');
    this.canvas = document.getElementById('relic-canvas');
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.ring1 = null;
    this.ring2 = null;
    this.ring3 = null;
    this.isAligned = false;

    this.angle1 = 0;
    this.angle2 = 0;
    this.angle3 = 0;

    this.init();
  }

  init() {
    const width = this.container.clientWidth;
    const height = 450;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 12);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setSize(width, height);

    const light = new THREE.PointLight(0xe5b869, 2, 20);
    light.position.set(0, 0, 8);
    this.scene.add(light);

    // Concentric Runic Rings
    const r1Geo = new THREE.TorusGeometry(3.5, 0.12, 16, 60);
    const r1Mat = new THREE.MeshStandardMaterial({ color: 0xd96b27, wireframe: true });
    this.ring1 = new THREE.Mesh(r1Geo, r1Mat);

    const r2Geo = new THREE.TorusGeometry(2.4, 0.12, 16, 60);
    const r2Mat = new THREE.MeshStandardMaterial({ color: 0xe5b869, wireframe: true });
    this.ring2 = new THREE.Mesh(r2Geo, r2Mat);

    const r3Geo = new THREE.TorusGeometry(1.3, 0.12, 16, 60);
    const r3Mat = new THREE.MeshStandardMaterial({ color: 0x3eb4a1, wireframe: true });
    this.ring3 = new THREE.Mesh(r3Geo, r3Mat);

    this.scene.add(this.ring1);
    this.scene.add(this.ring2);
    this.scene.add(this.ring3);

    // Random initial offsets
    this.ring1.rotation.z = Math.PI * 0.7;
    this.ring2.rotation.z = Math.PI * 1.4;
    this.ring3.rotation.z = Math.PI * 0.2;

    this.canvas.addEventListener('click', this.rotateNextRing.bind(this));
    this.animate();
  }

  rotateNextRing() {
    this.ring1.rotation.z += Math.PI / 4;
    this.ring2.rotation.z += Math.PI / 3;
    this.ring3.rotation.z += Math.PI / 2;

    if (typeof sanctumAudio !== 'undefined') {
      sanctumAudio.playChime(500, 'triangle', 0.2);
    }

    this.checkAlignment();
  }

  checkAlignment() {
    const diff1 = Math.abs(this.ring1.rotation.z % (Math.PI * 2));
    const diff2 = Math.abs(this.ring2.rotation.z % (Math.PI * 2));

    if (diff1 < 0.3 && diff2 < 0.3) {
      this.isAligned = true;
      const status = document.getElementById('relic-status');
      if (status) {
        status.textContent = "🔓 RELIC UNLOCKED! Achievement: Master Architect!";
        status.style.color = "#3eb4a1";
      }
      if (typeof sanctumAudio !== 'undefined') {
        sanctumAudio.playChime(900, 'sine', 0.6);
      }
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}

function switchGameTab(tabId) {
  document.querySelectorAll('.game-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.game-panel').forEach(panel => panel.classList.remove('active'));

  const activeBtn = document.querySelector(`[onclick="switchGameTab('${tabId}')"]`);
  const activePanel = document.getElementById(tabId);

  if (activeBtn) activeBtn.classList.add('active');
  if (activePanel) activePanel.classList.add('active');

  if (tabId === 'relic-game' && !window.relicGameInit && typeof THREE !== 'undefined') {
    window.relicGame = new RelicAligner3DGame();
    window.relicGameInit = true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cipherGame = new CipherMatrixGame();
});

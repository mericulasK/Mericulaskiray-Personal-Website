/* ==========================================================================
   THE SANCTUM CODEX — MAIN APPLICATION ORCHESTRATOR
   Meriç Ulaş Kıray · Senior Full Stack Developer & Software Engineer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initScrollHeader();
  initMobileNav();
  initCommandPalette();
  initContactForm();
  initCounterAnimations();
  initCursorHalo();
  initScrollScrubber();
  initAudioAutoplay();
  initModalBackdrops();
});

/* Autoplay Background Audio on First User Gesture (Mobile Safari & Android Compatible) */
function initAudioAutoplay() {
  const triggerAutoPlay = () => {
    if (typeof sanctumAudio !== 'undefined') {
      sanctumAudio.autoStart();
    }
  };

  // Immediate attempt
  triggerAutoPlay();

  // Attach gesture events for mobile Safari & Android unlock
  const events = ['touchstart', 'touchend', 'pointerdown', 'mousedown', 'click', 'scroll'];
  events.forEach(evt => {
    window.addEventListener(evt, triggerAutoPlay, { passive: true });
    document.addEventListener(evt, triggerAutoPlay, { passive: true });
  });
}

/* Modal Overlay Backdrop Click Handler */
function initModalBackdrops() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal('cmd-modal');
        closeModal('lang-modal');
      }
    });
  });
}

/* 1. Header Scroll Listener */
function initScrollHeader() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* 2. Custom Light Halo Follower Around Cursor with Fast & Smooth Response */
function initCursorHalo() {
  const halo = document.getElementById('cursor-halo');
  if (!halo) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let haloX = mouseX;
  let haloY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderHalo() {
    // Fast, smooth follow
    haloX += (mouseX - haloX) * 0.40;
    haloY += (mouseY - haloY) * 0.40;

    halo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderHalo);
  }

  renderHalo();
}

/* 3. Interactive Scroll-Driven Scrubber (Direct 1-to-1 sync reveal & hide on scroll down/up) */
function initScrollScrubber() {
  const targets = document.querySelectorAll('.scroll-scrub-target');
  const heroContent = document.querySelector('.hero-content');
  const timelineNodes = document.querySelectorAll('.timeline-node');

  function onScrollScrub() {
    const currentScrollY = window.scrollY;
    const viewHeight = window.innerHeight;

    // 1. Hero Content parallax & smooth fade in direct sync with scroll
    if (heroContent) {
      const heroOffset = Math.min(currentScrollY * 0.25, 180);
      const heroOpacity = Math.max(1 - (currentScrollY / (viewHeight * 0.75)), 0);
      heroContent.style.transform = `translate3d(0, ${heroOffset.toFixed(1)}px, 0)`;
      heroContent.style.opacity = heroOpacity.toFixed(3);
    }

    // 2. Scroll Scrub Targets: Continuous 1-to-1 fade in and fade out synchronized with scroll down & up
    targets.forEach(target => {
      const rect = target.getBoundingClientRect();

      // Entry Progress (0 at 92% of viewHeight down to 1 at 40% of viewHeight)
      const entryStart = viewHeight * 0.92;
      const entryEnd = viewHeight * 0.40;
      const inProgress = (entryStart - rect.top) / (entryStart - entryEnd);

      // Exit Progress (1 at 20% of viewHeight down to 0 at -80px above top)
      const exitStart = viewHeight * 0.20;
      const exitEnd = -80;
      const outProgress = (rect.bottom - exitEnd) / (exitStart - exitEnd);

      // Raw progress is the minimum of entry and exit progress
      const rawProgress = Math.min(inProgress, outProgress);
      const opacity = Math.max(0, Math.min(1, rawProgress));

      // Calculate subtle translateY shift matching opacity (22px when 0 opacity -> 0px when 1 opacity)
      const translateY = (1 - opacity) * 22;

      target.style.opacity = opacity.toFixed(3);
      target.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
    });

    // 3. Timeline Nodes Scale Pulse on scroll pass
    timelineNodes.forEach(node => {
      const rect = node.getBoundingClientRect();
      if (rect.top > 80 && rect.top < viewHeight * 0.75) {
        node.style.transform = 'scale(1.3)';
        node.style.boxShadow = '0 0 25px var(--color-gold-bright)';
      } else {
        node.style.transform = 'scale(1)';
        node.style.boxShadow = '0 0 15px var(--color-gold)';
      }
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScrollScrub();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  onScrollScrub(); // Initial check
}

/* 4. Mobile Nav Drawer */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      if (typeof sanctumAudio !== 'undefined') sanctumAudio.playClick();
    });
  }
}

/* 5. Modal Controllers */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    if (typeof sanctumAudio !== 'undefined') sanctumAudio.playChime(500, 'sine', 0.2);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

/* 6. Command Palette (Ctrl+K) */
function initCommandPalette() {
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openModal('cmd-modal');
    } else if (e.key === 'Escape') {
      closeModal('cmd-modal');
      closeModal('lang-modal');
    }
  });

  const cmdInput = document.getElementById('cmd-input');
  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.cmd-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
}

function executeCmd(action) {
  closeModal('cmd-modal');
  if (action.startsWith('nav-')) {
    const sectionId = action.replace('nav-', '');
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  } else if (action === 'lang') {
    openModal('lang-modal');
  } else if (action === 'sound') {
    sanctumAudio.toggleSound();
  } else if (action === 'copy-email') {
    navigator.clipboard.writeText('mericulas1@gmail.com');
    showToast('Email copied to clipboard: mericulas1@gmail.com');
  }
}

/* 7. Contact Form Handler */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (typeof sanctumAudio !== 'undefined') sanctumAudio.playChime(800, 'triangle', 0.4);
      showToast('Transmission Received! Meriç will reply to your signal shortly.');
      form.reset();
    });
  }
}

/* 8. Dynamic Toast Notifications */
function showToast(message) {
  let toast = document.getElementById('sanctum-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sanctum-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--bg-glass-heavy);
      border: 1px solid var(--color-gold);
      color: var(--color-gold-bright);
      padding: 14px 28px;
      border-radius: var(--radius-full);
      font-family: var(--font-mono);
      font-size: 0.85rem;
      box-shadow: var(--glow-gold);
      z-index: 3000;
      transition: all 0.3s ease;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 3500);
}

/* 9. Stats Counter Animation */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target') || '0');
        let count = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          entry.target.textContent = count + (entry.target.getAttribute('data-suffix') || '');
        }, 30);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

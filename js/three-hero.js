/* ==========================================================================
   THE SANCTUM CODEX — THREE.JS 3D HERO CANVAS
   Interactive 3D Sci-Fi Holocron / Runic Relic with Orbital Particles & Shaders
   ========================================================================== */

class ThreeHeroScene {
  constructor() {
    this.container = document.getElementById('hero-3d-wrapper');
    this.canvas = document.getElementById('three-hero-canvas');
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.relicGroup = null;
    this.outerRing = null;
    this.innerRing = null;
    this.coreMesh = null;
    this.particleSystem = null;

    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotationX = 0;
    this.targetRotationY = 0;
    this.scrollSpeedBoost = 0;
    this.lastY = window.scrollY;

    this.init();
  }

  init() {
    // 1. Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x060504, 0.015);

    // 2. Camera setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 18);

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffeedd, 0.6);
    this.scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xe5b869, 2.5, 30);
    goldLight.position.set(5, 5, 5);
    this.scene.add(goldLight);

    const emberLight = new THREE.PointLight(0xd96b27, 3.0, 30);
    emberLight.position.set(-5, -4, -3);
    this.scene.add(emberLight);

    const cyanLight = new THREE.PointLight(0x3eb4a1, 2.0, 25);
    cyanLight.position.set(0, 6, -5);
    this.scene.add(cyanLight);

    // 5. Construct 3D Relic Holocron
    this.relicGroup = new THREE.Group();

    // Central Core (Icosahedron glowing core)
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xe5b869,
      emissive: 0xd96b27,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true
    });
    this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.relicGroup.add(this.coreMesh);

    // Inner Runic Ring
    const innerRingGeo = new THREE.TorusGeometry(3.6, 0.08, 16, 100);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xe5b869,
      metalness: 0.9,
      roughness: 0.1
    });
    this.innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    this.innerRing.rotation.x = Math.PI / 3;
    this.relicGroup.add(this.innerRing);

    // Outer Orbital Ring
    const outerRingGeo = new THREE.TorusGeometry(5.2, 0.06, 16, 120);
    const outerRingMat = new THREE.MeshStandardMaterial({
      color: 0x3eb4a1,
      emissive: 0x3eb4a1,
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.1
    });
    this.outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    this.outerRing.rotation.y = Math.PI / 4;
    this.relicGroup.add(this.outerRing);

    // Orbiting Glyphs (Dodecahedron nodes)
    const nodeGeo = new THREE.DodecahedronGeometry(0.35);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xf5d38b,
      emissive: 0xe5b869,
      emissiveIntensity: 0.5
    });

    for (let i = 0; i < 6; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / 6) * Math.PI * 2;
      node.position.set(Math.cos(angle) * 3.6, Math.sin(angle) * 3.6, 0);
      this.innerRing.add(node);
    }

    this.scene.add(this.relicGroup);

    // 6. Particle Stardust Aura
    const particleCount = 600;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0xe5b869);
    const color2 = new THREE.Color(0xd96b27);

    for (let i = 0; i < particleCount; i++) {
      const radius = 6 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });

    this.particleSystem = new THREE.Points(particleGeo, particleMat);
    this.scene.add(this.particleSystem);

    // Event Listeners
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('scroll', this.onScrollBoost.bind(this));
    this.canvas.addEventListener('click', this.onClickShockwave.bind(this));

    // Start render loop
    this.animate();
  }

  onMouseMove(e) {
    this.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    this.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    this.targetRotationY = this.mouseX * 0.8;
    this.targetRotationX = this.mouseY * 0.8;
  }

  onScrollBoost() {
    const delta = Math.abs(window.scrollY - this.lastY);
    this.lastY = window.scrollY;
    this.scrollSpeedBoost = Math.min(delta * 0.005, 0.08);
  }

  onClickShockwave() {
    if (typeof sanctumAudio !== 'undefined') {
      sanctumAudio.playChime(720, 'triangle', 0.4);
    }
    if (this.coreMesh) {
      this.coreMesh.scale.set(1.4, 1.4, 1.4);
      setTimeout(() => {
        this.coreMesh.scale.set(1, 1, 1);
      }, 400);
    }
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const time = performance.now() * 0.001;

    // Decay scroll speed boost
    this.scrollSpeedBoost *= 0.92;

    // Smooth Lerp Rotation via Mouse Tracking
    if (this.relicGroup) {
      this.relicGroup.rotation.y += (this.targetRotationY - this.relicGroup.rotation.y) * 0.05;
      this.relicGroup.rotation.x += (this.targetRotationX - this.relicGroup.rotation.x) * 0.05;
      
      // Continuous background idle rotation + scroll boost spin
      this.relicGroup.rotation.y += 0.003 + this.scrollSpeedBoost;
      
      // Scroll Depth push
      const scrollY = window.scrollY;
      this.relicGroup.position.z = Math.min(scrollY * -0.015, -10);
    }

    if (this.innerRing) {
      this.innerRing.rotation.z = time * (0.4 + this.scrollSpeedBoost * 4);
    }

    if (this.outerRing) {
      this.outerRing.rotation.x = time * (-0.3 - this.scrollSpeedBoost * 4);
      this.outerRing.rotation.z = time * 0.2;
    }

    if (this.coreMesh) {
      this.coreMesh.rotation.y = time * -0.6;
      this.coreMesh.rotation.z = time * 0.3;
    }

    if (this.particleSystem) {
      this.particleSystem.rotation.y = time * 0.05;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof THREE !== 'undefined') {
    window.hero3D = new ThreeHeroScene();
  }
});

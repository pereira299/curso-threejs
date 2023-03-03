const options = {
  targetSelector: "#scene",
  width: 800,
  height: 600,
  backgorundColor: 0x252525,
};

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(options.backgorundColor);

const camera = new THREE.PerspectiveCamera(45, options.width / options.height);
camera.position.set(1.5, 2.5, 8.5);

const light = new THREE.HemisphereLight(0xffffff, 0x080820, 0.25);
light.position.set(0, 4, 0);
scene.add(light);

// const lampada = new THREE.PointLight(0xffffff, 1.5);
// lampada.position.set(0, 4, 0);
// lampada.castShadow = true;
// scene.add(lampada);

// const sol = new THREE.DirectionalLight(0xffffff, 1.5);
// sol.position.set(0, 4, 0);
// sol.castShadow = true;
// scene.add(sol);

const holofote = new THREE.SpotLight(0xffffff, 2.07, 6.6, 0.5);
holofote.position.set(0.25, 5.5, -0.35);
holofote.castShadow = true;
scene.add(holofote);

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render(scene, camera);
  });
});

const x3 = new THREEx3({
  THREE: THREE,
  OrbitControls: THREE.OrbitControls,
  camera: camera,
  renderer: renderer,
  scene: scene,
}, {
  grid: false,
  axes: false,
});

x3.add(camera);
x3.add(light);
// x3.add(lampada);
// x3.add(sol);
x3.add(holofote);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const degToRad = (deg) => {
  return THREE.MathUtils.degToRad(deg);
};
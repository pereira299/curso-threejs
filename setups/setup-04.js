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

const lampada = new THREE.PointLight(0xffffff, 7.4);
lampada.position.set(0, 4, 0);
lampada.castShadow = true;
lampada.shadow.mapSize.width = 1024;
lampada.shadow.mapSize.height = 1024;
lampada.shadowMapWidth = 1024;
lampada.shadowMapHeight = 1024;
lampada.shadow.bias = -0.0001;

scene.add(lampada);


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
x3.add(lampada);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.physicallyCorrectLights = true;

const degToRad = (deg) => {
  return THREE.MathUtils.degToRad(deg);
};
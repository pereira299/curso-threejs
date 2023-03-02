//RENDERER
//Responsavel por desenhar a cena na tela

//SCENE
//Responsavel por armazenar todos os objetos da cena ("palco" da cena)

//CAMERA
//Responsavel por definir a perspectiva da cena (como o usuario vai ver a cena)

//Object
//coisas colocadas na cena

//Light
//Responsavel por armazenar todas as luzes da cena

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

const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 2);
light.position.set(0, 1, 0);
scene.add(light);

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
});

x3.add(camera);
x3.add(light);

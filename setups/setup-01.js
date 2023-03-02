
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
    backgorundColor: 0x252525
}

const renderer = new THREE.WebGLRenderer();
renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector)
    .appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(options.backgorundColor);

const camera = new THREE.PerspectiveCamera(
    45, 
    options.width / options.height
);

camera.position.z = 5;




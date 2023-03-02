//Geometry
//É a forma de um objeto, como um cubo, um cilindro, uma esfera, etc.

//Material
//É a cor e a textura de um objeto, como a cor vermelha, a cor azul, a textura de madeira, etc.

//Mesh
//É a combinação de uma geometria e um material, ou seja, é um objeto que possui uma forma e uma cor.

const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
});
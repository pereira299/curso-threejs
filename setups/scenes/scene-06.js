// Cubo
const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
const cubeMat = new THREE.MeshLambertMaterial({ color: 0x368ee0 });
const cube = new THREE.Mesh(cubeGeo, cubeMat);
cube.position.set(1, 1, 1,);
cube.castShadow = true;
scene.add(cube);

//Chão

const floorGeo = new THREE.PlaneGeometry(10, 10);
const floorMat = new THREE.MeshPhongMaterial({ 
    color: 0xffffff,
    side: THREE.DoubleSide
});
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = degToRad(-90);
floor.receiveShadow = true;
scene.add(floor);
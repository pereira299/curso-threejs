// Basic Material -> fosco com luz propria
// Lambert Material -> fosco sem luz propria
// Phong Material -> brilhante sem luz propria
// Standard Material -> brilhante com fisica de luz 
// |-> Metalness (reflexão) -> 0 = plastico, 1 = metal
// |-> Roughness (brilho) -> 0 = brilhante, 1 = fosco
// Pysical Material



const bolaGeo = new THREE.SphereBufferGeometry(0.5,60,60);
const bolaMat = new THREE.MeshStandardMaterial({ 
    color: 0x368ee0,
    metalness: 0.15,
    roughness: 0.15,
});
const bola = new THREE.Mesh(bolaGeo, bolaMat);
bola.position.set(1, 1, 1,);
bola.castShadow = true;
lampada.target = bola;
scene.add(bola);
x3.add(bola, { name: "Bola" });

const bola2Geo = new THREE.SphereBufferGeometry(0.5,60,60);
const bola2Mat = new THREE.MeshPhysicalMaterial({
    color: 0x368ee0,
    metalness: 0.15,
    roughness: 0.15,
    transparent: true,
    transmission: 0.5,
});
const bola2 = new THREE.Mesh(bola2Geo, bola2Mat);
bola2.position.set(-1, 1, 1,);
bola2.castShadow = true;
scene.add(bola2);
x3.add(bola2, { name: "Bola 2" });

const floorGeo = new THREE.PlaneGeometry(10, 10);
const floorMat = new THREE.MeshStandardMaterial({ 
    color: 0xffffff,
    side: THREE.DoubleSide,
    metalness: 0.15,
    roughness: 0.15,
});
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = degToRad(-90);
floor.receiveShadow = true;
scene.add(floor);
x3.add(floor, { name: "Chão" });
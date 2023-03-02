const material = new THREE.MeshLambertMaterial({
    color: 0xffffff,  // Cor branca
    side: THREE.DoubleSide, // Preenche os dois lados da geometria (padrão é THREE.FrontSide)
});

//cubo
const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), material);
scene.add(cube);

//circulo
const circle = new THREE.Mesh(
    new THREE.CircleBufferGeometry(0.5, 20),
    material
);
circle.position.set(0, 0, 1);
scene.add(circle);
x3.add(circle, {label: "circle"});


//cone
const cone = new THREE.Mesh(
    new THREE.ConeBufferGeometry(0.5, 1, 20),
    material
);
cone.position.set(0, 0, 2);
scene.add(cone);
x3.add(cone, { label: "cone" });


//cilindro
const cylinder = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(0.5, 0.5, 1, 20),
    material
);
cylinder.position.set(0, 0, 4);
scene.add(cylinder);
x3.add(cylinder, { label: "cylinder" });


//dodecaedro
const dodecahedron = new THREE.Mesh(
    new THREE.DodecahedronBufferGeometry(0.5),
    material
);
dodecahedron.position.set(0, 2, 2);
scene.add(dodecahedron);
x3.add(dodecahedron, { label: "dodecahedron" });


//icosahedro
const icosahedron = new THREE.Mesh(
    new THREE.IcosahedronBufferGeometry(0.5),
    material
);
icosahedron.position.set(0, 0, -2);
scene.add(icosahedron);
x3.add(icosahedron, { label: "icosahedron" });

//octaedro
const octahedron = new THREE.Mesh(
    new THREE.OctahedronBufferGeometry(0.5),
    material
);
octahedron.position.set(0, 0, -4);
scene.add(octahedron);
x3.add(octahedron, { label: "octahedron" });


//plano
const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1, 1, 20, 20),
    material
);
plane.position.set(0, 2, 0);
scene.add(plane);
x3.add(plane, { label: "plane" });


//anel
const ring = new THREE.Mesh(
    new THREE.RingBufferGeometry(0.25, 0.5, 20),
    material
);
ring.position.set(0, 2, -2);
scene.add(ring);
x3.add(ring, { label: "ring" });


//esfera
const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.5, 20, 20),
    material
);
sphere.position.set(0, 2, -4);
scene.add(sphere);
x3.add(sphere, { label: "sphere" });


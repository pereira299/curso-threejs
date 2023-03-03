const heartPath = new THREE.Path();

heartPath.moveTo(0.3, 1.5);
heartPath.quadraticCurveTo(0.3,2.2,0.9, 2.2);
heartPath.quadraticCurveTo(1.3,2.2,1.4, 1.7);
heartPath.quadraticCurveTo(1.5,2.2,1.9, 2.2);
heartPath.quadraticCurveTo(2.5,2.2,2.5, 1.5);
heartPath.quadraticCurveTo(2.5,1.0,1.4, 0.3);
heartPath.quadraticCurveTo(0.3,1.0,0.3, 1.5);

const heartGeo = new THREE.BufferGeometry(heartPath);
heartGeo.setFromPoints(heartPath.getPoints());

const material = new THREE.LineBasicMaterial({ color: 0xfff0f0 });

const heart = new THREE.Line(heartGeo, material);
scene.add(heart);

//shape

const heartShape = new THREE.Shape();

heartShape.moveTo(-0.3, 1.5);
heartShape.quadraticCurveTo(-0.3,2.2,-0.9, 2.2);
heartShape.quadraticCurveTo(-1.3,2.2,-1.4, 1.7);
heartShape.quadraticCurveTo(-1.5,2.2,-1.9, 2.2);
heartShape.quadraticCurveTo(-2.5,2.2,-2.5, 1.5);
heartShape.quadraticCurveTo(-2.5,1.0,-1.4, 0.3);
heartShape.quadraticCurveTo(-0.3,1.0,-0.3, 1.5);

const heartShapeGeo = new THREE.ShapeBufferGeometry(heartShape);
const shapeMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xfff0f0,
    side: THREE.DoubleSide 
});

const heartShapeMesh = new THREE.Mesh(heartShapeGeo, shapeMaterial);
scene.add(heartShapeMesh);

// extruded shape

const extrudedGeo = new THREE.ExtrudeBufferGeometry(heartShape, {
    depth: 0.01,
    bevelEnabled: true,
    bevelSegments: 10,
    bevelSize: 0.1,
    bevelThickness: 0.1
});

const extrudedMaterial = new THREE.MeshLambertMaterial({
    color: 0xeb3452,
    side: THREE.DoubleSide
});

const extrudedMesh = new THREE.Mesh(extrudedGeo, extrudedMaterial);

extrudedMesh.position.set(0, 0, 0.5); // move a forma para a posição desejada
extrudedMesh.rotation.set(0, 1.5, 0); // rotaciona a forma em torno do eixo x, y e z
scene.add(extrudedMesh);

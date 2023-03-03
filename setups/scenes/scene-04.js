const linePath = new THREE.Path();
linePath.moveTo(1, 3);
linePath.lineTo(3, 3);
linePath.lineTo(3, 1);
linePath.lineTo(1, 1);
linePath.lineTo(1, 3);


const lineGeo = new THREE.BufferGeometry(linePath);
lineGeo.setFromPoints(linePath.getPoints());

const material = new THREE.LineBasicMaterial({ color: 0xfff0f0 });

const line = new THREE.Line(lineGeo, material);

scene.add(line);

const curvePath = new THREE.Path();
curvePath.moveTo(-1, 3);
curvePath.quadraticCurveTo(-2, 4, -3, 3); // curva simples de 1 ponto de controle
curvePath.bezierCurveTo(-4, 2.5, -4, 1, -3, 0.5); // curva de 2 pontos de controle

const curveGeo = new THREE.BufferGeometry(curvePath);
curveGeo.setFromPoints(curvePath.getPoints());

const curve = new THREE.Line(curveGeo, material);
scene.add(curve);
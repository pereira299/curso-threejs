const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.HemisphereLight(
    0xFFFFBB, 0x080820, 2
);
light.position.set(0, 1, 0)
scene.add(light);

renderer.setAnimationLoop(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    x3.tick();
    x3.fps(() => {
        renderer.render(scene, camera);
    })
});

const x3 = new THREEx3(
    {
        THREE: THREE,
        OrbitControls: THREE.OrbitControls,
        camera: camera,
        renderer: renderer,
        scene: scene,
    }
);

x3.add(camera);
x3.add(light);
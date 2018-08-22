import * as THREE from "three";

const SkillScene = function(id) {
  var container = document.getElementById(id);
  // these setup the display
  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(
    50,
    container.offsetWidth / container.offsetHeight,
    1,
    1000
  );
  camera.position.z = 10;
  camera.position.y = 0;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  var spotLight = new THREE.SpotLight(0xffffff, 2);
  spotLight.position.set(0, 40, 0);
  spotLight.castShadow = true;
  scene.add(spotLight);

  var light = new THREE.AmbientLight(0xffffcc, 0.75); // soft white light
  scene.add(light);

  // these are the objects
  var geometry = new THREE.BoxGeometry(2, 1, 1);

  geometry.faces[0].color.setHex(0xffc857);
  geometry.faces[1].color.setHex(0xffc857);
  geometry.faces[2].color.setHex(0xe9724c);
  geometry.faces[3].color.setHex(0xe9724c);
  geometry.faces[4].color.setHex(0xc5283d);
  geometry.faces[5].color.setHex(0xc5283d);
  geometry.faces[6].color.setHex(0xfdd692);
  geometry.faces[7].color.setHex(0xfdd692);
  geometry.faces[8].color.setHex(0xfbffb9);
  geometry.faces[9].color.setHex(0xfbffb9);
  geometry.faces[10].color.setHex(0xf46036);
  geometry.faces[11].color.setHex(0xf46036);

  var material = new THREE.MeshLambertMaterial({
    wireframe: false,
    shading: THREE.FlatShading,
    vertexColors: THREE.FaceColors
  });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  var options = {
    size: 90,
    height: 90,
    weight: "normal",
    font: "helvetiker",
    style: "normal",
    bevelThickness: 2,
    bevelSize: 4,
    bevelSegments: 3,
    bevelEnabled: true,
    curveSegments: 12,
    steps: 1
  };

  var textGeom = new THREE.TextGeometry("hello Sachin!", options);
  // var materialText = new THREE.MeshPhongMaterial({
  //   color: 0xdddddd
  // });
  var textMesh = new THREE.Mesh(textGeom, material);
  scene.add(textMesh);
  // the pedistal
  // var geometryCyl = new THREE.CylinderGeometry(2, 2, 0.25, 64);
  // var materialCyl = new THREE.MeshLambertMaterial({ color: 0x333333 });
  // var cylinder = new THREE.Mesh(geometryCyl, materialCyl);
  // cylinder.position.y = -2;
  // scene.add(cylinder);

  // the pedistal
  // var geometryTube = new THREE.CylinderGeometry(2, 2, 10, 64);
  // var materialTube = new THREE.MeshLambertMaterial({
  //   color: 0x333333,
  //   transparent: true,
  //   opacity: 0.1
  // });
  // var tube = new THREE.Mesh(geometryTube, materialTube);
  // //cylinder.position.y = -2;
  // scene.add(tube);

  // the plane
  // var geometryPlane = new THREE.PlaneGeometry(20, 20, 32);
  // var materialPlane = new THREE.MeshBasicMaterial({
  //   color: 0x111111,
  //   side: THREE.DoubleSide
  // });
  // var plane = new THREE.Mesh(geometryPlane, materialPlane);
  // plane.position.y = -2;
  // plane.rotation.x = Math.PI / 2;
  // scene.add(plane);

  function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.025;
    cube.rotation.y += 0.025;
    cube.rotation.z += 0.025;
    renderer.render(scene, camera);
  }
  render();
};

export default SkillScene;

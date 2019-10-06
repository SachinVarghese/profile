import * as THREE from "three";
import backgroundImg from "../../../../assets/cover_main.jpeg";

export default function(id) {
  var container = document.getElementById(id);
  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(
    75,
    container.offsetWidth / container.offsetHeight,
    1,
    1000
  );
  camera.position.z = 10;
  camera.position.y = 0;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  window.addEventListener('resize', () => {
      renderer.setSize(container.offsetWidth,container.offsetHeight);
      camera.aspect = container.offsetWidth / container.offsetHeight;

      camera.updateProjectionMatrix();
  })

  var geometry = new THREE.SphereGeometry(1, 100, 100);
  var material = null;
  var addBubble = function(x){
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 5-4*x;
    mesh.position.y = -4+2*x;
    mesh.position.z = -2*x;
    mesh.rotation.y += x*Math.PI/6;
    scene.add(mesh);
  }


    var loader = new THREE.TextureLoader();
    loader.load(backgroundImg , function(texture){
        scene.background = texture;
        material = new THREE.MeshLambertMaterial({color: 0xF7F7F7, map:texture});

        for(var i = 0; i<5;i++) {
            addBubble(i);
        }
    });


  var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
  light.position.set(0,0,0);
  scene.add(light);

  var newLight = new THREE.PointLight(0xFFFFFF, 2, 1000)
  newLight.position.set(0,0,25);
  scene.add(newLight);

  var render = function() {
      requestAnimationFrame(render);


      renderer.render(scene, camera);
  }


  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2();

  function onMouseMove(event) {
      event.preventDefault();

      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      var intersects = raycaster.intersectObjects(scene.children, true);
      for (var i = 0; i < intersects.length; i++) {
        intersects[i].object.rotation.y += Math.PI/2;
      }
  }  

  window.addEventListener('click', onMouseMove);
  render();
};

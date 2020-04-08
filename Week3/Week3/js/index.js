var container, stats;
var camera, scene, raycaster, renderer;

init();
render();


function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.y+=1300;
    camera.position.z+=4000;
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 3);
  light.position.set( 1, 1, 1 ).normalize();
  scene.add(light);
  renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
    container.appendChild( renderer.domElement);
  }
  /////////////////////////
  function RockMan01(){
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load("RockMan01.mtl", function(materials){
    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load("RockMan01.obj", function(mesh){
    mesh.scale.set(10, 10, 10);
    scene.add(mesh);
    });
  });
  }
  ///////////////////////////////
  function RockMan02(){
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load("RockMan02.mtl", function(materials){
    materials.preload();

    var objLoader = new THREE.OBJLoader();
  	objLoader.setMaterials(materials);
    objLoader.load("RockMan02.obj", function(mesh){
    mesh.scale.set(10, 10, 10);
    scene.add(mesh);
    });
  });
  }
  ///////////////////////////////
  function RockMan03(){
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load("RockMan03.mtl", function(materials){
    materials.preload();

    var objLoader = new THREE.OBJLoader();
  	objLoader.setMaterials(materials);
    objLoader.load("RockMan03.obj", function(mesh){
    mesh.scale.set(10, 10, 10);
    scene.add(mesh);
    });
  });
  }
  ///////////////////////////
  function render() {
    requestAnimationFrame(render);
    renderer.render(scene,camera);
    document.getElementById("showRockMan01").addEventListener("click",RockMan01);
    document.getElementById("showRockMan02").addEventListener("click",RockMan02);
    document.getElementById("showRockMan03").addEventListener("click",RockMan03);
}

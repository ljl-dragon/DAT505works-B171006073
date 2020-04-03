var scene,camera,renderer;
var geometry,material,mesh;

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,30,100000);
  renderer = new THREE.WebGLRenderer({
    antialias:true
  })
  renderer.setClearColor("#000000")
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function geometry(){
  var light1 = new THREE.AmbientLight(0xffffff,0.5);//设置环境光
  scene.add(light1);//加入环境光
  var light2 = new THREE.PointLight(0xffffff,0.5);//设置点光源
  scene.add(light2);//加入点光源

  //载入地球/////////////////////////////////////////////////////////////////////
  var geometry = new THREE.SphereGeometry(100,100,100);
  //载入贴图
  var ImageLoader = new THREE.ImageLoader();
  ImageLoader.load('Earth.jpg',function(img){
    var texture = new THREE.Texture(img);
    texture.needsUpdate = true;
    var material = new THREE.MeshLambertMaterial({
      map:texture,
    })
    //添加到场景
    mesh1= new THREE.Mesh(geometry,material);
    mesh1.position.z = -1000;
    scene.add(mesh1);
  })
  //载入月球///////////////////////////////////////////////////////////////////
  var geometry2 = new THREE.SphereGeometry(50,50,50);
  var ImageLoader2 = new THREE.ImageLoader();
  ImageLoader2.load('Moon.jpg',function(img){
    var texture2 = new THREE.Texture(img);
    texture2.needsUpdate = true;
    var material2 = new THREE.MeshLambertMaterial({
      map:texture2,
    })
    //添加到场景
    mesh2= new THREE.Mesh(geometry2,material2);
    mesh2.position.z = -1000;
    mesh2.position.x = +250;
    scene.add(mesh2);
})
}


let angle = 0;
function render(){
  requestAnimationFrame(render);
  //自转
  mesh1.rotation.y += 0.005;
  //mesh2.rotation.y += 0.005；
  renderer.render(scene,camera);
  //公转
  angle += 0.01;
  var x = 400*Math.sin(angle)
  var z = 400*Math.cos(angle)-1000
  mesh2.position.set(x,x,z);

}

/*var deg=Math.PI/2;
function ballAnim(){
      deg+=1/6*Math.PI/180;//每次转动1/6度

      balls.forEach((ball,index)=>{
      var ballDeg=3*deg/(index+1);//根据索引值设置每个球体转动不同的角度
      ball.position.x=Math.sin(ballDeg)*circles[index];
      ball.position.z=Math.cos(ballDeg)*circles[index];
    })
}*/

init();
geometry();
render();

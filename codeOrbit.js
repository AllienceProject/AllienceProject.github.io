
var object;
const scene = new THREE.Scene();

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    controls.handleResize();

}
const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,2000);
const renderer =  new THREE.WebGLRenderer({
    canvas: document.getElementById("myCanvas"),
});
floorMat = new THREE.MeshStandardMaterial( {
    roughness: 0.1,
    color: 0xffffff,
    metalness: 0.5,
    bumpScale: 0.0005
} );
function render() {

  controls.update( clock.getDelta() );
    renderer.render( scene, camera );

}
const textureLoader = new THREE.TextureLoader();
			var texture= 	textureLoader.load( "mesh_today.png", function ( map ) {

					map.wrapS = THREE.RepeatWrapping;
					map.wrapT = THREE.RepeatWrapping;
					map.anisotropy = 2;
					map.repeat.set( 5, 20 );
					map.encoding = THREE.sRGBEncoding;
					floorMat.map = map;
					floorMat.needsUpdate = true;

				} );
              

                
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.render(scene,camera,controls);

/*var objloader = new THREE.OBJLoader();
objloader.load( "mesh_today.obj",function(object){
    
    
    object.position.set(5,5,-100);
    scene.add(object);
})*/

camera.position.set(500,300,0);
const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial({color: 0xFF6437});
const torus = new THREE.Mesh(geometry,floorMat);

//scene.add(torus);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight,pointLight);
//scene.background = new THREE.Color(0xC6C532);
var backgroundTexture = new THREE.TextureLoader().load("sky_pic.jpeg");
scene.background = backgroundTexture;


var controls = new THREE.OrbitControls(camera, renderer.domElement);

               



var OBJFile = "last_85k.obj";
var MTLFile = "last_85k.mtl";
var JPGFile = "last_85k.png";


new THREE.MTLLoader()
.load(MTLFile, function (materials) {
    materials.preload();
    new THREE.OBJLoader()
        .setMaterials(materials)
        .load(OBJFile, function (object) {
           object.position.set(0,200,0);
           
            object.scale.x = 20;
            object.scale.y = 20;
            object.scale.z = 20;
            
            scene.add(object);
          
                
       
        });
});
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera,controls); 
   
    render();
        
}

animate();
const sphereRadius = 3;
    const sphereWidthDivisions = 32;
    const sphereHeightDivisions = 16;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
    const sphereMat = new THREE.MeshPhongMaterial({color: '#CA8'});
    const mesh = new THREE.Mesh(sphereGeo, sphereMat);
    mesh.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
    //scene.add(mesh);

    const planeSize = 2000;

    const loader = new THREE.TextureLoader();
    const textur = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
    textur.wrapS = THREE.RepeatWrapping;
    textur.wrapT = THREE.RepeatWrapping;
    textur.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    textur.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: textur,
      side: THREE.DoubleSide,
    });
    const mesh_2 = new THREE.Mesh(planeGeo, planeMat);
    mesh_2.rotation.x = Math.PI * -.5;
    //scene.add(mesh_2);

   

    function cameraReset(){
        camera.postion.set(500,300,0);
        animate();

    }

    
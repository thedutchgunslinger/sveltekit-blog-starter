<script>
	import * as THREE from 'three';
	import { onMount } from 'svelte';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
let mesh;
	onMount(() => {
		const color2 = new THREE.Color(0x181818);
        let size = { width: 0, height: 0 };
       
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
  
		scene.background = color2;
		const renderer = new THREE.WebGLRenderer({ antialias: true });

//         const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
// scene.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 0, 5, 4 );
directionalLight.lookAt( 0, 0, 0 );
        scene.add( directionalLight );


		renderer.physicallyCorrectLights = true;
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.toneMappingExposure = 5;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		renderer.setSize(window.innerWidth, window.innerHeight);
		const viewer = document.getElementById('viewer3d');
		viewer.appendChild(renderer.domElement);

	

		camera.position.z = 25;
		camera.position.y = 5;

      


        const loader = new GLTFLoader();


// Load a glTF resource
loader.load(
	// resource URL
	'island.glb',
	// called when the resource is loaded
	function ( gltf ) {

        let modal = gltf.scene;
        // modal.position.y
		scene.add( modal );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
        mesh = gltf.scene;
console.log('model',mesh)

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);



		function animate() {
			requestAnimationFrame(animate);
            
            if(mesh){
                mesh.rotation.y += 0.001;
            }


			renderer.render(scene, camera);
		}

		animate();

        // Instantiate a loader

		const onResize = () => {
			size.width = viewer.clientWidth;
			size.height = viewer.clientHeight;

				camera.aspect = size.width / size.height;
				camera.updateProjectionMatrix();

			renderer.setSize(size.width, size.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		};

		window.addEventListener('resize', onResize);
		onResize();
	});
</script>

<!-- <style>
    #viewer3d {
        width: 100%;
        height: 100%;
        outline: 2px solid red;
    }
</style> -->

<div id="viewer3d" />



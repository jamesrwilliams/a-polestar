/*
 * Three.js Animation and Test Code
 *
 * @James_Rwilliams
 *
 *
 * Three.js
 * LeapMotion Camera Controls - https://github.com/leapmotion/Leap-Three-Camera-Controls
 *
 */
 
// Custom variables to control the light levels.
	var light_intesity = 1;
	var ambient_light_intensity = 1;
	
	/*
		
		255
		255
		251
	*/
	
	var al_red = 1;
	var al_green = 1;
	var al_blue = 0.8;
	
	var scene = new THREE.Scene(); 
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 
	var renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );
	
	var cube;
	
	var debug_text = "";
	
	// Leapmotion Camera Controls
	
	var controller = new Leap.Controller();
	var controls = new THREE.LeapTrackballControls( camera , controller );
	
	// scene.setAttribute('crossorigin', 'anonymous');
	
	window.onload = function() {
		
		init();
		animate();
		
		// leap_message( "" + String(rotation_x) + " Hello" );
		
	}
	
	function init(){
		
		// Adds the canvas render area to the DOM
		var stage = document.getElementById("stage");
		stage.appendChild( renderer.domElement );
	
		// Setup the spehere opject
		var geometry = new THREE.SphereGeometry( 4.5, 50, 50 ); 
		
		// Set the speheres texture to the linked texture img file.
		var material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/textures/earth.jpg') });
	
		controls.rotationSpeed            = 10;
        controls.rotationDampening        = .98;
        controls.zoom                     = 40;
        controls.zoomDampening            = .6;
        controls.zoomCutoff               = .9;
        controls.zoomEnabled              = true;

        controls.minZoom                  = 10;
        controls.maxZoom                  = 10;
	
		// Create the sphere and add the texture then add to seen followed by setting the camera view positions z access vale
		var cube = new THREE.Mesh( geometry, material ); 
		var ambientLight = new THREE.AmbientLight();
		
		scene.add( cube ); camera.position.z = 10; 
				
		ambientLight.color.setRGB( al_red, al_green, al_blue);
			
		scene.add(ambientLight);
	
		cube.rotation.x += 0.5; // Inital View Ajustment
		
			

		
		var render = function () { requestAnimationFrame( render ); 
			
			// Think animation loop...
			
			cube.rotation.y += 0.0006;
			
			debug = String(cube.rotation.y);		
	
		}; 
			
		render();
		controller.connect();
			
		window.addEventListener( 'resize', onWindowResize, false );
			
	}
	
	leap_message("hello");
	
	console.log(debug_text);
	
	/*
	 * Animate Function
	 * 
	 *
	 *
	 */		
				
	function animate(){
		
		controls.update();
		renderer.render( scene , camera );

		requestAnimationFrame( animate );
		
	}
	
	/*
	 *
	 * 
	 *
	 *
	 */	
	
	function onWindowResize(){
	
	    camera.aspect = window.innerWidth / window.innerHeight;
	    camera.updateProjectionMatrix();
	
	    renderer.setSize( window.innerWidth, window.innerHeight );
	
	}
	
	/*
	 *
	 * 
	 *
	 *
	 */	

	function leap_message(msg){
		
		// TODO Remove jQuery dependancy
		
		$("#screen_console").text(msg);
	
		
	}


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
	var light_intesity = 0.5;
	var ambient_light_intensity = 1;
	
	var al_red = 1;
	var al_green = 1;
	var al_blue = 0.8;
	
	var scene = new THREE.Scene(); 
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 
	var renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );
	
	var cube;
	
	var controller = new Leap.Controller();
	var controls = new THREE.LeapTrackballControls( camera , controller );
	
	/*
	 * onload function calls once the page has loaded fully.
	 *
	 *
	 */
	 
	window.onload = function() {
		
		init();
		animate();
		
	}
	
	function init(){
		
		// Adds the canvas render area to the DOM
		var stage = document.getElementById("stage");
		stage.appendChild( renderer.domElement );
	
		// Setup the spehere opject
		var geometry = new THREE.SphereGeometry( 4.5, 50, 50 ); 
		
		// Set the speheres texture to the linked texture img file.
		var material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/textures/earth.jpg') });
	
		controls.rotationSpeed            = 5;
        controls.rotationDampening        = .98;
        controls.zoom                     = 40;
        controls.zoomDampening            = .6;
        controls.zoomCutoff               = .9;
        controls.zoomEnabled              = true;

        controls.minZoom                  = 10;
        controls.maxZoom                  = 10;
	
		// Create the sphere and add the texture then add to seen followed 
		// by setting the camera view positions z access value
		
		var cube = new THREE.Mesh( geometry, material ); 
		var ambientLight = new THREE.AmbientLight();
		
		scene.add( cube ); camera.position.z = 10; 
				
		ambientLight.color.setRGB( al_red, al_green, al_blue);
		scene.add(ambientLight);
	
	
		cube.rotation.x += 0.5; // Inital View Ajustment	 
		
		var render = function () { requestAnimationFrame( render ); 
			

			// Start animation loop..
			leap_message("[VELOCITY] x = " + round2(controls.angularVelocity.x) + " y = " + round2(controls.angularVelocity.y) + " z = " + round2(controls.angularVelocity.z), 1);
			leap_message("[ROTATION] x = " + round2(controls.rotation._x) 		+ " y = " + round2(controls.rotation._y) 	   + " z = " + round2(controls.rotation._z), 2);
			leap_message("[ GESTURE] " + controller.lastValidFrame.hands[0], 3);
	
		}; 
			
		render();
		controller.connect();
			
		window.addEventListener( 'resize', onWindowResize, false );
			
		console.log(controller.lastValidFrame);	
			
	}

	var gesture_controller = Leap.loop({enableGestures: true}, function(frame){
		
		console.legnth(gesture.duration);
		
		if(frame.valid && frame.gestures.length > 0){			
			
			frame.gestures.forEach(function(gesture){
				
				switch (gesture.type){
				
				case "circle":
				console.log("Circle Gesture");
				
				break;
				
				case "keyTap":
				console.log("Key Tap Gesture");
				
				break;
				
				case "screenTap":
				console.log("Screen Tap Gesture");
				
				break;
				
				case "swipe":
				console.log("Swipe Gesture");
				break;
				
				}
			
			});
			
		}
		
	});
	
	
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
	 * Fires when the page reloads to re init the js
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
	 * Utility Function: Output Data to the core display
	 * 
	 *
	 *
	 */	

	function leap_message(msg, output){
		
		// TODO Remove jQuery dependancy
		$("#screen_console p:nth-child(" + output + ")").text(msg);
		
	}
	
	/*
	 * Utility Function: Round to two decimal places
	 * 
	 * Used to round the LeapMotion data to two decimal palces for debugging
	 *
	 * @returns number
	 *
	 */
		
	function round2(num){
	
		return Math.round(num * 100) / 100;	
		
	}
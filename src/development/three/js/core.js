/*
 * Three.js Animation and Test Code
 *
 * @James_Rwilliams
 *
 */
 
// Custom variables to control the light levels.
			var light_intesity = 1;
			var ambient_light_intensity = 0.1;
			
			/*
				
				255
				255
				251
			*/
			
			var al_red = 0.05;
			var al_green = 0.05;
			var al_blue = 0.01;
	
			
			
			var scene = new THREE.Scene(); 
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 
			var renderer = new THREE.WebGLRenderer(); renderer.setSize( window.innerWidth, window.innerHeight );
			
			// scene.setAttribute('crossorigin', 'anonymous');
			
			// Adds the canvas render area to the DOM
			var stage = document.getElementById("stage");
			stage.appendChild( renderer.domElement );
			
			// Setup the spehere opject
			var geometry = new THREE.SphereGeometry( 4.5, 50, 50 ); 
			
			// Set the speheres texture to the linked texture img file.
			var material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('img/textures/earth.jpg') });


			// Create the sphere and add the texture then add to seen followed by setting the camera view positions z access vale
			var cube = new THREE.Mesh( geometry, material ); 
			
				scene.add( cube ); camera.position.z = 10; 
			
			var directionalLight = new THREE.DirectionalLight();
			
				directionalLight.color.setRGB(light_intesity,light_intesity,light_intesity);
				directionalLight.position.set(1, 1, 1).normalize();
				
				scene.add(directionalLight);
			
			var ambientLight = new THREE.AmbientLight();
			
				ambientLight.color.setRGB( al_red, al_green, al_blue);
				scene.add(ambientLight);
			
				cube.rotation.x += 0.5;
			
			var render = function () { requestAnimationFrame( render ); 
				
				cube.rotation.y += 0.0006;
				// cube.rotation.z += 0.01;
				
				renderer.render(scene, camera); }; 
				
				render(); 
				
			window.addEventListener( 'resize', onWindowResize, false );

			function onWindowResize(){
			
			    camera.aspect = window.innerWidth / window.innerHeight;
			    camera.updateProjectionMatrix();
			
			    renderer.setSize( window.innerWidth, window.innerHeight );
			
			}

   /*
	* OTS AR Project
	*
	* Sandbox > Basic Stage Playground
	* @James_RWilliams
	*/
 
	
	var output = document.getElementById('output');
	Leap.loop(function (frame) {
    
    
    var controller = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
	    
        switch (gesture.type){
          case "circle":
              ots_alert("Circle Gesture");
              break;
          case "keyTap":
              ots_alert("Key Tap Gesture");
              break;
          case "screenTap":
              ots_alert("Screen Tap Gesture");
              break;
          case "swipe":
              ots_alert("Swipe Gesture");
              break;
        }
    });
  }
});

    
  });
  
  

   /*
	* Custom Alert Function
	*
	* Sends a custom alert as console.log() would fire too often and lag the browser from paiting frames
	*/

	function ots_alert(msg){
		
		$("#screen_console").append("<p>" + msg + "</p>");
		
	}
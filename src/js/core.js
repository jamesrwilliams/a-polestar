/*
 * OTS AR Project
 *
 * Sandbox > Basic Stage Playground
 * @James_RWilliams
 */
 
var cats = {};

Leap.loop(function(frame) {

  frame.hands.forEach(function(hand, index) {
    
    var cat = ( cats[index] || (cats[index] = new Cat()) );    
    cat.setTransform(hand.screenPosition());
    
  });
  
}).use('screenPosition', {scale: 0.25});


var Cat = function() {
  var cat = this;
  var img = document.createElement('img');
  img.src = './img/icon.svg';
  img.style.position = 'absolute';
  img.onload = function () {
    cat.setTransform([window.innerWidth/2,window.innerHeight/2], 0);
    document.getElementById('stage').appendChild(img);
  }
  
  cat.setTransform = function(position, rotation) {

    img.style.left = position[0] - img.width  / 2 + 'px';
    img.style.top  = position[1] - img.height / 2 + 'px';
    
    img.style.height = 25 + 'px';
    img.style.width = 25 + 'px';
    	
    img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
    img.style.OTransform = img.style.transform;

  };

};

ots_alert("Hello World");

cats[0] = new Cat();

// This allows us to move the cat even whilst in an iFrame.
Leap.loopController.setBackground(true)




   /*
	* Custom Alert Function
	*
	* Sends a custom alert as console.log() would fire too often and lag the browser from paiting frames
	*/

	function ots_alert(msg){
		
		$("#screen_console").append("<p>" + msg + "</p>");
		
	}
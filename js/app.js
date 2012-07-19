/*************************************
 * HTML5 Device Orientation API Demo
 * Tomomi Imura @girlie_mac
 ************************************/

window.onload = function() {
	var isStopped = false;
	var alpha = beta = gamma = 0;

	var answers = [
		'It is certain',
		'It is decidedly so',
		'Without a doubt',
		'Yes, definitely',
		'You may rely on it',
		'As I see it, yes',
		'Most likely',
		'Outlook good',
		'Yes',
		'Signs point to yes',
		'Reply hazy, try again',
		'Ask again later',
		'Better not tell you now',
		'Cannot predict now',
		'Concentrate and ask again',
		'Don\'t count on it',
		'My reply is no',
		'My sources say no',
		'Outlook not so good',
		'Very doubtful'
	];
	var answer = answers[Math.floor(Math.random() * (answers.length))];
	var messageContainer = document.getElementById('messageContainer');

/*
	messageContainer.addEventListener('click', function() {
		stopped = (stopped) ? false : true;
		
	}, false);
*/
	
	if (window.DeviceOrientationEvent){
		window.addEventListener('deviceorientation', update, true);
	
	} else {
		var warning = document.getElementById('warning');
		warning.innerHTML = 'This browser does not support the DeviceOrientation Events :-(';
	}
	
	function update(event){
		var debug = document.getElementById('debug');
		var message = document.getElementById('message');
		
		var transform = messageContainer.style.transform;
		
		alpha = Math.floor(event.alpha);
		beta = Math.floor(event.beta);
		gamma = Math.floor(event.gamma);
		
		debug.innerHTML = 'Alpha: '+alpha+ ', Beta: ' +beta+ ', and Gamma is: ' +gamma;
		
		
		// a device is place on a flat surface
		isStopped = (beta < 5 && beta > -5 && gamma < 5 && gamma > -5) ? true : false;
		
		if(isStopped == false) {
			message.style.opacity = .75;
			answer = answers[Math.floor(Math.random() * (answers.length))];
			
		} else {
			message.style.opacity = 1;
			debug.innerHTML += '. Device is on a flat surface: ' +isStopped;
		}
		
		message.innerHTML = answer;
		// this is buggy on FF. If the message is putside of the animated triangle, it works fine.
		
		transform = 'rotateZ(' +alpha+ 'deg) rotateX(' +beta+ 'deg) rotateY(' +gamma+ 'deg)';			
		// 3D Transform	
		messageContainer.style.webkitTransform = messageContainer.style.MozTransform = transform;
		// 2D for Opera
		messageContainer.style.OTransform = messageContainer.style.msTransform = 'rotate(' +alpha+ 'deg)'; 

	}

}



particlesJS.load('particles-js', 'particles.json');
var base = 1;
var speed = 5;
//simulate beat or something
setInterval(function(){
	speed+=10;
	//console.log(window.pJSDom[0].pJS.particles);
}, 1000);
// do fun math stuff
setInterval(() => {
	speed = speed/1.2
	//console.log(speed.toFixed(2));
	window.pJSDom[0].pJS.particles.move.speed = speed+base;
}, 100);
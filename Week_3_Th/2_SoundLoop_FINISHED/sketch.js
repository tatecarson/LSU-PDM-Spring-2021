//sync Tone with p5js 

var synth;

function setup() {
	createCanvas(400, 400)
	background(0);
	synth = new Tone.Synth().toMaster();
	//the looper's callback is passed the timeFromNow
	//this value should be used as a reference point from
	//which to schedule sounds
	//just like Tone.Loop but allows p5js functions inside of it 
	looper1 = new p5.SoundLoop(function (timeFromNow) {
		synth.triggerAttackRelease('c4', timeFromNow);
		fill(255)
		ellipse(random(0, width), random(0, height), 20)
	}, 2);

	//stop after 10 iteratios;
	looper1.maxIterations = 10;
	//start the loop

	looper1.start();

}
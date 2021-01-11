//sync Tone with p5js 

var synth, looper;

function setup() {
	createCanvas(400, 400);
	background(0);
	synth = new Tone.Synth().toMaster();

	looper = new p5.SoundLoop((time) => {
		synth.triggerAttackRelease('c4', time);
		fill(255);
		ellipse(random(0, width), random(0, height), 20)
	}, 2)

	loop.maxIterations = 10;
	looper.start();

}
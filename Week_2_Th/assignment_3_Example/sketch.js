// PDM Audio Assignment 3 Example
//
// Jesse Allison 2017
//
// image from: https://s-media-cache-ak0.pinimg.com/736x/16/a3/66/16a3667684219887662db950c4f6466c.jpg
//


var title = "Dive Splash Sound Object";
var instructions = "Click and hold to hear the sound effect.";

var osc1, osc2, mult, lfo, filter, gainNode, env, env2, noise;
var noise2, env3;
var img;

function preload() {
	img = loadImage("images/dive.jpg");
}

function setup() {
	createCanvas(574,1024);
	background(200);

	env2 = new Tone.AmplitudeEnvelope().toMaster();
	lfo = new Tone.LFO(10, 400, 4000).start();
	filter = new Tone.Filter(200, "lowpass").connect(env2);
	lfo.connect(filter.frequency);
	
	noise = new Tone.Noise('brown').connect(filter);
	noise.start();
	
	// splash
	env3 = new Tone.AmplitudeEnvelope().toMaster();
	noise = new Tone.Noise('white').connect(env3);
	noise.start();
	
	// AM Synthesis
	
	osc1 = new Tone.Oscillator(400, "sine").start();;
	osc2 = new Tone.Oscillator(50, "sine").start();; 
	mult = new Tone.Multiply();
	osc1.connect(mult,0,0);
	osc2.connect(mult,0,1);
	
	
	gainNode = Tone.context.createGain().toMaster();
	env = new Tone.Envelope({
		"attack" : 0.1,
		"decay" : 0.2,
		"sustain" : 0.5,
		"release" : 1.8,
	});
	env.connect(gainNode.gain);
	mult.connect(gainNode);
	
	
}

function draw() {
	fill(0, 50, 0); 
	textAlign(10,10);
	text(title, 10, 10);
	text(instructions, 10, 30);
	
}

function mousePressed() {
	sonicEvent();
	image(img, 0, 0);
}

function mouseReleased() {
	sonicSilence();
	background(200);
}

function sonicEvent() {
	
	env2.triggerAttack();

	env.triggerAttackRelease(1.6, "+0.25");
	
	osc2.frequency.value = 50.;
	osc2.frequency.linearRampToValue(2, 3);
}

function sonicSilence() {
	// Use if you need to turn something off.
	env2.triggerRelease();
	env3.triggerAttackRelease(0.2);
}




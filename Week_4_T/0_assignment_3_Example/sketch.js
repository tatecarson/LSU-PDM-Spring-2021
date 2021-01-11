// PDM Audio Assignment 3 Example
//
// Jesse Allison 2017
//
// image from: https://s-media-cache-ak0.pinimg.com/736x/16/a3/66/16a3667684219887662db950c4f6466c.jpg
//

const title = 'Dive Splash Sound Object';
const instructions = 'Click and hold to hear the sound effect.';
let osc1;
let osc2;
let multi;
let lfo;
let filter;
let gainNode;
let env;
let env2;
let noise;
let env3;
let img;

function preload() {
	img = loadImage('images/dive.jpg');
}

function setup() {
	createCanvas(574, 1024);
	background(200);

	/*
	think about the below signal flow - we define elements in reverse order
	First noise source
	Noise -> Filter -> Amplitude Envelope -> to master

	Modulation flow
	LFO -> Filter frequency

	Second noise source
	Noise -> Amplitude envelope -> to master

	AM Synthesis
	Osc1, Osc2 -> Multiply -> Gain Node -> Master

	Modulation - in this case we don't run sound into the
	envelope but it controls the amplitude of our signal
	Envelope -> gain of the gain node
	*/

	// First Noise
	// initialize the amplitude envelope and send to master
	env2 = new Tone.AmplitudeEnvelope().toMaster();

	// initialize the LFO at a frequency range of 10 hertz, oscillating
	// 10 times a second the oscillation are between 400 and 4000
	lfo = new Tone.LFO(10, 400, 4000).start();

	// initialize the filter as a lowpass with a cutoff of 200
	// let frequencies under 200 pass through
	// then connect to the envelope
	filter = new Tone.Filter(200, 'lowpass').connect(env2);

	// connect the lfo to the filter frequency
	lfo.connect(filter.frequency);

	noise = new Tone.Noise('brown').connect(filter);
	noise.start();

	// splash
	// initialize a new amplitude envelope and send it to master
	env3 = new Tone.AmplitudeEnvelope().toMaster();

	// initialize a noise source and connect it to the second envelope
	noise = new Tone.Noise('white').connect(env3);

	// start the noise - can be done up here because we trigger with envelope
	// starting a sound does not always mean that we will hear it immediately
	noise.start();

	// AM Synthesis
	osc1 = new Tone.Oscillator(400, 'sine').start();
	osc2 = new Tone.Oscillator(50, 'sine').start();
	multi = new Tone.Multiply();
	osc1.connect(multi, 0, 0);
	osc2.connect(multi, 0, 1);

	gainNode = Tone.context.createGain().toMaster();
	env = new Tone.Envelope({
		attack: 0.1,
		decay: 0.2,
		sustain: 0.5,
		release: 1.8,
	});

	env.connect(gainNode.gain);
	multi.connect(gainNode);
}

// no audio events go in draw
function draw() {
	fill(0, 50, 0);
	textAlign(10, 10);
	text(title, 10, 10);
	text(instructions, 10, 30);
}

function sonicEvent() {
	// trigger brown noise as soon as the mouse is pressed
	// it helps to remember what your envelope is attached to
	// you could even name the envelope something like noiseEnv to help remember
	env2.triggerAttack();

	// set osc2 frequency to 50 right away
	osc2.frequency.value = 50;

	// change the frequency
	// linear ramp to value 2 over 3 seconds
	// go from 50 -> 2
	osc2.frequency.linearRampToValue(2, 3);

	// trigger AM Synthesis 0.25 seconds AFTER mouse is pressed
	env.triggerAttackRelease(1.6, '+0.25');
}

function sonicSilence() {
	// after mouse is released release brown noise
	env2.triggerRelease();

	// after mouse is release trigger white noise
	env3.triggerAttackRelease(0.2);
}

function mousePressed() {
	image(img, 0, 0);
	sonicEvent();
}

function mouseReleased() {
	sonicSilence();
	background(200);
}

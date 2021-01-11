var title = "Scream Sound Object";
var instructions = "Click and hold to hear the sound effect.";

var osc1, osc2, osc3, lfo, filter, gainNode, env, env2, noise, noise2, env3, img, synth, synth2;

function preload() {
	img = loadImage("images/scream.jpg");
}

function setup() {
	createCanvas(640, 800);
	background(230);


	//a polysynth composed of 6 Voices of Synth
	synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
	synth.set("detune", -1200);
	synth2 = new Tone.PolySynth(6, Tone.Synth).toMaster();
	synth2.set("detune", -1800);


	env2 = new Tone.AmplitudeEnvelope().toMaster();
	lfo = new Tone.LFO(2, 50, 1000).start();
	filter = new Tone.Filter(200, "highpass").connect(env2);
	lfo.connect(filter.frequency);

	noise = new Tone.Noise('white').connect(filter);
	noise.start();
	env3 = new Tone.AmplitudeEnvelope().toMaster();
	noise2 = new Tone.Noise('brown').connect(env3);
	noise2.start();

	osc1 = new Tone.Oscillator(100, "sawtooth4").start();
	osc2 = new Tone.Oscillator(550, "sawtooth6").start();
	osc3 = new Tone.Oscillator(800, "sawtooth8").start();
	gainNode = Tone.context.createGain();

	env = new Tone.Envelope({
		"attack": 0.8,
		"decay": 0.1,
		"sustain": 1.1,
		"release": 0.3,
	});
	env.connect(gainNode.gain);
	osc1.connect(gainNode);
	osc2.connect(gainNode);
	osc3.connect(gainNode);


	gainNode.toMaster();

}

function draw() {
	fill(0, 50, 0);
	textAlign(10, 10);
	text(title, 10, 20);
	text(instructions, 10, 40);

}

function mousePressed() {
	sonicEvent();
	image(img, 160, 180);
}

function mouseReleased() {
	sonicSilence();
	background(230);
}

function sonicEvent() {

	env2.triggerAttack();
	synth.triggerAttackRelease(["C7", "D7", "G7", "Bb7"], "8n");
	synth2.triggerAttackRelease(["Db7", "Eb7", "Ab7", "C7"], "8n");
	env.triggerAttackRelease(1, "+0.5");
	osc1.frequency.value = 100;
	osc2.frequency.value = 550;
	osc3.frequency.value = 800;
	osc1.frequency.linearRampToValue(400, 0.4);
	osc2.frequency.linearRampToValue(800, 0.8);
	osc3.frequency.linearRampToValue(2500, 0.6);
}

function sonicSilence() {
	// Use if you need to turn something off.
	env2.triggerRelease();
	env3.triggerAttackRelease(0.1);
}
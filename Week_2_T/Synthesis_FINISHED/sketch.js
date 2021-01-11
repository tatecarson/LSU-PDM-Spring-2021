var hi = "Basic Synthesis";

var osc1;
var osc2;
var mult;
var lfo;
var highFilter;
var gainNode;
var env


function setup() {
	lfo = new Tone.LFO("4n", 400, 4000);
	highFilter = new Tone.Filter(200, "highpass");
	lfo.connect(highFilter.frequency);

	osc1 = new Tone.Oscillator(400, "sine").start();
	osc2 = new Tone.Oscillator(399, "sine").start();
	mult = new Tone.Multiply();
	osc1.connect(mult, 0, 0);
	osc2.connect(mult, 0, 1);

	gainNode = new Tone.Gain();

	env = new Tone.Envelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1,
		"release": 0.8,
	});
	env.connect(gainNode.gain);

	mult.connect(gainNode);
	gainNode.toMaster();
}

function draw() {
	textAlign(10, 10);
	text(hi, 10, 50);
}

function keyPressed() {
	console.log(keyCode);
	if (keyCode == 49) {
		osc1.frequency.value = 300;
		env.triggerAttackRelease(2);
		console.log("1");
		1
	} else if (keyCode == 50) {
		console.log("2");
		osc1.frequency.value = 400;
		env.triggerAttackRelease(4);
	}
}
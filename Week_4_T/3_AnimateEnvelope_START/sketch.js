let kickEnvelope;
let kick;
let kickSnapEnv;
let kickPart;

function setup() {
	createCanvas(400, 400);

	kickEnvelope = new Tone
		.AmplitudeEnvelope({
			attack: 0.01, decay: 0.2, sustain: 0, release: 0
		})
		.toMaster();

	kick = new Tone
		.Oscillator('A2')
		.connect(kickEnvelope)
		.start();

	kickSnapEnv = new Tone
		.FrequencyEnvelope({
			attack: 0.005,
			decay: 0.01,
			sustain: 0,
			release: 0,
			baseFrequency: 'A2',
			octaves: 2.7,
		})
		.connect(kick.frequency);

	kickPart = new Tone.Part(((time) => {
		kickEnvelope.triggerAttack(time);
		kickSnapEnv.triggerAttack(time);
	}), ['0', '0:0:3', '0:2:0', '0:3:1']).start(0);

	// TRANSPORT
	Tone.Transport.loopStart = 0;
	Tone.Transport.loopEnd = '1:0';
	Tone.Transport.loop = true;

	// Tone.Transport.start();
}

function draw() {
	background(100);

	// sample the value of the kick envelope 60 times a second this is a great way
	// to match a visualization to a sound
	ellipse(100, 100, kickEnvelope.value * 100);
	// console.log(kickEnvelope.value)
}

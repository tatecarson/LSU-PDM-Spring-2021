var osc,
	ampEnv,
	freqEnv;

function setup() {
	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 2,
		"decay": 0.2,
		"sustain": 1.0,
		"release": 2,
	}).toMaster();

	//other choices exponential, sine, cosine, bounce, ripple, step, array
	// ampEnv.attackCurve = 'ripple';
	ampEnv.attackCurve = [0, 0.1, 0.3, 0.1, 0.5, 0.4, 1]
	ampEnv.releaseCurve = 'bounce';

	freqEnv = new Tone.FrequencyEnvelope({
		"attack": 0.2,
		"baseFrequency": "C2",
		"octaves": 4
	});

	osc = new Tone.PulseOscillator('440', 0.4)
		.connect(ampEnv)
		.start();

	freqEnv.connect(osc.frequency);
}

function keyPressed() {
	console.log(keyCode);
	if (keyCode == 32) {
		ampEnv.triggerAttackRelease(1);
		freqEnv.triggerAttackRelease(1);
	} else if (keyCode == ENTER) {
		ampEnv.attack = random(0.1, 2);
		ampEnv.decay = random(0.2, 0.5);
		ampEnv.release = random(0.1, 2);
		console.log(`attack: ${ampEnv.attack}, decay: ${ampEnv.decay}, release: ${ampEnv.release}`)
	}
}
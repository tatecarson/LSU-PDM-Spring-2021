var osc, ampEnv, freqEnv, modEnv;

function setup() {
	osc = new Tone.OmniOscillator("440", 'pwm').start();

	gainNode = new Tone.Gain()

	ampEnv = new Tone.Envelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1,
		"release": 0.8
	});

	freqEnv = new Tone.ScaledEnvelope({
		"attack": 0.5,
		"decay": 0.2,
		"sustain": 1,
		"release": 0.8,
		"min": 200,
		"max": 1000
	})

	modEnv = new Tone.ScaledEnvelope({
		"attack": 0.5,
		"decay": 0.2,
		"sustain": 1,
		"release": 0.8,
		"min": 1,
		"max": 100
	})

	ampEnv.connect(gainNode.gain);
	freqEnv.connect(osc.frequency);
	modEnv.connect(osc.modulationFrequency)

	osc.connect(gainNode);

	gainNode.toMaster();
}

function keyPressed() {
	console.log(keyCode);
	if (keyCode == 49) {
		osc.frequency.value = 300;
		ampEnv.triggerAttackRelease(2);
		freqEnv.triggerAttackRelease(1);
		modEnv.triggerAttackRelease(2);
	} else if (keyCode == 50) {
		osc.frequency.value = 200;
		ampEnv.triggerAttackRelease(2)
		freqEnv.triggerAttackRelease(1);
		modEnv.triggerAttackRelease(2);
	} else if (keyCode == ENTER) {
		ampEnv.attack = random(0.1, 1);
		ampEnv.decay = random(0.2, 0.5);
		ampEnv.release = random(0.001, 0.8);

		osc.modulationFrequency.value = random(1, 100);
		console.log(`attack: ${ampEnv.attack.toFixed(2)}, decay: ${ampEnv.decay}, release: ${ampEnv.release}`)
	}
}
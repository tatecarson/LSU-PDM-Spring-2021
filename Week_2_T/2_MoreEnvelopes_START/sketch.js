var osc,
	ampEnv,
	freqEnv;

function setup() {
	//to control the gain, but can really control anything
	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 2,
		"decay": 0.2,
		"sustain": 1.0,
		"release": 2
	}).toMaster();

	freqEnv = new Tone.FrequencyEnvelope({
		"attack": 0.2,
		"baseFrequency": "C2",
		"octaves": 4
	});

	ampEnv.attackCurve = 'ripple';
	ampEnv.releaseCurve = 'bounce';

	osc = new Tone.OmniOscillator('440', 'pwm')
		.connect(ampEnv)
		.start();

	freqEnv.connect(osc.frequency);
}

function keyPressed() {
	console.log(keyCode);
	if (keyCode == 49) {
		osc.frequency.value = 300;
		ampEnv.triggerAttackRelease(2);
		freqEnv.triggerAttackRelease(2);
		console.log("1");
	} else if (keyCode == 50) {
		console.log("2");
		osc.frequency.value = 400;
		ampEnv.triggerAttackRelease(2);
		freqEnv.triggerAttackRelease(2);
	} else if (keyCode == ENTER) {
		ampEnv.attack = random(0.1, 1);
		ampEnv.decay = random(0.2, 0.5);
		ampEnv.release = random(0.1, 0.8);

		osc.modulationFrequency.value = random(1, 100);
		console.log(`attack: ${ampEnv.attack}, decay: ${ampEnv.decay}, release: ${ampEnv.release}`)
		console.log(`modfreq: ${osc.modulationFrequency.value}`)
	}
}
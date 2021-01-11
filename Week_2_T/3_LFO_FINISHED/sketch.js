var osc,
	ampEnv,
	lfo,
	highFilter,
	lowFilter,
	noise,
	ampEnvNoise;

function setup() {
	lfo = new Tone.LFO('4n', 400, 1000).start();
	lfo2 = new Tone.LFO(10, 50, 500).start();

	highFilter = new Tone.Filter(200, "highpass");
	lowFilter = new Tone.Filter(200, "lowpass");

	osc = new Tone.AMOscillator({
		frequency: '440',
		type: "sine",
		modulationType: "square"
	}).start();

	noise = new Tone.Noise().start();

	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1,
		"release": 0.8
	}).toMaster();

	lfo.connect(highFilter.frequency);
	lfo2.connect(lowFilter.frequency);

	highFilter.connect(ampEnv);
	lowFilter.connect(ampEnv);

	osc.connect(highFilter);
	noise.connect(lowFilter);
}

function keyPressed() {
	console.log(keyCode);
	if (keyCode == 32) {
		ampEnv.triggerAttackRelease(1);
	} else if (keyCode == ENTER) {
		ampEnv.attack = random(0.1, 2);
		ampEnv.decay = random(0.2, 0.5);
		ampEnv.release = random(0.1, 2);
		console.log(`attack: ${ampEnv.attack}, decay: ${ampEnv.decay}, release: ${ampEnv.release}`)
	} else if (keyCode == 49) {
		lfo2.frequency.value = 20;
		lfo.frequency.value = '8n';
	} else if (keyCode == 50) {
		lfo2.frequency.value = 30;
		lfo.frequency.value = '16n';

	} else if (keyCode == 51) {
		lfo2.frequency.value = 40;
		lfo.frequency.value = '32n';

	} else if (keyCode == 52) {
		lfo2.frequency.value = 50;
		lfo.frequency.value = '2n';
	}
}
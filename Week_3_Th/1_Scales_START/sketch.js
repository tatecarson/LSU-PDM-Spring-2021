var synth, tune, seq, scale, pattern, random;

function setup() {
	//Visualization 
	//setup audio context 
	Nexus.context = Tone.context

	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);

	tune = new Tune();
	tune.loadScale('slendro');

	scale = tune.scale.map(x => x * 440);

	pattern = new Tone.CtrlPattern(scale, 'randomWalk');
	random = new Tone.CtrlRandom(0.1, 1);

	chain = new Tone.CtrlMarkov({
		"A3": [{
			value: 'B3',
			probability: 0.2
		}, {
			value: 'Ab2',
			probability: 0.8
		}],
		'Ab2': ["Ab2", "C4", "E5"],
		"E5": ["C4", "A3"],
		"C4": ["A3", 'Ab2'],
		"B3": ["C4", "E5"]
	});

	chain.value = 'A3';

	synth = new Tone.FMSynth({
		"harmonicity": 8,
		"modulationIndex": 2,
		"oscillator": {
			"type": "sine"
		},
		"envelope": {
			"attack": 0.001,
			"decay": 2,
			"sustain": 0.1,
			"release": 2
		},
		"modulation": {
			"type": "square"
		},
		"modulationEnvelope": {
			"attack": 0.002,
			"decay": 0.2,
			"sustain": 0,
			"release": 0.2
		}
	}).toMaster();

	seq = new Tone.Sequence((time) => {
		synth.triggerAttackRelease(pattern.next(), random.value, time);
	}, ['c4'], '4n');

	var markSeq = new Tone.Sequence((time) => {
		synth.triggerAttackRelease(chain.next(), 0.2, time);
		console.log(chain.next())
	}, ['c4'], '16n')

	// seq.start();
	// markSeq.start()
	var melodyType = new Nexus.RadioButton('#melodytype', {
		'size': [120, 25],
		'numberOfButtons': 2,
		'active': -1
	});

	melodyType.on('change', v => {
		console.log(v);
		if (v == 0) {
			seq.start();
			markSeq.stop();
		} else if (v == 1) {
			markSeq.start();
			seq.stop();
		}
	})

	var synthProb = new Nexus.Slider("#synthprob", {
		'size': [120, 20],
		'min': 0,
		'max': 1,
		'step': 0.1,
		'value': 0
	});

	synthProb.on('change', v => seq.probability = v)

	var toggle = new Nexus.Toggle('#transport');

	var tempo = new Nexus.Slider('#tempo', {
		min: 50,
		max: 200
	});

	tempo.on('change', v => Tone.Transport.bpm.value = v);
	toggle.on('change', v => v ? Tone.Transport.start() : Tone.Transport.stop())
}
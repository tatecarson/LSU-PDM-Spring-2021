var synth, tune, noise, loop, seq, chain;

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
	//slendro, ji_12, partch_43, young-lm_piano, johnston_81
	tune.loadScale('ji_12');
	tune.tonicize(440);
	tune.mode.output = 'frequency';

	//convert ratio into frequency 
	//maybe there's a better way to do this? 
	var scale = tune.scale.map(x => x * 440);

	//types - up, down, upDown, downUp, alternateUp, alternateDown, random, randomWalk, randomOnce
	var pattern = new Tone.CtrlPattern(scale, 'alternateUp');

	//Tone's way of doing random numbers, could also use p5.js random()
	var random = new Tone.CtrlRandom(0.1, 1);

	//control melody with markov chain 
	chain = new Tone.CtrlMarkov({
		"A3": [{
			value: "B3",
			probability: 0.2
		}, {
			value: "Ab2",
			probability: 0.8
		}],
		"Ab2": ["Ab2", "C4", "E5"],
		"E5": ["E5", "C4"],
		"C4": "A3",
		"B3": ["C4", "E5"]
	});

	chain.value = "A3";

	//show tone presets 
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

	var synth0 = new Tone.Synth({
		'oscillator.type': 'square10',
		envelope: {
			attack: 0.001,
			decay: 0.2,
			sustain: 0
		}
	}).toMaster()

	//pattern.next() - gives the next note in the pattern 
	//random.value - 
	seq = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(pattern.next(), random.value, time)
	}, ['c4'], '32n');

	var markSeq = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(chain.next(), 0.2, time)
		console.log(chain.next())
	}, ['c2'], '32n');

	var loop0 = new Tone.Loop(function (time) {
		synth0.triggerAttack("A2", time)
	}, 0.5).start(0)


	var melodytype = new Nexus.RadioButton('#melodytype', {
		'size': [120, 25],
		'numberOfButtons': 2,
		'active': -1
	});

	melodytype.on('change', v => {
		console.log(v)
		if (v == 0) {
			seq.start();
			markSeq.stop();
		} else if (v == 1) {
			seq.stop();
			markSeq.start();
		}
	});

	var synthProb = new Nexus.Slider('#synthprob', {
		'size': [120, 20],
		'min': 0,
		'max': 1,
		'step': 0.1,
		'value': 0
	})

	synthProb.on('change', v => seq.probability = v)

	var squareProb = new Nexus.Slider('#squareprob', {
		'size': [120, 20],
		'min': 0,
		'max': 1,
		'step': 0.1,
		'value': 0
	})

	squareProb.on('change', v => {
		loop0.probability = v;
		console.log(v)
	})

	var toggle = new Nexus.Toggle('#transport');

	var tempo = new Nexus.Slider('#tempo', {
		min: 50,
		max: 200
	});
	tempo.on('change', v => Tone.Transport.bpm.value = v)
	toggle.on('change', v => v ? Tone.Transport.start() : Tone.Transport.stop())
}
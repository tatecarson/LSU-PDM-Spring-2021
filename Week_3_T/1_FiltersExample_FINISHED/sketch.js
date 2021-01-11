let polySynth;
let lfo;

function setup() {
	// Visualization
	// setup audio context
	Nexus.context = Tone.context;

	// remember to set DIV in html file
	const spectrogram = new Nexus.Spectrogram('#spec');
	spectrogram.connect(Tone.Master);

	const oscilloscope = new Nexus.Oscilloscope('#osc');
	oscilloscope.connect(Tone.Master);

	polySynth = new Tone.PolySynth(8, Tone.Synth);

	// We are making an autofilter from scratch
	// a filter and and LFO = autofilter
	filter = new Tone.Filter(100, 'lowpass').toMaster();

	// try some other LFO types to get different movements
	lfo = new Tone.LFO({
		type: 'sine',
		min: 100,
		max: 1000,
		frequency: '8n',
	}).start();

	const autoFilter = new Tone.AutoFilter('4n').toMaster().start();

	const filterType = true;

	// connect to our scratch auto filter or the default one
	if (filterType) {
		polySynth.connect(filter);
	} else {
		polySynth.connect(autoFilter);
	}

	lfo.connect(filter.frequency);

	// or use the autofilter

	// automate the lfo frequency and play the note
	const loop = new Tone.Loop(((time) => {
		polySynth.triggerAttackRelease('c4', time);

		lfo.frequency.value = random(1, 10);
		// console.log(filter.frequency.value);
	}), '1n').start(0);

	// Tone.Transport.start();
}

function keyPressed() {
	if (keyCode === 49) {
		polySynth.triggerAttackRelease('c4', 2);
	}
}
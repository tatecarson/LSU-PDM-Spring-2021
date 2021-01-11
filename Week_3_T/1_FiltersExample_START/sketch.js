var polySynth, lfo;

function setup() {
	//Visualization 
	//setup audio context 
	Nexus.context = Tone.context

	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);

	polySynth = new Tone.PolySynth(8, Tone.Synth);
	filter = new Tone.Filter(1000, 'lowpass').toMaster()

	lfo = new Tone.LFO({
		type: 'sine',
		min: 100,
		max: 1000,
		frequency: '8n'
	}).start();

	var autoFilter = new Tone.AutoFilter({
		frequency: 1,
		type: 'sine',
		depth: 2,
		baseFrequency: 200,
		octaves: 2.6,
		filter: {
			type: 'lowpass',
			rolloff: -12,
			Q: 1
		}
	}).toMaster().start()

	// polySynth.connect(filter);
	polySynth.connect(autoFilter);
	lfo.connect(filter.frequency);

	var loop = new Tone.Loop((time) => {
		polySynth.triggerAttackRelease('c4', time);
		autoFilter.frequency.value = random(1, 30);
	}, '1n').start();

	Tone.Transport.bpm = 200;
	// Tone.Transport.start();
}

function keyPressed() {
	if (keyCode == 49) {
		polySynth.triggerAttackRelease('c3', 2);
	}
}
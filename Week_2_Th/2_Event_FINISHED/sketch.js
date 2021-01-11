var note, pattern, part, loop, sequence, noiseLoop;
var synth, bassSynth;

function setup() {
	//Visualization 
	//setup audio context 
	Nexus.context = Tone.context

	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);

	synth = new Tone.FMSynth({
		harmonicity: 3,
		modulationIndex: 10
	}).toMaster();

	bassSynth = new Tone.FMSynth().toMaster()

	note = new Tone.Event((time, pitch) => {
		synth.triggerAttackRelease(pitch, "16n", time);
		console.log(time, pitch)
	}, "C4");

	//set the note to loop every half measure
	note.set({
		"loop": true,
		"loopEnd": "2n"
	});

	loop = new Tone.Loop((time) => {
		synth.triggerAttackRelease("C2", "8n", time)
		synth.harmonicity.value = random([5, 10])
		console.log(time)
	}, 1);

	//must call stop to start again 
	part = new Tone.Part(function (time, pitch) {
		synth.triggerAttackRelease(pitch, "8n", time);
		console.log(`pitch: ${pitch}, time: ${time}`)
	}, [
		["+4n", "C#3"],
		["+4n", "G3"],
		["+8n", "G#3"],
		["+2n", "C3"]
	]);

	pattern = new Tone.Pattern(function (time, pitch) {
		//the order of the notes passed in depends on the pattern
		synth.triggerAttackRelease(pitch, "8n", time);
	}, ["C2", "D4", "E5", "A6"], "upDown");

	seqA = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(note, 0.5, time)
	}, ['C4', 'E4', 'G4', 'B4'], '8n')

	seqB = new Tone.Sequence((time, note) => {
		bassSynth.triggerAttackRelease(note, 0.5, time)
	}, ['C2', ['E2', 'F#2'], 'G2', ['B2', 'D3', ['F#3', 'G3']]], '2n')

	Tone.Transport.start();
}

function keyPressed() {
	if (keyCode == 49) {
		note.start();
		note.loop = 8;
		note.loopEnd = '1m';
		note.probability = 0.4;
		note.playbackRate = 2;
	} else if (keyCode == 50) {
		loop.start();
		loop.iterations = 3;
	} else if (keyCode == 51) {
		part.start();
	} else if (keyCode == 52) {
		pattern.start();
		part.iterations = 5;
	} else if (keyCode == 53) {
		seqA.start();
		seqB.start();
		seqA.iterations = 5;
		seqB.iterations = 5;
		Tone.Transport.bpm.rampTo(60, 10)
	}
}
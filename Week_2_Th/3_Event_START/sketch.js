var fmSynth, note, loop, seqA, seqB;

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

	note = new Tone.Event((time, pitch) => {
		synth.triggerAttackRelease(pitch, '16n', time);

		console.log(`time: ${time}, pitch: ${pitch}`)
	}, "c4");

	note.set({
		'loop': true,
		'loopEnd': '2n'
	});

	loop = new Tone.Loop((time) => {
		synth.triggerAttackRelease('C4', '8n', time);
		synth.harmonicity.value = random([5, 10, 3]);
	}, 1);

	seqA = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(note, '8n', time)
	}, ['c2', 'd4', 'e5', 'a6'], '8n')

	seqB = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(note, '8n', time)
	}, ['c2', ['d4', 'g4'], 'e5', [
		['a6', 'g4'], 'c4'
	]], '8n')

	Tone.Transport.start();
}

function keyPressed() {
	if (keyCode == 49) {
		note.start();
		note.loop = 8;
	} else if (keyCode == 50) {
		loop.start();
		loop.iterations = 10
	} else if (keyCode == 51) {
		seqA.start();
		seqB.start();
		seqA.iterations = 5;
		seqB.iterations = 5;

	}
}
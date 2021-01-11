//beetjs is good for percussive sounds where you don't really need to change the notes 
var polySynth, monoSynth;

function setup() {
	var beet = new Beet({
		context: Tone.context,
		tempo: 100
	});

	//Visualization 
	//setup audio context 
	Nexus.context = Tone.context

	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);

	polySynth = new Tone.PolySynth(8, Tone.Synth).toMaster()

	var four = beet.pattern(4);
	var three = beet.pattern(3);
	var seven = beet.pattern(7);

	var scale = ['c4', 'd4', 'e4', 'f#4'];

	var i = 0;
	var layer = beet.layer(four, (time) => {
		polySynth.triggerAttackRelease(scale[i], '16n', time);
		console.log(i);
		i = i % scale.length - 1;
		i++;
	});

	var layer2 = beet.layer(three, (time) => {
		polySynth.triggerAttackRelease('G4', '16n', time);
	});

	var layer3 = beet.layer(seven, (time) => {
		polySynth.triggerAttackRelease('B4', '8n', time);
	});

	beet.add(layer, layer2, layer3);

	// beet.start();
}
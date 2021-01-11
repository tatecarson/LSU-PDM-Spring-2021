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

	polySynth = new Tone.PolySynth(8, Tone.Synth).toMaster();


	var fours = beet.pattern(4, 7);
	var threes = beet.pattern(3);
	var seven = beet.pattern(7);

	var scale = [200, 300, 400, 500];

	var layer = beet.layer(fours, (time) => {
		var i = 0;
		i % scale.length - 1;
		polySynth.triggerAttackRelease(scale[i], "16n", time);
		i++;
	});
	var layer2 = beet.layer(threes, (time) => {
		polySynth.triggerAttackRelease('C4', "16n", time);
	});
	var layer3 = beet.layer(seven, (time) => {
		var i = 0;
		i % scale.length - 1;
		polySynth.triggerAttackRelease(scale[i] / 2, "16n", time);
		i++;
	})

	beet.add(layer, layer2, layer3);

	//to make stop 
	// beet.start()

	//shift fours pattern every 1 measure 
	var loop = new Tone.Loop(() => {
		fours.shift(1);
		threes.shift(-1);
		console.log('shifting')
	}, '1m').start();

	Tone.Transport.start();
}
var duoSynth, fmSynth, metalSynth, membrane, polySynth;

function setup() {
	//Visualization 
	//setup audio context 
	Nexus.context = Tone.context

	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);

	duoSynth = new Tone.DuoSynth({
		vibratoAmount: 2,
		vibratoRate: 10,
		harmonicity: 4.5,
		voice0: {
			volume: -10,
			portamento: 1,
			oscillator: {
				type: 'sine'
			},
			filterEnvelope: {
				attack: 0.1,
				decay: 0,
				sustain: 1,
				release: 0.5
			},
			envelope: {
				attack: 0.1,
				decay: 0,
				sustain: 1,
				release: 0.5
			}
		},
		voice1: {
			volume: -10,
			portamento: 0,
			oscillator: {
				type: 'sawtooth'
			},
			filterEnvelope: {
				attack: 0.5,
				decay: 0,
				sustain: 1,
				release: 0.5
			},
			envelope: {
				attack: 0.5,
				decay: 0,
				sustain: 1,
				release: 0.5
			}
		}
	}).toMaster();

	fmSynth = new Tone.FMSynth({
		harmonicity: 3,
		modulationIndex: 10
	}).toMaster();

	metalSynth = new Tone.MetalSynth({
		frequency: 50,
		envelope: {
			attack: 0.001,
			decay: 1.4,
			release: 0.2
		},
		harmonicity: 5.1,
		modulationIndex: 32,
		resonance: 1000,
		octaves: 1.5
	}).toMaster();

	membrane = new Tone.MembraneSynth().toMaster();

	polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster()
}

function keyPressed() {
	if (keyCode == 49) {
		play(duoSynth)
	} else if (keyCode == 50) {
		play(fmSynth)
	} else if (keyCode == 51) {
		play(metalSynth)
	} else if (keyCode == 52) {
		play(membrane)
	} else if (keyCode == 53) {
		play(polySynth)
	}
}

function play(synth) {
	if (synth == fmSynth) {
		synth.harmonicity.rampTo(50, 2);
		synth.harmonicity.rampTo(10, 2, "+2");
	} else if (synth == metalSynth) {
		synth.triggerAttackRelease("4n");
		synth.triggerAttackRelease("8n", "+1");
		synth.frequency.setValueAtTime(3000, '+1')
		synth.triggerAttackRelease("8n", "+2");
		synth.frequency.setValueAtTime(2000, '+3')
		synth.triggerAttackRelease("8n", "+3");
		synth.frequency.setValueAtTime(500, '+4')
	} else if (synth == polySynth) {
		var choices = random([0, 1]);
		console.log(choices);
		if (choices == 0) {
			synth.triggerAttackRelease(["C4", 'E4', 'A4'], "4n");
			synth.detune.rampTo(-1200, 4);
			synth.triggerAttackRelease(["D4", 'F#4', 'A4'], "8n", "+1");
			synth.triggerAttackRelease(["G4", 'B4', 'D4'], "8n", "+2");
			synth.triggerAttackRelease(["B4", 'D4', 'F#4'], "8n", "+3");
		} else if (choices == 1) {
			synth.triggerAttackRelease(["F4", 'E4', 'A4'], "4n");
			synth.detune.rampTo(400, 4);
			synth.triggerAttackRelease(["D4", 'B#4', 'A4'], "8n", "+1");
			synth.triggerAttackRelease(["D4", 'B4', 'F#4'], "8n", "+2");
			synth.triggerAttackRelease(["G4", 'D4', 'F#4'], "8n", "+3");
		}

	}
}
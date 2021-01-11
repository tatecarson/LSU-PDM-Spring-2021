// see https://github.com/Tonejs/Tone.js/wiki/Time for more details on timing
// Default BPM (beats per minute) = 120
let synth;

function setup() {
	synth = new Tone.Synth().toMaster();
}

// Below we explore the different timing syntax that all translate to the same rhythm.

// numbers are evaluated as seconds
// play c2 right away, play c3 a second later and g2 a second after that
const numbers = [
	[0, 'C2'],
	[1, 'C3'],
	[2, 'G2'],
];

// try Tone.Time('2n').toSeconds() in console

// musical rhythm notation
// play c2 right away, play c3 a quarter note later, and g2 one measure from the start
// these values are all "time since start"

// adding of values didn't work for me with the dev build but works with the stable release
// 2n + 2n could have been 1m
const notation = [
	[0, 'C2'],
	['2n', 'C3'],
	['2n + 2n', 'G2'],
];

// Tempo and time signature relative time in the form BARS:QUARTERS:SIXTEENTHS.
const transportTime = [
	['0:0', 'C2'],
	['0:2', 'C3'],
	['1:0', 'G2'],
];

const part = new Tone.Part(((time, note) => {
	synth.triggerAttackRelease(note, '8n', time);
}), transportTime);

part.start('+0.4');


Tone.Transport.start();

// now lets use the above in an event
// we have to schedule time from now
// now is whenever the event is triggered
function mousePressed() {
	// play now
	synth.triggerAttackRelease('c4', '8n', 0);

	// play after 2 quarter notes or 1 second at 120bpm
	synth.triggerAttackRelease('c4', '8n', '+2n');

	// play after 1 measure
	synth.triggerAttackRelease('c4', '8n', '+1:0');
}

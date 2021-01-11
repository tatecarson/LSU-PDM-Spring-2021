//see https://github.com/Tonejs/Tone.js/wiki/Time for more details on timing
//Default BPM (beats per minute) = 120 
var synth

//numbers 
var number = [
	[0, 'c2'],
	[1, 'c3'],
	[2, 'g2']
];

var notation = [
	[0, 'c2'],
	['2n', 'c3'],
	['2n + 2n', 'g2']
]

var transportTime = [
	["0:0", 'c2'],
	["0:2", 'c3'],
	['1:0', 'g2']
];

function setup() {

	synth = new Tone.Synth().toMaster();

	var part = new Tone.Part((time, note) => {
		synth.triggerAttackRelease(note, '8n', time);
	}, number)

	// part.start('+0.2');

	Tone.Transport.start();
	Tone.Transport.bpm.value = 60;
}

function mousePressed() {
	//play now 
	synth.triggerAttackRelease('c4', '8n');

	//play after 2 quarter notes or 1 second 
	synth.triggerAttackRelease('c4', '8n', '+2n');

	synth.triggerAttackRelease('c5', '8n', '+1:0')
}
var ufo, plucky, osc, env, fil, lfo, noise, gainNode;
var greetings = "UFO Sound Effect. Click & hold the mouse button!";

function preload(){
	ufo = loadImage('mulder.jpg');
}

function setup(){
	createCanvas(600,500);

    plucky = new Tone.PluckSynth().toMaster();

    osc = new Tone.FatOscillator({
        "type": "square",
        "spread" : 70,
        "count" : 20
    }).start();

    env = new Tone.Envelope({
        "attack": 0.4,
        "decay": 0.01,
        "sustain": 1,
        "release": 0.4
    });

    fil = new Tone.Filter(300,"lowpass");

	lfo = new Tone.LFO({
		min: 100,
		max: 170,
		frequency: '2n'
	}).start();
	
	lfo.connect(fil.frequency);
	
	noise = new Tone.Noise("pink").connect(fil).start();

	gainNode = new Tone.Gain();
		env.connect(gainNode.gain);
		fil.connect(gainNode);
		osc.connect(gainNode);
	gainNode.toMaster();
}

function draw(){
	textSize(24);
	text(greetings,5,30);
}

function mousePressed(){
	image(ufo,0,0);
	ufoSound();
}

function mouseReleased(){
	byeMulder();
}

function ufoSound(){
	env.triggerAttackRelease(4);
	plucky.triggerAttack(8);
}

function byeMulder(){
	background('white');
}
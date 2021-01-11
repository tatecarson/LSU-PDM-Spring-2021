var fmSynth, membrane, polySynth, splat;

function setup(){
	createCanvas(600,500);
	pic = loadImage("Force.jpeg");
	imageMode(CENTER);
	
	fmSynth = new Tone.FMSynth({
		harmonicity  : 3 ,
		modulationIndex  : 10 ,
		detune  : 5 ,
		oscillator  : {
			type  : 'sine'
			}  ,
		envelope  : {
			attack  : 0.01 ,
			decay  : 0.01 ,
			sustain  : 1 ,
			release  : 0.5
			}  ,
		modulationEnvelope  : {
		attack  : .5,
		decay  : 1 ,
		sustain  : 4,
		release  : 1
		}
	}).toMaster();
	
	membrane = new Tone.MembraneSynth({
		pitchDecay:.01,
		octaves:6,
		oscillator:{
			type:'sine'
		},
		envelope:{
			attack:0.0001,
			decay:0.4,
			sustain:0.01,
			release:1.4,
			attackCurve:'exponential'
		}
	}).toMaster();
}

	splat = new Tone.MonoSynth({
			portamento : 0.01,
			oscillator : {
				type : "square"
			},
			envelope : {
				attack : 0.005,
				decay : 0.2,
				sustain : 0.4,
				release : 10,
			},
			filterEnvelope : {
				attack : 0.005,
				decay : 0.1,
				sustain : 0.05,
				release : 4,
				baseFrequency : 300,
				octaves : 4
			}
		}).toMaster();

function mousePressed() {
	if(mousePressed){
		//falling
		membrane.triggerAttackRelease("F4","8n");
		membrane.triggerAttackRelease("E4","8n","+0.25");
		membrane.triggerAttackRelease("D4","8n","+0.5");
		membrane.triggerAttackRelease("C4","8n","+0.75");
		membrane.triggerAttackRelease("Bb3","4n","+1");
		membrane.triggerAttackRelease("Bb3","16n","+1.25");
		
		//landing
		splat.triggerAttackRelease("E6","8n", "+1.5");
		
		//death song
		fmSynth.triggerAttackRelease('Bb4', '8n', "+2.5");
		fmSynth.triggerAttackRelease('A4', '8n', "+3.5");
		fmSynth.triggerAttackRelease('Ab4', '8n', "+4.5");
		fmSynth.triggerAttackRelease('G4', '4n', "+5.5");
	}
	}


function draw(){
	background(50,50,50);
	textSize(25);
	stroke(255,255,255);
	text("Click and hold to experience the force of gravity.",30,100);
	if(mouseIsPressed){
		image(pic,300,250,600,500);
	}
}
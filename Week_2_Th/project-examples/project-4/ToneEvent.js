/*
Find an image of an action or event that might occur.  Create a video game-like sound synthesis effect for this event. (Something like breaking a block with your head – Super Mario style. Or diving into a pool.)  When the canvas is clicked, display an image of the event and trigger the corresponding sound event.

Utilize a collection of these elements:

    oscillator(s)
    noise(s)
    filter(s)
    modulation and/or LFOs
    envelope(s)
    synthesizers/instruments

Make sure to do modulation of at least one parameter. Use envelopes and time delays to have different sounds join into one sonic event (a sound object!).

Be sure to format your code consistently and correctly and have any supplemental media files properly contained and loaded in the file path.
*/


////////////////////Make zip name DavisSandrine_Assignment_3//////////////////////


var title = "A Sound Event";
var instruct = "Click on a character to play its animation and sound";
//Credits are all from Spriter's Resource
var credits = "Boo & Tonberry2k (wyvern) edited by me to\n look like Rathalos from Monster Hunter";
var credits2 = "Teeks & Tonberry2k (white dragon Bleu)\n Silversea & Deathbringer (lightning)\n Edric1225 (fire)\n RadSpyro (backgrounds)";

/************ Important Note! **********************

The version of p5.play I am using is a patch version located at github.com/molleindustria/p5.play/pull/140.

This is because with p5 0.5.5+, p5.play's spritesheet function is broken. 

Unfortunately, it remains broken in Chrome, so Firefox is necessary for this to run correctly.

I apologize for any Firefox related issues with audio- clearing cache and restarting Firefox should fix this.

***************************************************/

var osc, ampEnv, freqEnv, lfo, highFilter, lowFilter, noises, ampEnvNoise;  // Rathalos sound
 
var osc2, ampEnv2, freqEnv2, lfo2, highFilter2, lowFilter2, lightning, ampEnvNoise2; // Bleu sound

var ratha, bleu, i = 0,
    dfire, dspark,         // Toggle for Rathalos/Bleu animation
    rath = 0, bleuCnt = 0, // frame variables for timing animations
    rathFire, bleuSpark,   // Rathalos/Bleu event animations
    rFireSheet, bSparkSheet, // Rathalos/Bleu event spritesheets
    dcnt = 0, bleuCnt = 0; // Rathalos/Bleu event timers


/// Preload Function ////////
function preload() {
   	bg = loadImage('background.png');
   	ratha = new walker("dragon.png", 220, 150);
   	bleu = new walker("bleu.png", 230, 350);
   	bSparkSheet = loadSpriteSheet('bleu2.png', 149, 130, 13); 
   	bleuSpark = loadAnimation(bSparkSheet);
   	rFireSheet = loadSpriteSheet('dragon2.png', 100, 85, 3); 
   	rathFire = loadAnimation(rFireSheet);
}// end Preload

/// Setup Function ////////
function setup() {

 	// Background
 	createCanvas(800, 550);
 	background('#77A117');

	// Rathalos sounds
	lfo = new Tone.LFO(10, 50, 500).start(); 
	lfo2 = new Tone.LFO(10, 50, 500).start();

        highFilter = new Tone.Filter(200, "highpass");
	lowFilter = new Tone.Filter(200, "lowpass");

	osc = new Tone.AMOscillator({
		frequency: 'C0',
		type: "sawtooth",
		modulationType: "sawtooth",
		harmonicity: 0.9
	}).start();
        
	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 0.6,
		"decay": 0,
		"sustain": 0,
		"release": 0.001
	}).toMaster();
	

	// The reason I made this "ripple" which causes the rippling at the start
	// is because I thought it went well with his wings beating just before shooting fire!
	
	ampEnv.attackCurve = ([ 0.4, 0.4, 0.4, 2.8, 20.8, 2.8, 0.4], 'ripple');
	ampEnv.releaseCurve = 'step';

	freqEnv = new Tone.FrequencyEnvelope({
		"attack": 0.4,
		"baseFrequency": "A1",
		"octaves": 8
	});

	noises = new Tone.Noise("white").connect(ampEnv).start(); 

	osc1 = new Tone.OmniOscillator('8n', 'pwm').connect(ampEnv).start();

	osc2 = new Tone.PulseOscillator('300', 0.7).connect(ampEnv).start();

	freqEnv.connect(osc2.frequency).connect(osc1.frequency);
        
	lfo.connect(highFilter.frequency);
	lfo2.connect(lowFilter.frequency);

	highFilter.connect(ampEnv);
	lowFilter.connect(ampEnv);

	osc.connect(highFilter);
	noises.connect(lowFilter);


	// Bleu sounds
	lfo3 = new Tone.LFO('4n', 400, 1000).start();
	lfo4 = new Tone.LFO(10, 50, 500).start();
       
        highFilter2 = new Tone.Filter(200, "highpass");
	lowFilter2 = new Tone.Filter(200, "lowpass");

	osc3 = new Tone.AMOscillator({
		frequency: '440',
		type: "sine",
		modulationType: "sine"
	}).start();	

	ampEnv2 = new Tone.AmplitudeEnvelope({
		"attack": 4,
		"decay": 4,
		"sustain": 1,
		"release": 0.8
	}).toMaster();
	
	ampEnv2.attackCurve = 'ripple';
	ampEnv2.releaseCurve = 'bounce';

	freqEnv2 = new Tone.FrequencyEnvelope({
		"attack": 0.9,
		"baseFrequency": "A#4",
		"octaves": 12
	});

	// Effects for lightning: spkFx 1, 2, and 3
	spkFx = new Tone.Freeverb ({  
        	"room size": 80
	}).toMaster();
	
	spkFx2 = new Tone.Tremolo ({
 		"frequency": 'B4' ,
		"type": 'sawtooth' ,
		"depth": 10 ,
		"spread": 180 
	}).toMaster();
	
	spkFx3 = new Tone.Distortion ({ "distortion" : 1 }).connect(ampEnv2).toMaster();

	lightning = new Tone.Noise("white").chain(spkFx2, spkFx, spkFx3);


	osc4 = new Tone.OmniOscillator('440', 'pwm').connect(ampEnv2).start();

	osc5 = new Tone.PulseOscillator('440', 0.4).connect(ampEnv2).start();

	freqEnv2.connect(osc4.frequency).connect(osc5.frequency);
        
	lfo3.connect(highFilter2.frequency);
	lfo4.connect(lowFilter2.frequency);

	highFilter2.connect(ampEnv2);
	lowFilter2.connect(ampEnv2);

	osc3.connect(highFilter2);

} // end setup



/// Draw Function ////////
function draw() {

	// Background images
	image(bg, width/8, 80);

 	// Title, instructions, and credits
	textSize(40);
	textAlign(CENTER, CENTER);
	textStyle(BOLD);
	fill('white');
	text(title, 270, 50);

	textSize(12);
	textStyle(BOLD);
	text("Credits", 630, 175);
	textStyle(ITALIC);
	text("all from Spriter's Resource", 625, 190);
	textStyle(NORMAL);
	text(credits, 625, 220);
	text(credits2, 625, 290);

 	if (dfire == 1){   //Rathalos breathes fire
    	   rathFire.draw(280, 190);
	   rathFire.frameDelay = 11;
	   rath++;
	   if (rath > 40){
      	   	dfire = 0; rath = 0; } //ends animation
  	} 
	else{
	   rathFire.rewind();
	   ratha.flies();  //Rathalos is flying
	}

 	if (dspark == 1){  //Bleu calls lightning 
	   bleuSpark.draw(280, 400);
	   if (bleuSpark.getFrame() == 5)
		lightning.start();
 	   else if (bleuSpark.getFrame() == 9)
		lightning.stop();
	   bleuSpark.frameDelay = 9;
	   bleuCnt++;
	   if (bleuCnt > 109){
      		dspark = 0; bleuCnt = 0; } //ends animation
    	}
	else{
	   bleuSpark.rewind();  
	   bleu.flies();   //Bleu is flying
    	}
}// end draw


/// mouseClicked function ///////////

function mouseClicked(){
	if (mouseY > 310) {
    	   dspark = 1;
    	   ampEnv2.triggerAttackRelease(1);
  	}
 	else{
    	   dfire = 1; 
    	   ampEnv.triggerAttackRelease(1);
  	}
}// end mouseClicked


//// Walker function ////////////// (taken from p5, will be converted to p5.play later)

function walker(name, x, y){ 

   this.char = loadImage(name);

   this.frame = 0; this.x = x; this.y = y; 

   // Animation functions /////////

   this.flies = function(){  /*Flying dragon function*/

	if (name == 'bleu.png') {  /*Bleu loop function*/
	    var bleuf = 0, blux = 96, bluy = 103; //Bleu frame counter, x, and y
	    for(this.fc = 0; this.fc < 10; this.fc++) { 
		push();
		if(this.frame == this.fc)
		   image(this.char,this.x,this.y,blux,bluy, 150+(blux*bleuf),0,blux,bluy); 
		bleuf++;
		if (bleuf > 4)
		    bleuf = 0; //Repeats 4 frames
		pop(); }
	    if(frameCount % 17 == 0)  // Frame speed
	        this.frame = (this.frame + 1)%4;  
	}// end Bleu flies

	else {  /*Rathalos loop function*/
            var rx = 100, ry = 80; //Rathalos x and y
	    for(this.fc = 0; this.fc < 10; this.fc++) {  
	    	push();
	    	if(this.frame == this.fc)
	    	   image(this.char,this.x,this.y,rx,ry, abs(rx*(this.fc)),0,rx,ry);
	    	pop(); }
	    if(frameCount % 8 == 0)   // Frame speed
	        this.frame = (this.frame + 1)%4;       
	}// end Rathalos flies

    } // end flies

} // end walker



# Class Notes

## Assignment 3 - Make a sound effect

[Here's](./assignment_3_Example) an example of a possible assignment

### Synthesizers & Instruments

Tone has many prebuilt instruments that already have an envelope and other processing. They are all worth exploring for their different sound capabilities. 

Here are some instrument [presets](https://tonejs.github.io/Presets/) for inspiration. 

### Polyphony
```
var polySynth;
polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster();
polySynth.set("detune", -1200);
polySynth.triggerAttackRelease(["C4", "E4", "A4"], "4n");
```

### Scheduling values of signals 

[Signals](https://github.com/Tonejs/Tone.js/wiki/Signals)

* .rampTo()
	* from one value to another over a period of time 
	* continuous change
* .setValueAtTime()
	* straight to one value at a certain time 
	* abrupt change 
* many others 

### Timing 

Best resource: [Time](https://github.com/Tonejs/Tone.js/wiki/Time)

* numbers 
	* 3 - 3 seconds 
* Notation 
	* "4n" = quarter note 
	* "8n" = eighth note 
* In the future 
	* "+1" = 1 second from now 
	* now is whenever the code was run 
	* use this notation for any interactive application 

### Musical Structures

[Events](https://github.com/Tonejs/Tone.js/wiki/Events)

* Event
* Part 
* Loop 
* Pattern 
* Sequence 

### Control Structures 

* CtrlInterpolate
* etc

### Pbind code? 

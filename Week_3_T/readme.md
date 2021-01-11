# Class Notes

## Announcements 

## Common issues from assignment 2 

### Setting frequency value 

If you are just setting the note like this but not retriggering it the below change will not be heard. 
`osc.frequency.value = 'C4';`

You may as well just change the frequency value with a triggerAttackRelease()

`osc.triggerAttackRelease("C4", "8n")`

or if you're using an instrument use setNote

```javascript
//change to F#6 in one quarter note from now.
synth.setNote("F#6", "+4n");
```

### Copying my examples

It is ok to use parts of the code I show in class for your assignments but you need to change parts of it to show that you know what everything is doing. If I see again that people are copying too much I will take points off. 

### Use correct envelope types

A scaled envelope is not meant to control amplitude. The purpose is to control things with ranges higher than 0 - 1, basically any other parameter. 

If connecting an oscillator, or any other source, to an envelope it should be started when it's initialized. The envelope is then used to turn the sound on and off, not `start()` and `stop()`: 

```javascript
osc = new Tone.OmniOscillator('440', 'pwm').start();

gainNode = new Tone.Gain();

//to control the gain, but can really control anything
ampEnv = new Tone.Envelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1,
		"release": 0.8,
	});

ampEnv.connect(gainNode.gain);

osc.connect(gainNode);
gainNode.toMaster();

//now trigger with triggerAttackRelease()
ampEnv.triggerAttackRelease(2);
```

### Signal flow

If you want to chain elements together make sure that when you initialize them that you don't send them directly `toMaster()`. This will skip any routing you have set up and just send that sound directly to your speakers. Try to imagine what you are telling tone to do the the signal path if you are getting unexpected results. 

### Filter review

A filter allows certain frequencies to pass through and cuts out others. It might be helpful to test these in an audio program to see how they sound before coding. 

## Lowpass filter AKA Highcut

pass through frequencies below the cutoff frequency. The below example will pass all values above 100. 

`	filter = new Tone.Filter(100, "lowpass").toMaster()`

## Highpass filter AKA lowcut 

passes frequencies above cutoff frequency. In the below example we only hear frequencies under 100. 

## Bandpass 

Combines both, cutting low and high 

`	filter = new Tone.Filter(100, "highpass").toMaster()`

[Here](https://www.youtube.com/watch?v=rkwS6vigSyE) is a good intro video if you want more explanation. 

### Modulate sounds with modulators / LFOs

Filters cannot be used to modulate sounds, they are used to change the timbre of sounds. Modulators can modulate filters, but also can modulate any other parameter. The modulators we have used so far are envelopes and LFOs. 

LFOs modulate parameters but do not connect directly to other oscillators. Here's an example of an LFO modulating the frequency of a filter: 

```javascript
var lfo = new Tone.LFO("4n", 400, 4000);
lfo.connect(filter.frequency);
```
LFOs should be `started` at some point. 

These are also good to look at in audio programs if you have access to one. Check out [this](https://www.youtube.com/watch?v=YEHnd9b79Uc) video for more explanation. 

### Changing values of signals 

If you want to change the value of a signal after a certain amount of time be sure to use the correct syntax. Here's an example of something that would cause a synth not to work:

`sineOsc.frequency.setValueAtTime("C2" + 1);`

and now fixed: 

`sineOsc.frequency.setValueAtTime("B6", '+1.0');`

### Euclidian Rhythms 

Beetjs 

two examples 

### Scales and Tunings

[TuneJS](https://github.com/abbernie/tune)
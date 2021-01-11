# Class notes 

## Assignment 3 issues 

### Assignment review 

* review of example code 
* Correct way of starting and stopping things with mouse pressed 

### Timing issues with mousePressed
If mouse is pressed is used you need to use the "+1" syntax to get whatever it is to trigger that much time **after** the mouse is pressed. 

Timing [wiki](https://github.com/Tonejs/Tone.js/wiki/Time)

See timing example. 

### LFOs and modulation recap 

LFOs should be slow, remember that it stands for Low Frequency Oscillator. If the LFO is fast you hear them less as modulators and more as new tones. Anything over 20 is probably defeating the purpose. The idea is to hear the modulation. 

### Gain nodes

Only connect something to a gain node if it doesn't already have one included with it. All instruments have gain nodes. Most sources have volume controls in the form of a `Tone.Volume` , which wraps a gain node. Think of it as one level of abstraction up from using a gain node directly. Check the documentation to make sure. 

Most of the time gain nodes are just used after a signal is multiplied as in: 

```javascript
	mult = new Tone.Multiply();
	osc1.connect(mult, 0, 0);
	osc2.connect(mult, 0, 1);


	gainNode = new Tone.Gain();
	mult.connect(gainNode);

	gainNode.toMaster();
```

If you aren't combining signals like this and are just working with one source or instrument you probably don't need to add your own gain node. 

### triggerAttackRelease

Be sure to check the documentation to make sure you are using the correct parameters for triggerAttackRelease(). For instance, if you call triggerAttackRelease on an amplitude envelope the first parameter is duration, but if called on an instrument the first parameter is note and the second is duration. 

### Using code you set up

Make sure to use envelopes and LFOs that you set up. Often I see things that go no where and have no effect. If your signal path is Noise -> Filter -> Amplitude Envelope be sure that the only element that has a .toMaster() is the Amplitude Envelope because the signal flows from the noise through the filter and then gets sent to the speakers after the amplitude envelope. 

### Debugging 

Remember to have your console open to check for errors. It will show you when something is not acting the way you think it is and which line the problem is at. 

### Transport

`Tone.Transport.start()` can be called in the setup before anything happens. It isn't telling anything to start happening then but just giving it the ability to happen later. 
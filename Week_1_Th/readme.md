<!-- # Class Notes

## Misc

### Class github

Check it [out](https://github.com/tatecarson/LSU-PDM-Spring-2018)

### Chrome errors

If you use chrome and are getting deprecated messages I wouldn't worry too much as long as everything is still working. Those yellow messages just mean that some parts will stop working eventually, and hopefully the maintainer of tone will fix the issues before too long. Another option is to just use Firefox.

### Code formatting

Be sure to format your code correctly before turning in an assignment. You will get points off for messy code. Most code editors will do this for you. If yours doesn't it might be a good idea to use one that does. It saves a lot of time and cuts down on bugs.

### Spectrogram

Sometimes it is useful to visualize the sound. [Here's](./Fx_spectrogram/) an example project that that does that.

### Listen for key press

* manually with [keyPressed()](https://p5js.org/reference/#/p5/keycode) and keyCode
* [AudioKeys](https://github.com/kylestetz/AudioKeys)
  * [Example](2_AudioKeys/sketch.js)

### Building blocks: Sources and Signals 

A [source](https://github.com/Tonejs/Tone.js/wiki/Sources) in tone is something that produces a sound on its own. Sources are combined to make more complex synthesis and sampling instruments. Sources need to be started with `.start()`.

A [signal](https://github.com/Tonejs/Tone.js/wiki/Signals) is something that processes a source. Signals are combined to make effects and components. Signals are set by using `.value = a number`

### Oscillators

The most basic unit of synthesis in tone is [Tone.Oscillator](https://tonejs.github.io/docs/r11/Oscillator). To see the types you can use enter `Tone.Oscillator.Type` in the console. Notice the difference in timbre between each. 

* Sine
* Triangle
* Sawtooth
* Square

### Noise

[Tone.Noise](https://tonejs.github.io/docs/r11/Noise) produces different colors of noise. Each has a different sound, covers a different frequency range,  and is used for different purposes. There are other colors of [noise](https://en.wikipedia.org/wiki/Colors_of_noise#Brown(ian)_noise) that tone doesn't implement that are good to know about.  

Types:

* white
* brown
* pink

### Manipulating sources with signals 

If we play two oscillators at the same time we are adding the signals, but not explicitly. We can multiply these sources together and get new sounds using `Tone.Multiply()`. If you change to usuing `Tone.Add()` you get the same as just having two oscillators playing at the same time. 

We then amplify the signal with a [GainNode](https://developer.mozilla.org/en-US/docs/Web/API/GainNode)
 
### Filters

A [filter](https://tonejs.github.io/docs/r11/Filter) modifies a source sound by either amplifying or attenuating certain frequency ranges of that sound.

Filter types can include:
* lowpass
* highpass
* bandpass 
* lowshelf 
* highshelf 
* notch 
* allpass
* peaking 


### Modulation and LFO

### Envelopes 

 -->

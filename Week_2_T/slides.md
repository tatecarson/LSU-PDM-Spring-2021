---
title: synth making from scratch
theme: sky
---


# Assignment 2

[Basic Sound Synthesis](https://moodle3.lsu.edu/mod/assign/view.php?id=988729)

---

## Oscillators

- Building blocks of synthesis 
- make sound from scratch
- a signal vibrates at a given frequency producing a sound
- types: sine, square, saw, triangle
- each with their own timbre or tone color

---

<!-- oscillator diagrams -->
<img src="osc.png" width="75%">

---

<iframe src="https://tonejs.github.io/examples/oscillator.html" style="width: 100%" height="400"></iframe>

---

## Simple example in Tone

<iframe height="309" style="width: 100%;" scrolling="no" title="PDM Sound: Synthesizer Intro." src="//codepen.io/lsuddem/embed/jKJqYv/?height=309&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/jKJqYv/'>PDM Sound: Synthesizer Intro.</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/RvYabz?editors=0010)

---

# Making a Synth from scratch

---

### Building blocks: Sources and Signals

- A [source](https://github.com/Tonejs/Tone.js/wiki/Sources) in tone is something that produces a sound on its own. 
- Sources are combined to make more complex synthesis and sampling instruments. Sources need to be started with .start().

---

- A [signal](https://github.com/Tonejs/Tone.js/wiki/Signals) is something that processes a source. 
- Signals are combined to make effects and components. 
- Signals are set by using .value = a number

---

### Oscillators

The most basic unit of synthesis in tone is [Tone.Oscillator](https://tonejs.github.io/docs/r11/Oscillator). 

* Sine
* Triangle
* Sawtooth
* Square

[example](https://tonejs.github.io/examples/oscillator.html)

---

## Enevelopes 

- [Tone example](https://tonejs.github.io/examples/envelope.html)

<!-- TODO: add in image of ADSR here!! -->
<img src="adsr.png" width="70%">

---

## ADSR

- Attack time is the time taken for initial run-up of level from nil to peak, beginning when the key is first pressed.
- Decay time is the time taken for the subsequent run down from the attack level to the designated sustain level.
- Sustain level is the level during the main sequence of the sound's duration, until the key is released.
- Release time is the time taken for the level to decay from the sustain level to zero after the key is released.


---

## Filters

- A [filter](https://tonejs.github.io/docs/r11/Filter) modifies a source sound by either amplifying or attenuating certain frequency ranges of that sound.

---

<!-- source: computer music tutorial pg 188 - Roads -->
<img src="fourCommonFilters.png" width="65%">


---

### Filter types can include:
* lowpass
* highpass
* bandpass 
* lowshelf 
* highshelf 
* notch 
* allpass
* peaking 

---

### Noise

- [Tone.Noise](https://tonejs.github.io/docs/r11/Noise) produces different colors of noise. 
- Each has a different sound, covers a different frequency range,  and is used for different purposes. 
- There are other colors of [noise](https://en.wikipedia.org/wiki/Colors_of_noise) that tone doesn't implement that are good to know about.  

---

<img src="colors-of-noise.webp">

---
## Most often used types

* white
* brown
* pink
  

---
## click left arrow for noise

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - Tone.Noise remake" src="//codepen.io/lsuddem/embed/VdxRxz/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/VdxRxz/'>PDM Sound - Tone.Noise remake</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/ZwwBPL?editors=0010)

---

## Envelopes example

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - Envelopes" src="//codepen.io/lsuddem/embed/OddbRB/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/OddbRB/'>PDM Sound - Envelopes</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/bzzBgZ)

---

## More envelopes

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - More Envelopes " src="//codepen.io/lsuddem/embed/rPPWwL/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/rPPWwL/'>PDM Sound - More Envelopes </a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/Oddbgr)

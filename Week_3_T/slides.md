---
title: "Synthesizer tour"
theme: sky 
---

## Additive synth 

<iframe height="300" style="width: 100%;" scrolling="no" title="Additive synth example" src="https://codepen.io/lsuddem/embed/yLNXvNZ?height=300&theme-id=37199&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/yLNXvNZ'>Additive synth example</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/zYGzRKx?editors=0010)

---

## Getting presets

[presets](https://www.guitarland.com/MusicTheoryWithToneJS/Presets-gh-pages/)

---

#  Simple Synths 
  
---

## Synth

![](https://docs.google.com/drawings/d/1-1_0YW2Z1J2EPI36P8fNCMcZG7N1w1GZluPs4og4evo/pub?w=1163&h=231)

---

## Preset -  Alien Synth

* type
  * fatsine4
    * prefix the basic types with “fm”, “am”, or “fat” to use the FMOscillator, AMOscillator or FatOscillator types.
    * sine, square, triangle, or sawtooth. 
    * number of partials

---

* from FatOscillator docs
  * [docs](https://tonejs.github.io/docs/r13/FatOscillator)
  * count
    * number of detuned oscillators
  * spread  
    * detune spread between oscillators
  * The effect of modulation here is timbral not control 

---

<iframe height="500" style="width: 100%;" scrolling="no" title="Synth - Presets - Alien Chorus" src="//codepen.io/lsuddem/embed/BbBQdj/?height=425&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/BbBQdj/'>Synth - Presets - Alien Chorus</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Preset - Steelpan

*  type
  * fatcustom
    *  osc type + custom partials
    *  partials represented as an array
    *  each number is the gain of a partial
  
---

<iframe height="445" style="width: 100%;" scrolling="no" title="Synth - Presets - Steelpan" src="//codepen.io/lsuddem/embed/VRZPZY/?height=445&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/VRZPZY/'>Synth - Presets - Steelpan</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## PolySynth

 * Make any synth polyphonic
 * play more than one note at a time! 
 * [example](https://tonejs.github.io/examples/polySynth.html)

---

## MonoSynth
  
![monosynth diagram](https://docs.google.com/drawings/d/1gaY1DF9_Hzkodqf8JI1Cg2VZfwSElpFQfI94IQwad38/pub?w=924&h=240)

---

* everything triggered at the same time
* FilterEnvelope, a FrequencyEnvelope
  * see: [FrequencyEnvelope docs](https://tonejs.github.io/docs/r13/FrequencyEnvelope) 
  * parameters only noticeable with longer amplitude envelopes
  * baseFrequency - min
  * octaves - max

---

<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - MonoSynth - Pianoetta" src="//codepen.io/lsuddem/embed/rRBwxo/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/rRBwxo/'>Synth - Presets - MonoSynth - Pianoetta</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---
 
## DuoSynth

![diagram](https://docs.google.com/drawings/d/1bL4GXvfRMMlqS7XyBm9CjL9KJPSUKbcdBNpqOlkFLxk/pub?w=1012&h=448)

---

*  vibratoAmount
*  vibratoRate
*  harmonicity
   *  ratio between two voices, 1 - 2
   *  1 - no change
   *  2 - an octave change
*  portamento
   *  glide time between notes, like a slide on a guitar
  
---

<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - DuoSynth - preset1" src="//codepen.io/lsuddem/embed/GeKEyE/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/GeKEyE/'>Synth - Presets - DuoSynth - preset1</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## AMSynth

* Amplitude Modulation
* [example](https://tonejs.github.io/examples/amSynth.html)
* we have less control over this than when we built it ourselves
  
---

## FMSynth
* Frequency Modulation
* can make interesting effects for games
![diagram](https://docs.google.com/drawings/d/1h0PUDZXPgi4Ikx6bVT6oncrYPLluFKy7lj53puxj-DM/pub?w=902&h=462)

---
  
* modulationIndex
* amount of the modulation
* ratio of the frequency of the modulating signal (mf) to the amplitude of the modulating signal (ma) – as in ma/mf.

<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - FMSynth - Kalimba" src="//codepen.io/lsuddem/embed/XGrgPr/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/XGrgPr/'>Synth - Presets - FMSynth - Kalimba</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## NoiseSynth
  
<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - NoiseSynth" src="//codepen.io/lsuddem/embed/ywBXrW/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/ywBXrW/'>Synth - Presets - NoiseSynth</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
  
---

## MetalSynth
  
* FMosc
* amplitude env
* filter
* Resonance
  * The frequency of the highpass filter attached to the envelope
  
---

<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - MetalSynth - hihat" src="//codepen.io/lsuddem/embed/pYzrNz/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/pYzrNz/'>Synth - Presets - MetalSynth - hihat</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## MembraneSynth

 * make a kickdrum
  * pitchDecay
    * length of frequency envelope 
    * [frequency.exponentialRampToValueAtTime](https://github.com/Tonejs/Tone.js/blob/dev/Tone/instrument/MembraneSynth.js#L92)
  * octaves
    * The number of octaves the pitch envelope ramps.

---

<iframe height="265" style="width: 100%;" scrolling="no" title="Synth - Presets - MembraneSynth - Kick" src="//codepen.io/lsuddem/embed/XGraJm/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/XGraJm/'>Synth - Presets - MembraneSynth - Kick</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---




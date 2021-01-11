---
title: "Scheduling Signals"
theme: sky 
---

# Audio Project 3

---

## Examples from last year

* [project 1](https://lsu-pdm-2020.netlify.com/week_2_th/project-examples/project-1/)
* [project 2](https://lsu-pdm-2020.netlify.com/week_2_th/project-examples/project-2/)
* [project 3](https://lsu-pdm-2020.netlify.com/week_2_th/project-examples/project-3/)
* [project 4](https://lsu-pdm-2020.netlify.com/week_2_th/project-examples/project-4/)
---

## LFO (Low Frequency Oscillator)

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - LFO" src="//codepen.io/lsuddem/embed/JxxbMy/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/JxxbMy/'>PDM Sound - LFO</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/QYYGmL)

---

# Scheduling Signals

---

## Setting Values

- This will set the value when ever you trigger it
  
```
oscillator.frequency.value; //returns the current frequency value
oscillator.frequency.value = 100; //sets the value immediately
```

---

## Scheduling Values

- these are used to create [Envelopes](https://github.com/Tonejs/Tone.js/blob/e68fe68e4c4fef5b6eb3771491e9362c5b93579c/Tone/component/envelope/Envelope.ts#L355) in tone, but we can use them on their own
- See documentation in the [Param](https://tonejs.github.io/docs/13.8.25/Param) section of the docs 

---

## Types of scheduling

- **setValueAtTime** - to schedule a value change at a precise time.
- **linearRampToValueAtTime** - to ramp to a value starting from the previously scheduled value.
- **exponentialRampToValueAtTime** - same as the above, but with an exponential curve instead of a linear curve.

---

- **setTargetAtTime** - unlike the RampValueAtTime methods, in setTargetAtTime, the time attribute is when it should start ramping towards the value instead of arrive at the value. It takes a third parameter which is the time constant at which it will change.
- **setValueCurveAtTime** - sets an array of values which will be evenly invoked over the course of the duration.
- **cancelScheduledValues** - cancels all values after the specified time.

---

## Ramping values

- **linearRampTo** - set a value and a ramp time and the signal will begin linearly ramping towards that value.
- **exponentialRampTo** - same as above but exponential ramp.
- **rampTo** - same interface as the above methods, but will automatically decide to use linear or exponential based on the units of the signal.

---

## Time

- Number: seconds
  - 1.2: 1.2 seconds 
- String: synchronized to the Tone.Transport

- ex of setting BPM: 
```
Tone.Transport.bpm.value = 80;
//ramp the bpm to 120 over 10 seconds
Tone.Transport.bpm.rampTo(120, 10)
```

---

## Notation time

- Describes time in BPM and time signature relative values.
  - "4n" = quarter note
  - "8t" = eighth note triplet
  - "2m" = two measures
  - "8n." = dotted-eighth note

---

## Relative time 

- Prefix any of the above with "+" and it will be interpreted as "the current time plus whatever expression follows"

  - "+1m" = 1 measure from now
  - "+0.5" = half a second from now

---

## scheduling examples

- see [signal](https://tonejs.github.io/docs/r13/Signal) for specifics
  
<iframe height="400" style="width: 100%;" scrolling="no" title="PDM Sound - Scheduling Demo" src="//codepen.io/lsuddem/embed/yZrROR/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/yZrROR/'>PDM Sound - Scheduling Demo</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/daLEpG?editors=0010)

---

# More LFOs

---

## remaking effects with lfos

- we can use an LFO to remake any effect with 'auto' in the name
  - autowah, autopanner, autofilter
  - also tremolo, vibrato
  - fast tremolo is amplitude modulation
  - fast vibrato is frequency modulation

[examples](https://tonejs.github.io/examples/lfoEffects.html)

---
<!-- 
## Tremolo and Vibrato

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - Tremolo remake" src="//codepen.io/lsuddem/embed/VgNOVb/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/VgNOVb/'>PDM Sound - Tremolo remake</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/ErzRmz) -->

<!-- --- -->

## Autofilter and Autopan

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound - Autofilter, autowah, autopanner remake" src="//codepen.io/lsuddem/embed/VgNOVb/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/VgNOVb/'>PDM Sound - Autofilter, autowah, autopanner remake</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/ErzeKo?editors=1011)

---


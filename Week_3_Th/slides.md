---
title: "Sound effects and Sequencing"
theme: sky 
---


## Audio project 4
### Sound with visuals

[link](https://moodle3.lsu.edu/mod/assign/view.php?id=1362971)

---

* See [HackPact](https://github.com/stc/HackPact) for inspiration

---

## Bubbles with sound

<iframe height="490" style="width: 100%;" scrolling="no" title="Bubbles with sound!" src="//codepen.io/lsuddem/embed/rROVea/?height=490&theme-id=35490&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/rROVea/'>Bubbles with sound!</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


---

[Sequencing/timing examples](https://tonejs.github.io/examples/stepSequencer.html)

---
## Sequencing notes

* [Tone.Transport](https://github.com/Tonejs/Tone.js/wiki/Transport)
  * start
  * stop
  * toggle
    * go between start and stop
  * seconds
    * get current position in seconds
  * position
    * get beats:bars:sixteens
  * bpm
    *  beats per minute

---

  * schedule
  * scheduleRepeat

<iframe height="490" style="width: 100%;" scrolling="no" title="Tone.Transport - schedule and scheduleRepeat" src="//codepen.io/lsuddem/embed/EMxjzd/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/EMxjzd/'>Tone.Transport - schedule and scheduleRepeat</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
  
---

# higher level sequencers

[overview](https://github.com/Tonejs/Tone.js/wiki/Events)
---
  
## Event
* abstracts away Tone.Transport.schedule and provides a schedulable callback for a single or repeatable events along the timeline
* loop
  * true or false
* loopEnd
* loopStart
* mute
  * won't fire if mute is true

---

* playbackRate
  * interval if looped
* probability
  * add randomness to note triggered probability
* progress
  * where are we in the loop?

---

<iframe height="490" style="width: 100%;" scrolling="no" title="Tone.Transport - Event" src="//codepen.io/lsuddem/embed/bZGwaz/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/bZGwaz/'>Tone.Transport - Event</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
[starter](https://codepen.io/lsuddem/pres/LaVvpw?editors=0011)

---
## Rain on a tin roof

<iframe height="490" style="width: 100%;" scrolling="no" title="Rain on a tin roof " src="//codepen.io/lsuddem/embed/ZPYdLa/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/ZPYdLa/'>Rain on a tin roof </a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pres/wOaOxW?editors=1010)

---

## Part

*  collection Tone.Events which can be started/stopped and looped as a single unit.

<iframe height="400" style="width: 100%;" scrolling="no" title="Tone.Transport - Part" src="//codepen.io/lsuddem/embed/aMbBPa/?height=351&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/aMbBPa/'>Tone.Transport - Part</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pres/qvdwae)
---

## Sequence

* alternate notation of a part

<iframe height="400" style="width: 100%;" scrolling="no" title="Tone.Transport - Sequence" src="//codepen.io/lsuddem/embed/YgXMYW/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/YgXMYW/'>Tone.Transport - Sequence</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pres/bZdJZK)
---
## Loop

* an event that loops by default
* notes can not be passed in like event though
* it's good for looping things that aren't note based
* lets redo out rain example with Loop
  
---

# Rain loop

<iframe height="400" style="width: 100%;" scrolling="no" title="Tone.loop with Rain on a tin roof " src="//codepen.io/lsuddem/embed/VRLOwb/?height=317&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/VRLOwb/'>Tone.loop with Rain on a tin roof </a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pres/VRLOQy?editors=0010)

---

## Pattern

* play through note arrays like sequence or part
* arpeggiate based on Tone.CtrlPattern type
* see: [docs](https://tonejs.github.io/docs/r13/CtrlPattern)
* CtrlPattern types
  * up, down, upDown, downUp, alternateUp, alternateDown, random, randomWalk

---

<iframe height="490" style="width: 100%;" scrolling="no" title="Tone.Transport - Pattern" src="//codepen.io/lsuddem/embed/NJGPyy/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/NJGPyy/'>Tone.Transport - Pattern</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Sound Effect

---

## Massive impact

<iframe height="490" style="width: 100%;" scrolling="no" title="Massive Impact" src="//codepen.io/lsuddem/embed/moyYbx/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/moyYbx/'>Massive Impact</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pres/eXNXMy?editors=0010)


---

## Sirens

<iframe height="490" style="width: 100%;" scrolling="no" title="Sirens" src="//codepen.io/lsuddem/embed/oVXyaE/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/oVXyaE/'>Sirens</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pres/jJPJoL?editors=0010)

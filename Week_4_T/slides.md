---
title: "Sound effects and Sequencing"
theme: sky 
---

## Tone-rhythm

[source](https://github.com/scraggo/tone-rhythm)

- how do you match a rhythm and pitch array together? 

```
const mariaDurations = ['8n', '8n', ['2n', '4n'], '8n', '4t', '4t', '4t', '4t', '4t', '4t', '8n', ['2n', '4n'], '8n', '8n', '8n', '8n', '8n', ['4n', '8n'], '8n', '8n', '8n', '8n', '8n', '4n', '4n', ['2n', '4n', '8n'], '8n', '8n', ['2n', '4n'], '8n', '4t', '4t', '4t', '4t', '4t', '4t', '8n', ['2n', '4n'], '8n', '8n', '8n', '8n', '8n', ['4n', '8n'], '8n', '8n', '8n', '8n', '8n', '4n', '4n', ['2n', '4n', '8n']];

const mariaPitches = ["Eb4", "A4", "Bb4", "Eb4", "A4", "Bb4", "C5", "A4", "Bb4", "C5", "A4", "Bb4", "Bb4", "A4", "G4", "F4", "Eb4", "F4", "Bb4", "Ab4", "G4", "F4", "Eb4", "F4", "Eb4", "G4", "Eb4", "A4", "Bb4", "Eb4", "A4", "Bb4", "C5", "A4", "Bb4", "C5", "D5", "Bb4", "D5", "Eb5", "D5", "C5", "Bb4", "D5", "D5", "Eb5", "D5", "C5", "Bb4", "D5", "Eb5", "F5"];
```

- option 1 - manually
```
{"time" : 0, "note" : "C3", "velocity": 0.9},
{"time" : "0:2", "note" : "C4", "velocity": 0.5}
```
- or [Tone-rhythm](https://github.com/scraggo/tone-rhythm/blob/master/src/tone-rhythm.js#L102)
  
---

## Tone-rhythm ex:

<iframe height="300" style="width: 100%;" scrolling="no" title="Tone-rhythm - Maria " src="//codepen.io/lsuddem/embed/zbNyeK/?height=300&theme-id=35490&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/zbNyeK/'>Tone-rhythm - Maria </a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/qvRgOp)

---

## Scales 

- A set of notes in a given order
- ex c major scale
  - C D E F G A B 
- F major scale
  - F G A Bb C D E
- [scale maker](https://github.com/davidcole1977/scale-maker) defines these scales for us

---

## Scale Example

<iframe height="300" style="width: 100%;" scrolling="no" title="Tone + Teoria - Scales / Chords" src="//codepen.io/lsuddem/embed/pYRGeb/?height=300&theme-id=35490&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/pYRGeb/'>Tone + Teoria - Scales / Chords</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/GereRg?editors=0011)

---

## Tunings

[Tune.js](https://github.com/abbernie/tune)

<iframe src="https://abbernie.github.io/tune/" width="100%" height="500px"></iframe>


---

## Pattern / tuning example

<iframe height="300" style="width: 100%;" scrolling="no" title="Tone Ctrl and Tuning" src="//codepen.io/lsuddem/embed/QodXJm/?height=300&theme-id=35490&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/QodXJm/'>Tone Ctrl and Tuning</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/PLWMWQ?editors=1011)

note: only works with older version of tonejs

---
<iframe height="300" style="width: 100%;" scrolling="no" title="Tone.js + Total Serialism - FINISHED" src="https://codepen.io/lsuddem/embed/xxRqKve?height=300&theme-id=37199&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/xxRqKve'>Tone.js + Total Serialism - FINISHED</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter](https://codepen.io/lsuddem/pen/OJbBvJq?editors=0010)
---
title: Introduction
theme: solarized
---

# Project Setup

## Editor
- [Visual Studio Code](https://code.visualstudio.com/), my choice
- Others
  - Atom
  - Sublime
---
## Local Server
- [Download Node](https://nodejs.org/en/)
- Choose from these servers
  * [lite-server](https://www.npmjs.com/package/lite-server)
  * [http-server](https://www.npmjs.com/package/http-server)
  * [browser-sync](https://www.browsersync.io/)
    * host folders with ```browser-sync start -s --directory -f ./ ```

---

# Assignment 1: Build a sampler 

- [assignment](https://moodle3.lsu.edu/mod/assign/view.php?id=1362966)
- Project starter
  - [view](/starter-template/)
  - [download](/starter-template.zip)
  

---

# WEBAUDIO BASICS & SOUND FILE PLAYERS

---

## Understanding the Audio Signal Path

![null](https://d33wubrfki0l68.cloudfront.net/456ff8140850b3122895b86c7d9f2743e4f3d480/593ce/images/uploads/simple_audio_pathway-1-.png)

ex:

```javascript
var player = new Tone.Player().toMaster();
```

---

## Creating a Sound File Player

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound: Sample Playback" src="//codepen.io/lsuddem/embed/MXVgVR/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/MXVgVR/'>PDM Sound: Sample Playback</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter template](https://codepen.io/lsuddem/pen/qgYmGr)
---


# Find your own sounds
* [freesound](http://www.freesound.org)
* [Macaulay Library](https://www.macaulaylibrary.org/#_ga=2.227816093.1451042078.1519181247-355812784.1519181247)

---

# Filetypes
* mp3 is best for small file size 
* other options
  * [Supported media formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
  * check at [Can I Use](https://caniuse.com/)
* convert wavs with:
    * [Audacity](https://www.audacityteam.org/)
    * [Online audio converter](https://online-audio-converter.com/) - in the browser 
    * [lame](http://lame.sourceforge.net/download.php) - convert to mp3 in the terminal

---
## Playing Multiple Sounds with Tone.Players

note: 
Instead of making multiple single-file soundfile players, we can build one Tone.Players instrument and load it with multiple soundfiles. To define which sounds to play we create an object with multiple file paths (done by opening a pair of { } brackets inside of the Tone.Players functions parenthesis), each with a unique name to call the sound up by later. You can think of this name as a type of variable that is inside of an object. 


Since we are now dealing with multiple sound files, we should cover some of the best ways to trigger individual sounds in your project, as well as ways to modulate and manipulate those sounds while they are playing.

---

### Triggering and changing sounds

- keyIsDown
- <button> Buttons</button> 
- sliders.   <input type="range" min="1" max="100" value="50" class="slider" id="myRange">


note:
Since we have multiple sounds to play now we can use keys on the keyboard to trigger them. To do that we use the p5 function keyIsDown. The embedded code below shows this method in action.

---

#### Starting the sounds

store multiple samples in a Players object
```
new Tone.Players({
    name1: "url",
    name2: "url",
    name3: "url"
  })
```


select sample
```
players.get("name1")
```

play sample
```
players.get("name1").start()
```

---

## Tone Players example

<iframe height="303" style="width: 100%;" scrolling="no" title="PDM Sound: Playing Multiple Samples with Tone.Players" src="//codepen.io/lsuddem/embed/vrzEjR/?height=303&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/vrzEjR/'>PDM Sound: Playing Multiple Samples with Tone.Players</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter template](https://codepen.io/lsuddem/pen/wNjjKM?editors=0010)

---

# Using buttons

Alternatives to **keyIsDown**?
<button>Buttons!!</button>
<button>Buttons!!</button>
<button>Buttons!!</button>
<button>Buttons!!</button>

---

* With p5.dom
  * with the newest version of p5.js (0.10.2) the dom library is imported automatically. If you're using an older version make sure the p5.dom is imported. 
  * **createButton()**. 
* Position it 
  * **button1.position(x, y)** 
* listen on it
  * **button1.mousePressed()**

ex:
```
button1 = createButton("button label");
button1.position(x, y);
button1.mousePressed()
```
---

## play sample with buttons

<iframe height="300" style="width: 100%;" scrolling="no" title="PDM Sound: Controlling Players with On-Screen Buttons" src="//codepen.io/lsuddem/embed/NoMMwp/?height=300&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/NoMMwp/'>PDM Sound: Controlling Players with On-Screen Buttons</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starting template](https://codepen.io/lsuddem/pen/Vgxxyo?editors=0010)
---

## Using sliders

Change the sound while it's playing. 

To make a slider in p5.js use createSlider().

##### Syntax

```
createSlider(min,max,[value],[step]);
```
---

## Parameters

* _min_ - minimum value of the slider
* _max_ - maximum value of the slider
* _value_ - default value of the slider
* _step_ - step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value)

Current slider value is stored in **slider.value()**

---

## Labeling your sampler

For the assignment you need to label your sampler:

#### Syntax

```
text(str,x,y);
```

##### Parameters

*  _str_ - text content
*  _y_ - the y axis coordinate of text
*  _x_ - the x axis coordinate of text

---

## Change playback speed with slider

<iframe height="324" style="width: 100%;" scrolling="no" title="PDM Sound: Sliders and Buttons to Trigger and Control Players" src="//codepen.io/lsuddem/embed/LrJrVe/?height=324&theme-id=35490&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/lsuddem/pen/LrJrVe/'>PDM Sound: Sliders and Buttons to Trigger and Control Players</a> by LSU DDEM
  (<a href='https://codepen.io/lsuddem'>@lsuddem</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[starter template](https://codepen.io/lsuddem/pen/MLGGxB?editors=0010)

---

### Start on your assignments now. We'll add effects to them on Tuesday. 
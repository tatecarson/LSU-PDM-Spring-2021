# Audio assignment 1 notes

* Including Tone.js
  * CDN: another option to include
    * <https://cdnjs.com/libraries/tone>
    * <https://cdnjs.com/libraries/p5.js>
    * downsides are that this will only work when connected to internet
    * very good idea if the site is ever hosted online
    * very fast download for user
    * will always have the most updated version of library
* Setting up a local server 
  * [Download Node](https://nodejs.org/en/)
    * use one of the following node packages to serve the files
      * [lite-server](https://www.npmjs.com/package/lite-server)
      * [http-server](https://www.npmjs.com/package/http-server)
      * [browser-sync](https://www.browsersync.io/)
        * host folders with ```browser-sync start -s --directory -f ./ ```
* If you're looking for a new code editor check out [Visual Studio Code](https://code.visualstudio.com/), it's pretty great 

Refer to [WEBAUDIO BASICS & SOUND FILE PLAYERS](https://pdm.lsupathways.org/3_audio/1_sampler/1_lesson_1/)  for more examples

## Starter files 

Use [this](0_p5-tone-starter) to start new projects. 

## Example 1:

* [Including tone](1_includingTone_FINISHED/sketch.js)
* include p5.dom in html file
* grab sound file
  * [freesound](http://www.freesound.org)
  * [Macaulay Library](https://www.macaulaylibrary.org/#_ga=2.227816093.1451042078.1519181247-355812784.1519181247)
* not all file formats - wav is fine for offline, mp3 is best for online and mobile
  * [Supported media formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
  * convert file with 
    * [Online audio converter](https://online-audio-converter.com/) - in the browser 
    * [lame](http://lame.sourceforge.net/download.php) - convert to mp3 in the terminal
* add to sound to samples folder
* show playing one file
* add button from p5.dom
* also see:
  * <https://tonejs.github.io/docs/r11/Sampler>
    * useful for making sampler instruments
  * <https://tonejs.github.io/docs/r11/Players>
    * useful for grouping together like sounds

## example 2: add ability to play multiple files

* [Multiple samples](3_TonePlayersMultisample_FINISHED/sketch.js)
* add multiple Tone.Player objects together
* add buttons to play each file

## example 3: add effects to each 

* [Effects](4_TonePlayersFX_FINISHED/sketch.js)
* give an overview of effects from the API
* add effects to each file
* add ways to control each effect
* add labels
* also see Tone wiki for more info
  * [Effects](https://github.com/Tonejs/Tone.js/wiki/Effects)
  * [Connections](https://github.com/Tonejs/Tone.js/wiki/Connections)


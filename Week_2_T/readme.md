# Class Notes 

## Announcements 

### Misc

* Buy Arduino kit now, link on moodle
* Synth assignment summary 

### Common issues from assignment 1 

#### Foldername

Please from now on name your assignment folder: `lastnameFirstname_Assignment_1`

This will make it much easier to organize assignments. 

#### Filetypes 

It is good practice to use mp3 files for audio on the internet. Moodle may take them but it is much better to use smaller files. You can convert with the free audio program Audacity. 

#### Breaking errors 

Many people had one error that might make their entire sketch not work. I tried to fix these and give credit for the code that was working. It was mostly file paths and filetypes that were issues. 

#### HTML files

We should always name our html file index.html unless we are working on a site with multiple files. Index is a special word that the browser recognizes so you don't have to explicitly type the html file name when going to a website. 

### Common mistakes from assignment 1 

#### Incorrect library source 

Many people linked to library files that did not work on my computer. It looks like they were in a directory thai didn't get included in the zip. A good way to avoid this is to use the CDN links or use the downloaded files and be sure to test running a server from that directory and make sure that it works. 

**Only p5, p5.dom, Tone, and the sketch file need to be referenced. Audio or image files don't need to be referenced from the HTML file.**

`/Folder/Tone.js` does not work on all computers. It must work on PCs? Just be safe use `./Folder/Tone.js` or just `Folder/Tone.js` to reference a folder that is inside the folder you are currently working in. 

#### To .value or not to .value 

.value is used when updating a signal. If it is unclear whether what you're updating is a signal or not the API has a clear indication. Remember that signals are used for setting the value of something that is moving at audio-rate, 44,100 times a second. 

See [chorus frequency](https://tonejs.github.io/docs/r11/Chorus#frequency)

#### Mixing arrow functions and regular functions 

A few people had something like this: 

```
button.mousePressed(() => randomFunction())

function randomFunctino() {
	return randomThings 
}
```

This could have just been written as: 

```
button.mousePressed(randomFunction)

function randomFunctino() {
	return randomThings 
}
```

since mouse pressed already takes a function. The arrow function is just used so we don't have to write a separate function for one task.

## Examples

### Envelopes 

#### 1_Envelopes_FINISHED

A generic `Tone.Envelope()` can be used to control any signals in Tone. In our example we use it to control the amplitude envelope. There are other types of envelopes that are more specific, they only deal with amplitude or frequency. 

#### Other envelopes 

Now we will look at the other envelopes: 

* AmplitudeEnvelope
* FrequencyEnvelope 

### Modulation and LFO


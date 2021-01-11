  This project converts this [pen](https://codepen.io/lsuddem/pen/QodXJm) to use with an arduino. 

Plan: 
[] Button 1 - toggle transport on and off
[] Button 2 - switch the state between contrlpattern of ctrlmarkov
[] Potentiometer - tempo change
[] x/y joystick - melody 1 probability, melody 2 probability 

## Step 1 - Setup the arduino with the correct outputs
* both buttons need states, refer to example with button states
  * https://github.com/tatecarson/LSU-PDM-Spring-2019/blob/master/Hardware_Week_2_Th/fade_addDebounce/fade_addDebounce.ino
  * we will also add in debouncing 
* [Pot](https://www.arduino.cc/en/Tutorial/Potentiometer) is a normal setup
* Impliment smoothing for x/y joystick? 

Check that all of this is working in the serial moniter before trying to send over to p5. 

After that reformat the data so that its easier to p5 to decode it, but less human readable. 
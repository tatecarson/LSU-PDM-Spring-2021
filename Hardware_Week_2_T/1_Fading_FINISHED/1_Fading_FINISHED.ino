/*
  Fading

  This example shows how to fade an LED using the analogWrite() function.

  The circuit:
  - LED attached from digital pin 9 to ground.

  created 1 Nov 2008
  by David A. Mellis
  modified 30 Aug 2011
  by Tom Igoe

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/Fading
*/

//for intellisense in vscode
#include <Arduino.h>

int ledPin = 9; // LED connected to digital pin 9

//no setup for this sketch
//we need it here anyway to compile
void setup()
{
}

void loop()
{
  // fade in from min to max in increments of 5 points:
  //change fade value
  for (int fadeValue = 0; fadeValue <= 255; fadeValue += 5)
  {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255; fadeValue >= 0; fadeValue -= 5)
  {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
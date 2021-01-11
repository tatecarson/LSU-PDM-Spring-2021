# Class Notes

## Code examples

### Fading - Tate

code at -> examples/analog/Fading.ino

[Arduiono tutorial](http://www.arduino.cc/en/Tutorial/Fading)

Important note: semicolons are not optional in arduino.

#### Analog write

This is our first example that writes an analog value. Where digital is either on or off, high or low, analog has more granularity. It is used for things when you want varying values, like fading an LED.

The range of analog write is 0 - 255

#### Pulse width modulation (PWM)

Some good [information](https://www.arduino.cc/en/Tutorial/PWM) from arduino on PWM.

A way to get analog results with digital means. A square wave is created and modulated at a certain tempo to get an analog effect.

### Morse code example - Simron

### AnalogInput - Tate

[Arduiono Tutorial](http://www.arduino.cc/en/Tutorial/AnalogInput)

Using the value of analogRead as wait time between analogWrite high and low. This makes the LED blink fast or slow.

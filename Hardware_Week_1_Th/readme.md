# Arduino Notes

* An introduction to [Arduino](https://www.arduino.cc/en/Guide/Introduction)
* Arduino [tutorials](https://www.arduino.cc/en/Tutorial/HomePage) 

## Software setup 

Find the Arduino IDE [here](https://www.arduino.cc/en/Main/Software), download and install.

Alternative:

[Arduino Create](https://create.arduino.cc/) - web based IDE

This seems to have some limits, use it only if needed. 

We will be using this editor to send code to our Arduino boards. 

## Intro to electricity 

Hardware [slides](hardware1.pdf)

## Reading resistor values

[Resistor color code chart](http://www.resistorguide.com/resistor-color-code/)

[Another chart ](http://www.resistorguide.com/pictures/resistor_color_codes_chart.png)

[Resistor video](https://www.youtube.com/watch?time_continue=79&v=SjlnW5g9np4)

[Color calculator](https://www.hobby-hour.com/electronics/resistorcalculator.php)

Figure out what resistor is needed using ohms law. This [calculator](https://www.rapidtables.com/calc/electric/ohms-law-calculator.html) could be handy. 

## Reading schematics and circuit diagrams 

The circuit diagram shows you what your finished circuit should look like on the Arduino board. 

The schematic is a more generic representation. 

## Breadboard use 


## Blinking LED 

A blinking LED is the simplest way to show a physical output on the Arduino. 

Blink [tutorial](http://www.arduino.cc/en/Tutorial/Blink) 

We will use this example to send 5v to the LED to turn it on and then 0v to turn it off. This loops over and over. 

# Circuit 
from tutorial:

>connect one end of the resistor (220 ohms) to the digital pin correspondent to the LED_BUILTIN constant (digital pin 13). Connect the long leg of the LED (the positive leg, called the anode) to the other end of the resistor. Connect the short leg of the LED (the negative leg, called the cathode) to the GND. In the diagram below we show an UNO board that has D13 as the LED_BUILTIN value.

### Circuit Daigram 

![circuit](LED_Diagram_bb.jpg)

### Functions 

* pinMode - initialize pin 13 as an output
* digitalWrite - write a value to that pin
* delay - wait a certain amount of time between sending next value

### Constants 

* LED_BUILTIN - constant that makes sure your using the correct digital output pin number. If you were using a different board this constant would be a different number.
* HIGH - send 5v to LED_BUILTIN
* LOW - send 0v to LED_BUILTIN

### Exercise 

1. Change the delay time in the Arduino sketch and see how it effects the LED. Be sure to send the changed code to the board. 
2. Detach part of the circuit. See how the external LED stops blinking but the onboard one keeps going. This is because the code is still running on the board even though you removed part of the circuit. 


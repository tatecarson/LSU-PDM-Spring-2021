# Arduino <--> p5js Communication

First clone this repository, we will be using basic-sketch as a starter sketch for serial communication.

See the [library](https://github.com/vanevery/p5.serialport) repository for more examples.

## Installation

To communicate between Arduino and p5js you need two pieces of software.

### p5.serialport

A p5.js library that enables communication between your p5 sketch and Arduino (or another serial enabled device). This provides the functions to read the incoming data from Arduino.

I have included this library as a cdn in the html of this repository. You do not need to download it as long as you include this link in your projects.

### p5.serialcontrol GUI 

[download](https://github.com/vanevery/p5.serialcontrol/releases/)

An application that opens the connection between arduino and p5js

#### Alternative using node server

First make sure you have Nodejs installed. You can download it [here](https://nodejs.org/en/). To make sure you have installed it correctly type `node -v` into the terminal. You should see a version number if installation was successful.

Next, run `npm install -g p5.serialserver` in the terminal. This installs the program you need to make the connection. We have installed it globally so that it can be run from anywhere with the command `p5serial`.

note: I have been having issues with this recently, it's best just to use the GUI above. 

## Setup

### Arduino sketch

We will be using AnalogInOutSerial to test that our connection is working. You can find it in your IDE under Examples -> 0.3.Analog -> AnalogInOutSerial

We only need to build the part of the circuit with the potentiometer to be able to vary our data. Hook that up and open the serial monitor to test your circuit. Be sure to close this when you're done because it can block p5.serialcontrol from connecting.

### p5.serialcontrol

Open the application. You shouldn't have to select anything in the app, it just needs to be open. 

### p5 sketch

Before running make sure that the `portName` variable is set to your port. You can see that mine is `const portName = '/dev/cu.usbmodem1421'`. Yours will be something that looks like that but you need to check first to make sure this is correct.



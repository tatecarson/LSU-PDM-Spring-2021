/*
 * Button 1 toggles between two states, fading automatically and fading with the pot
 * Button 2 turns the LED on and off
 * 
 * In order to toggle the states correctly debouncing is used
 */

// PWM Pin
int led = 9;
int brightness = 200;
int fadeAmount = 5;
int pot;
int button1 = 0;
int button2 = 0;
int button1State;
int lastButton1State = LOW;
int button2State;
int lastButton2State = LOW;

// states of the program
int fadeState = HIGH;
int onState = HIGH;

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastDebounceTime = 0; // the last time the output pin was toggled
unsigned long debounceDelay = 50;   // the debounce time; increase if the output flickers
unsigned long lastDebounceTime2 = 0;

void setup()
{
  // because we're using a digital pin we have
  // to set the mode to input or output
  pinMode(led, OUTPUT);
  pinMode(2, INPUT);
  pinMode(4, INPUT);
  Serial.begin(9600);
}

void loop()
{
  // toggle between fading and using pot
  // fadeState
  button1 = digitalRead(2);

  // check to see if you just pressed the button
  // (i.e. the input went from LOW to HIGH), and you've waited long enough
  // since the last press to ignore any noise:

  if (button1 != lastButton1State)
  {
    // reset the debouncing timer
    lastDebounceTime = millis();
    // Serial.println(lastDebounceTime);
  }

  if ((millis() - lastDebounceTime) > debounceDelay)
  {
    // whatever the reading is at, it's been there for longer than the debounce
    // delay, so take it as the actual current state:

    // if the button state has changed:
    if (button1 != button1State)
    {
      button1State = button1;

      // only toggle the LED if the new button state is HIGH
      if (button1State)
      {
        fadeState = !fadeState;
      }
    }
  }

  // save the reading. Next time through the loop, it'll be the lastButtonState:
  lastButton1State = button1;

  Serial.println(onState);

  // turn everything on or off
  // changes onState to true or false
  button2 = digitalRead(4);

  // If the switch changed, due to noise or pressing:
  if (button2 != lastButton2State)
  {
    // reset the debouncing timer
    lastDebounceTime2 = millis();
    // Serial.println(lastDebounceTime);
  }

  if ((millis() - lastDebounceTime2) > debounceDelay)
  {
    // whatever the reading is at, it's been there for longer than the debounce
    // delay, so take it as the actual current state:

    // if the button state has changed:
    if (button2 != button2State)
    {
      button2State = button2;

      // only toggle the LED if the new button state is HIGH
      if (button2State)
      {
        onState = !onState;
      }
    }
  }

  // save the reading. Next time through the loop, it'll be the lastButtonState:
  lastButton2State = button2;

  //  Serial.println(button2State);

  if (fadeState && onState)
  {
    // Control fade with pot
    ///////////////////////

    // read from pot on A0
    pot = analogRead(A0);

    // constrain the pot value 0 - 255
    brightness = map(pot, 0, 1023, 0, 255);

    // set the brightness of pin 9 with pot value
    analogWrite(led, brightness);
  }
  else if (!fadeState && onState)
  {
    // autofade with button press
    /////////////////////////////

    // increase brightness by fadeAmount
    brightness = brightness + fadeAmount;

    if (brightness <= 0 || brightness >= 255)
    {
      // toggle increase and decrease
      fadeAmount = -fadeAmount;
    }
    analogWrite(led, brightness);
  }
  else if (!onState)
  {
    digitalWrite(led, LOW);
  }

  delay(30);
}

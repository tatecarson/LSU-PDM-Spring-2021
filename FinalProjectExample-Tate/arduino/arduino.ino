/*
   Button 1 - toggle transport on and off
   Button 2 - switch the state between contrlpattern of ctrlmarkov
   Potentiometer - tempo change
   x/y joystick - melody 1 probability, melody 2 probability

   In order to toggle the states correctly debouncing is used
*/

int button1 = 0;
int button2 = 0;
int button1State;
int lastButton1State = LOW;
int button2State;
int lastButton2State = LOW;

// states of the program
int transportState = HIGH;
int patternState = HIGH;

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastDebounceTime = 0; // the last time the output pin was toggled
unsigned long debounceDelay = 50;   // the debounce time; increase if the output flickers
unsigned long lastDebounceTime2 = 0;

void setup()
{
  pinMode(2, INPUT);
  pinMode(4, INPUT);
  Serial.begin(9600);

  while (Serial.available() <= 0) {
    Serial.println("hello");
    delay(300);
  }
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
        transportState = !transportState;
      }
    }
  }

  // save the reading. Next time through the loop, it'll be the lastButtonState:
  lastButton1State = button1;

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
        patternState = !patternState;
      }
    }
  }

  // save the reading. Next time through the loop, it'll be the lastButtonState:
  lastButton2State = button2;

  if (Serial.available() > 0) {
    Serial.print(transportState);
    Serial.print(",");
    Serial.print(patternState);
    Serial.print(",");

    //  Serial.println(button2State);
    int tempo = analogRead(A0);
    int melody1Prob = analogRead(A1);
    int melody2Prob = analogRead(A2);

    Serial.print(tempo);
    Serial.print(",");
    Serial.print(melody1Prob);
    Serial.print(",");
    Serial.println(melody2Prob);

  }



  delay(100);
}

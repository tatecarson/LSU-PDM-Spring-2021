/*
 * Button 1 toggles between two states, fading automatically and fading with the pot
 * Button 2 turns the LED off after 4 presses
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
int button2;
int lastButton2 = LOW;
int buttonPushCounter = 0;

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
  button1 = digitalRead(2);
  Serial.println(button1);
  // If the switch changed, due to noise or pressing:
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
        fadeState = !fadeState;
        Serial.println(fadeState);
      }
    }
  }

  // save the reading. Next time through the loop, it'll be the lastButtonState:
  lastButton1State = button1;

  // this button will turn off LED after its pressed 4 times
  // we're not using the whole debouncing function here
  button2 = digitalRead(4);

  if (button2 != lastButton2)
  {
    // if the state has changed, increment the counter
    if (button2 == HIGH)
    {
      // if the current state is HIGH then the button went from off to on:
      buttonPushCounter++;
      Serial.println("on");
      Serial.print("number of button pushes: ");
      Serial.println(buttonPushCounter % 4);
      Serial.println(onState);
    }
    else
    {
      // if the current state is LOW then the button went from on to off:
      Serial.println("off");
    }
    // Delay a little bit to avoid bouncing
    delay(50);
  }
  // save the current state as the last state, for next time through the loop
  lastButton2 = button2;

  // change onState after x number of presses
  if (buttonPushCounter % 4 == 0)
  {
    onState = true;
  }
  else
  {
    onState = false;
  }

  //  Serial.println(button2);

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

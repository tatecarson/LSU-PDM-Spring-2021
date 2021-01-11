
// PWM Pin
int led = 9;
int brightness = 200;
int fadeAmount = 5;
int pot;

int ledModeToggle = 0;
int ledOnToggle = 0;
int ledModeToggleState = 0;
int ledOnToggleState = 0;

// States allow us to turn the button from a momentary button to a toggle button
// now we can press the button once to switch between two states

void setup()
{
  // because we're using a digital pin we have
  // to set the mode to input or output
  pinMode(led, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  // toggle between fading and using pot
  ledModeToggle = digitalRead(2);

  if (ledModeToggle) {
    // this only kind of works
    // see how it polls back and forth between states way too quickly to be useful
    ledModeToggleState = !ledModeToggleState;
  }

  // turn everything on or off
  ledOnToggle = digitalRead(4);

  if (ledOnToggle) {
    ledOnToggleState = !ledOnToggleState;
  }

  Serial.println(ledModeToggleState);

  if (ledModeToggleState && ledOnToggleState) {
    // Control fade with pot
    ///////////////////////

    // read from pot on A0
    pot = analogRead(A0);

    // constrain the pot value 0 - 255
    brightness = map(pot, 0, 1023, 0, 255);

    // set the brightness of pin 9 with pot value
    analogWrite(led, brightness);
  }
  else if (!ledModeToggleState && ledOnToggleState) {
    // autofade with button press
    /////////////////////////////

    // increase brightness by fadeAmount
    brightness = brightness + fadeAmount;

    if (brightness <= 0 || brightness >= 255) {
      // toggle increase and decrease
      fadeAmount = -fadeAmount;
    }
    analogWrite(led, brightness);
  } else {
    // if neither button pressed turn LED off
    analogWrite(led, 0);
  }

  delay(30);
}

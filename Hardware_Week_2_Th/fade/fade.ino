// PWM Pin
int led = 9;
int brightness = 200;
int fadeAmount = 5;
int fade;

void setup() {
  // because we're using a digital pin we have
  // to set the mode to input or output
//  pinMode(led, OUTPUT);

  Serial.begin(9600);
}

void loop() {
  int button1 = digitalRead(2);
  int button2 = digitalRead(4);
  Serial.println(button2);
  if (button1) {
    // Control fade with pot
    ///////////////////////
    
    // read from pot on A0
    fade = analogRead(A0);

    // constrain the pot value 0 - 255
    brightness = map(fade, 0, 1023, 0, 255);

    // set the brightness of pin 9 with pot value
    analogWrite(led, brightness);

  } else if (button2) {
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

// Control the brightness of an LED with a photo resistor
// photoresistor circuit:
//https://www.arduino.cc/en/uploads/Tutorial/PhotoCellA0.png

// PWM Pin
int led = 9;
int brightness = 200;
//int fadeAmount = 5;
int photo;

void setup()
{
  // because we're using a digital pin we have
  // to set the mode to input or output
//  pinMode(led, OUTPUT);

  Serial.begin(9600);
}

void loop()
{
  // read from photo on A0
  photo = analogRead(A0);
//  Serial.println(photo);

  // test for the room you're in
  brightness = map(photo, 320, 800, 0, 255);

  brightness = constrain(brightness, 0, 255); 
  Serial.println(brightness); 
  // set the brightness of pin 9 with photo value
  analogWrite(led, brightness);
  delay(30);
}

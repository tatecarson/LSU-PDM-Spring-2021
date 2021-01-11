int led = 9;
int brightness = 200; 
int fadeAmount = 5; 
int fade; // analogRead

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int button1 = digitalRead(2); 
  int button2 = digitalRead(4); 

//  Serial.println(analogRead(A0 ));
  if(button1) {
    fade = analogRead(A0); 

    brightness = map(fade, 0, 1023, 0, 255); 

    analogWrite(led, brightness); 
  } else if(button2) {
    brightness = brightness + fadeAmount; 
    if(brightness <= 0 || brightness >= 255) {
      fadeAmount = -fadeAmount; 
    }
    analogWrite(led, brightness);
    
  } else {
    analogWrite(led, 0);
  }
  delay(30);
}

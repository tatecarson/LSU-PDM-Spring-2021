int incomingByte = 0;
boolean readDataFromp5 = true;

void setup() {
  Serial.begin(9600);
}

void loop() {
  // send data to p5
  if (readDataFromp5) {
    // Read data being sent from p5
    // reads from a buffer 
    if (Serial.available() > 0) {
      // get the data
      incomingByte = Serial.read(); 

      // read it in different formats 
//      Serial.write(incomingByte); // convert back to readable text
      /* 
       *  Prints data to the serial port as human-readable 
       *  ASCII text followed by a carriage return character 
       *  (ASCII 13, or '\r') and a newline character 
       *  (ASCII 10, or '\n'). 
       */
      Serial.println(incomingByte);       // print as an ASCII-encoded decimal

      // encode as Decimal, hex, oct, or binary 
      // decimal can be found on ASCII chart
      //Serial.println(incomingByte, DEC);  // print as an ASCII-encoded decimal
//      Serial.println(incomingByte, HEX);  // print as an ASCII-encoded hexadecimal
//      Serial.println(incomingByte, OCT);  // print as an ASCII-encoded octal
//      Serial.println(incomingByte, BIN);  // print as an ASCII-encoded binary
    }
  } else {
    for (int inByte = 0; inByte < 256; inByte++) {
      // print in console AND send to p5
      Serial.println(inByte);
    }
  }
  delay(10);
}

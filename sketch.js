function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	stroke(170);
}

function draw() {

	colorMode (RGB);
	background (204);

	//Neck
	strokeWeight (30);
	stroke(178, 163, 125);
	line (250, 285, 250, 345);

	//Arms
	strokeWeight (20);
	stroke(178, 163, 125);
	line (210, 310, 180, 400);
	line (290, 310, 320, 400);
	strokeWeight ();
	fill (168, 153, 115);
	ellipse (180, 400, 30);
	ellipse (320, 400, 30);

	//Wheel
	strokeWeight ();
	fill (21, 61, 104);
	ellipse (250, 465, 70, 70);
	fill (177, 201, 226, 170);
	ellipse (250, 465, 15, 50);
	fill (177, 201, 226, 170);
	ellipse (250, 465, 50, 15);
	fill (21, 61, 104);
	ellipse (250, 465, 10);

	//Body
	strokeWeight (5);
	stroke(21, 61, 104);
	fill (102, 147, 196);
	rect (200, 300, 100, 160);
	strokeWeight (3);
	fill (150, 177, 206);
	rect (220, 340, 60, 80);
	ellipse (270, 380, 3);

	//Hair
	strokeWeight (5);
	stroke(66, 40, 9);
	line (250, 240, 220, 190);
	line (250, 240, 280, 190);
	line (250, 240, 250, 180);
	line (250, 240, 235, 183);
	line (250, 240, 265, 183);

	//Head
	strokeWeight ();
	fill (188, 173, 135)
	ellipse (250, 240, 90, 90);

	//Eyes
	strokeWeight (6);
	stroke(104, 18, 18);
	fill (225);
	ellipse (290, 235, 25);
	ellipse (210, 235, 25);
	strokeWeight ();
	fill (50)
	ellipse (290, 240, 8);
	ellipse (210, 240, 8);

	//Eyebrows
	strokeWeight (10);
	stroke (66, 40, 9);
	line (197, 215, 227, 223);
	line (277, 220, 303, 220);

	//Mouth
	strokeWeight (2);
	stroke (114, 0, 0);
	fill (225);
	arc(250, 250, 40, 40, TWO_PI, PI);
	line (230, 250, 270, 250);

	line (238, 250, 238, 265);
	line (246, 250, 246, 262);
	line (254, 250, 254, 262);
	line (262, 250, 262, 265);
	line (238, 262, 262, 262);







}

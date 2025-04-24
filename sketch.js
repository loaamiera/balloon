function setup() {
  createCanvas(500, 512);
}
x1 = 4;
x2 = 0;
y1 = 200
y2 = 195
x3 = 4;
x4 = 30;
y3 = 200;
y4 = 185;
x5= 315
y5 = 190
x6 = 357
y6 = 240
x7 = 55;
y7 = 85;
x8 = 355;
y8 = 239;
x9 = 397
y9 = 280;
x10 = 389;
y10 =207;

function draw() {
  background(102, 255, 255);
  fill('red');
  circle(307, y5 - 90, 80);
  fill('black');
  circle(315, y5 + 40, 5);
  arc(305, y5, 19,19, 0, PI);
  line(295,y5-50,295, y5);
  line(315,y5 - 50,315, y5)
  line(295,y5,315,y5)
  line(295,y5,315,y5 - 50)
  line(315,y5,295, y5 - 50)
  line(315,y5,315, y5+40);
  fill('green');
  stroke('green');
  rect(1,400,225, 112);
  triangle(225,512,375, 512,225,400);
  fill('blue');
  quad(105, 510, 195, 510, 195, 399, 105, 399);
  stroke('brown');
  fill('brown')
  rect(1,250, 75, 150);
  rect(75,325, 50, 75);
  fill('purple');
  quad(4, 225, 4, 305, 74, 305, 74, 225);
  fill('brown');
  stroke('black');
  rect(150, 325, 75, 75);
  fill('pink');
  stroke('pink');
  rect(225,325,25,75);
  triangle(225,400,250,400,250,416)
  line(225,325, 225, 400)
  line(250,325, 250, 415)
  stroke('blue')
  fill('blue')
  triangle(225,325,250,325,250, 300)
  fill('yellow');
  stroke('black');
  rect(75,250, 90,75);
  fill('green');
  stroke('yellow');
  rect(115,325, 35, 75);
  fill('red');
  triangle(115,325,115,300,150, 325);
  stroke('orange');
  fill('orange');
  rect(-2,100, 75, 150);
  arc(0,100,145,115, PI/2,0);
  stroke('yellow');
  fill('yellow');
  strokeWeight('1');
  rect(7, 219, 67, 30)
  arc(40.25, 225, 68.5,45, PI, 0);
  stroke('blue');
  fill('blue');
  rect(35,210,25,30);
  fill('brown');
  stroke('brown');
  quad(412, 512, 500, 512, 500, 1, 412, 150);
  fill('red');
  triangle(412,150, 500, 150, 500, 1);
  stroke('brown');
  strokeWeight('2.5');
  line(4, 250, 4, 120);
  line(x1,y1,x2,y2)
  line(x3,y3,x4,y4)
  line(x1,y1 - 20 ,x2,y2 - 25)
  line(x3,y3 - 20,x4,y4 - 40);
  fill('green');
  quad(498, 200, 428, 200, 428, 300, 498, 300);
  fill('blue');
  quad(448, 510, 498, 510, 498, 300, 448, 300);
  stroke('orange');
  fill('red');
  rect(377, 400, 35, 175);
  stroke('black');
  fill('green');
  rect(413,325,40,75);
  fill('yellow');
  rect(x6,y6,x7,y7);
  stroke('yellow');
  fill('blue');
  circle(x9, y9, 20);
  stroke('pink');
  fill('pink');
  quad(x8, y8, x8 + 32, y8 - 30, x8 + 57, y8 - 30, x8 + 57,y8);
  fill('yellow');
  stroke('black');
  quad(413, 240, 443, 240, 443, 207, 413, 207);
  fill('black');
  quad(x10, y10, x10 + 23, y10, x10+23, y10 -29, x10, y10 -29);
}

  function mousePressed() {
    if (mouseIsPressed) {
      x1 -= 1;
      x2 -= 1;
      y1 += 4;
      y2 += 4;
      x3 += 3;
      x4 += 4;
      y3 += 5;
      y4 += 6;
      y5 -= 5;
      x6 -= 4;
      y6 += 5;
      x7 -= 4;
      y7 += 5;
      x8 -= 3;
      y8 += 3;
      if (y9 <= 390) {
      x9 -= 2*(-1)**(y8);
      y9 += 2;}
      if (y10 <= 380) {
        x10 -= 0.05;
        y10 += 1.5;
      }
  }}


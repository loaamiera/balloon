function setup() {
  createCanvas(500, 512);
}

function draw() {
  background(102, 255, 255);
  fill('red');
  circle(307, 100, 80);
  fill('black');
  circle(315, 230, 5);
  arc(305, 190, 19,19, 0, PI);
  line(295,140,295, 190);
  line(315,140,315, 190);
  line(295,190,315, 190);
  line(295,190,315, 140);
  line(315,190,295, 140);
  line(315,190,315, 230);
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
  stroke('brown');
  strokeWeight('2.5');
  line(4, 250, 4, 120);
  line(4,200,0,195);
  line(4,200,30,185);
  line(4,180,0,170);
  line(4,180,30,145);
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
  rect(357,240,55,85);
  stroke('yellow');
  fill('blue');
  circle(397, 280, 20);
  stroke('pink');
  fill('pink');
  quad(355, 239, 387, 209, 412, 209, 412,239,);
  fill('yellow');
  stroke('black');
  quad(413, 240, 443, 240, 443, 207, 413, 207);
  fill('black');
  quad(389, 207, 412, 207, 412, 178, 389, 178);
  
  noLoop()
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var x = 25; x <= 375 ; x= x+50){
    for ( var y = 25; y <=375 ; y=y+50){
    ellipse(x,y,50,50);
    }
  }
}

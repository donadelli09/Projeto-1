function setup() {
    createCanvas(400, 400);
    background("red");
  }
  
  function draw() {
   
    fill("black");
    stroke("white");
       if(mouseIsPressed)
       rect(mouseX, mouseY, 20, 20);
  }
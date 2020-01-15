function setup() {
    let myCanvas = createCanvas(100, 100);
    myCanvas.parent("myContainer");
}


function draw() {
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -10;
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = "black";
    background(200);
    ellipse(width/2, height/2, 50, 50);
}
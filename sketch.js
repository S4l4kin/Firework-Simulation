var fireworks = [];
var gravity;
function setup() {
    createCanvas(windowWidth, -25 + windowHeight, P2D);
    colorMode(HSB);
    gravity = createVector(0,0.2);
    stroke('white');
    strokeWeight(4);
    background(0);
    slider = createSlider(0 ,1, 0.1, 0.01);
}
function draw() {
    //background(0, 0, 0);
    colorMode(RGB);

    background(0, 0, 0, 50);
    if (random(1) < slider.value()) {

    fireworks.push(new Firework());
    }
    for (var i = 0; i < fireworks.length; i++) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].trail == null && fireworks[i].particles.length === 0) {
            fireworks.splice(i, 1);
        }
    }
}
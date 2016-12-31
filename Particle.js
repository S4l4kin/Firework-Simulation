

function Particle(x, y, hu, trail) {
    this.trail = trail;
    this.hu = hu;
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2,2), -random(8,16));
    this.acc = createVector(0, 0);
    this.lifespan = 255;
    this.update = function () {
        if (!this.trail) {
            this.vel.mult(0.85);
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    this.applyForce = function (force) {
        this.acc.add(force);
    }
    this.show = function () {

        colorMode(HSB)
        stroke(hu, 255, 255, this.lifespan);
        point(this.pos.x, this.pos.y);
    }
}

function Firework() {
    this.hu = random(255);
    this.trail = new Particle(random(width), height, this.hu, true);
    this.particles = [];

    this.update = function () {
        if (this.trail) {
           this.trail.applyForce(gravity);
           this.trail.update();

        
            if (this.trail.vel.y >= 0 && this.trail.trail == true) {
                for (var i = 0; i < random(30, 100); i++) {
                    var p = new Particle(this.trail.pos.x, this.trail.pos.y, this.hu, false);

                    p.vel = p5.Vector.random2D();
                    p.vel.mult(random(2,12))
                    this.particles.push(p)

                }
                this.trail = null;
            }
        }
        for (var i = this.particles.length-1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if (this.particles[i].lifespan <= 0) {

                this.particles.splice(i, 1);
            }
        }

    }
    this.show = function () {
        if (this.trail) {
            this.trail.show();
        }
        for (var i = this.particles.length - 1; i >= 0; i--) {

            this.particles[i].show();

        }
    }
}
"use strict";
var L092_goldenerHerbstClasses;
(function (L092_goldenerHerbstClasses) {
    class Cloud {
        position;
        velocity;
        type;
        size;
        constructor(_position) {
            console.log("Clouds constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L092_goldenerHerbstClasses.Vector((Math.random() * L092_goldenerHerbstClasses.crc2.canvas.width), 100);
            this.velocity = new L092_goldenerHerbstClasses.Vector(10, 0);
            this.type = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
        }
        draw() {
            let nParticles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L092_goldenerHerbstClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L092_goldenerHerbstClasses.crc2.save();
            L092_goldenerHerbstClasses.crc2.translate(this.position.x, this.position.y);
            L092_goldenerHerbstClasses.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L092_goldenerHerbstClasses.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = -(Math.random() * this.size);
                L092_goldenerHerbstClasses.crc2.translate(x, y);
                L092_goldenerHerbstClasses.crc2.fill(particle);
                L092_goldenerHerbstClasses.crc2.restore();
            }
            L092_goldenerHerbstClasses.crc2.restore();
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += L092_goldenerHerbstClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L092_goldenerHerbstClasses.crc2.canvas.height;
            if (this.position.x > L092_goldenerHerbstClasses.crc2.canvas.width)
                this.position.x -= L092_goldenerHerbstClasses.crc2.canvas.width;
            if (this.position.y > L092_goldenerHerbstClasses.crc2.canvas.height)
                this.position.y -= L092_goldenerHerbstClasses.crc2.canvas.height;
        }
    }
    L092_goldenerHerbstClasses.Cloud = Cloud;
})(L092_goldenerHerbstClasses || (L092_goldenerHerbstClasses = {}));
//# sourceMappingURL=clouds.js.map
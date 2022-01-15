"use strict";
var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    class Cloud extends L10_2_GoldenerHerbstPolymorphie.Moveable {
        type;
        size;
        constructor() {
            super();
            console.log("Clouds constructor");
            this.position = new L10_2_GoldenerHerbstPolymorphie.Vector((Math.random() * L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width), 100);
            this.velocity = new L10_2_GoldenerHerbstPolymorphie.Vector(10, 0);
            this.type = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
        }
        draw() {
            let nParticles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L10_2_GoldenerHerbstPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2_GoldenerHerbstPolymorphie.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = -(Math.random() * this.size);
                L10_2_GoldenerHerbstPolymorphie.crc2.translate(x, y);
                L10_2_GoldenerHerbstPolymorphie.crc2.fill(particle);
                L10_2_GoldenerHerbstPolymorphie.crc2.restore();
            }
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
        }
    }
    L10_2_GoldenerHerbstPolymorphie.Cloud = Cloud;
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=clouds.js.map
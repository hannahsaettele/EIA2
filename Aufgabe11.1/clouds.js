"use strict";
var L11_1_GoldenerHerbstAdvanced;
(function (L11_1_GoldenerHerbstAdvanced) {
    class Cloud extends L11_1_GoldenerHerbstAdvanced.Moveable {
        type;
        size;
        constructor() {
            super();
            console.log("Clouds constructor");
            this.position = new L11_1_GoldenerHerbstAdvanced.Vector((Math.random() * L11_1_GoldenerHerbstAdvanced.crc2.canvas.width), 100);
            this.velocity = new L11_1_GoldenerHerbstAdvanced.Vector(10, 0);
            this.type = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
        }
        draw() {
            let nParticles = 20;
            let radiusParticle = 50;
            let particle = new Path2D();
            let gradient = L11_1_GoldenerHerbstAdvanced.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L11_1_GoldenerHerbstAdvanced.crc2.save();
            L11_1_GoldenerHerbstAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_1_GoldenerHerbstAdvanced.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_1_GoldenerHerbstAdvanced.crc2.save();
                let x = (Math.random() - 0.5) * this.size;
                let y = -(Math.random() * this.size);
                L11_1_GoldenerHerbstAdvanced.crc2.translate(x, y);
                L11_1_GoldenerHerbstAdvanced.crc2.fill(particle);
                L11_1_GoldenerHerbstAdvanced.crc2.restore();
            }
            L11_1_GoldenerHerbstAdvanced.crc2.restore();
        }
    }
    L11_1_GoldenerHerbstAdvanced.Cloud = Cloud;
})(L11_1_GoldenerHerbstAdvanced || (L11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=clouds.js.map
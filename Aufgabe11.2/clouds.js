"use strict";
var L11_2_GoldenerHerbstFinale;
(function (L11_2_GoldenerHerbstFinale) {
    class Cloud extends L11_2_GoldenerHerbstFinale.Moveable {
        constructor() {
            super();
            console.log("Clouds constructor");
            this.position = new L11_2_GoldenerHerbstFinale.Vector((Math.random() * L11_2_GoldenerHerbstFinale.crc2.canvas.width), 100);
            this.velocity = new L11_2_GoldenerHerbstFinale.Vector(5, 0);
        }
        draw() {
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.save();
            L11_2_GoldenerHerbstFinale.crc2.translate(this.position.x, this.position.y);
            L11_2_GoldenerHerbstFinale.crc2.ellipse(0, 0, 75, 50, Math.PI * 0, 0, 2 * Math.PI);
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "white";
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.restore();
            L11_2_GoldenerHerbstFinale.crc2.resetTransform();
        }
    }
    L11_2_GoldenerHerbstFinale.Cloud = Cloud;
})(L11_2_GoldenerHerbstFinale || (L11_2_GoldenerHerbstFinale = {}));
//# sourceMappingURL=clouds.js.map
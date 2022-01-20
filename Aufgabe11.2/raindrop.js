"use strict";
var L11_2_GoldenerHerbstFinale;
(function (L11_2_GoldenerHerbstFinale) {
    class Raindrop extends L11_2_GoldenerHerbstFinale.Moveable {
        constructor() {
            super();
            this.position = new L11_2_GoldenerHerbstFinale.Vector(L11_2_GoldenerHerbstFinale.rainCloud.position.x, L11_2_GoldenerHerbstFinale.rainCloud.position.y);
            this.velocity = new L11_2_GoldenerHerbstFinale.Vector(0, 5);
        }
        draw() {
            L11_2_GoldenerHerbstFinale.crc2.save();
            L11_2_GoldenerHerbstFinale.crc2.translate(this.position.x, this.position.y);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "lightblue";
            L11_2_GoldenerHerbstFinale.crc2.fill(); //fläche vs stroke style ist die umrandung
            L11_2_GoldenerHerbstFinale.crc2.restore();
        }
        move() {
            this.position.add(this.velocity);
        }
    }
    L11_2_GoldenerHerbstFinale.Raindrop = Raindrop;
})(L11_2_GoldenerHerbstFinale || (L11_2_GoldenerHerbstFinale = {}));
//# sourceMappingURL=raindrop.js.map
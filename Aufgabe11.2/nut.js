"use strict";
var L11_2_GoldenerHerbstFinale;
(function (L11_2_GoldenerHerbstFinale) {
    class Nut {
        position;
        constructor() {
            //
        }
        draw() {
            L11_2_GoldenerHerbstFinale.crc2.save();
            L11_2_GoldenerHerbstFinale.crc2.translate(this.position.x, this.position.y);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "brown";
            L11_2_GoldenerHerbstFinale.crc2.fill(); //fläche vs stroke style ist die umrandung
            L11_2_GoldenerHerbstFinale.crc2.restore();
        }
    }
    L11_2_GoldenerHerbstFinale.Nut = Nut;
})(L11_2_GoldenerHerbstFinale || (L11_2_GoldenerHerbstFinale = {}));
//# sourceMappingURL=nut.js.map
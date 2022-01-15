"use strict";
var L11_1_GoldenerHerbstAdvanced;
(function (L11_1_GoldenerHerbstAdvanced) {
    class Nut {
        position;
        constructor() {
            //
        }
        draw() {
            L11_1_GoldenerHerbstAdvanced.crc2.save();
            L11_1_GoldenerHerbstAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_1_GoldenerHerbstAdvanced.crc2.beginPath();
            L11_1_GoldenerHerbstAdvanced.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            L11_1_GoldenerHerbstAdvanced.crc2.closePath();
            L11_1_GoldenerHerbstAdvanced.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbstAdvanced.crc2.fill(); //fläche vs stroke style ist die umrandung
            L11_1_GoldenerHerbstAdvanced.crc2.restore();
        }
    }
    L11_1_GoldenerHerbstAdvanced.Nut = Nut;
})(L11_1_GoldenerHerbstAdvanced || (L11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=nut.js.map
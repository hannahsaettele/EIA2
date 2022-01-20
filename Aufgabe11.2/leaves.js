"use strict";
var L11_2_GoldenerHerbstFinale;
(function (L11_2_GoldenerHerbstFinale) {
    class Leave extends L11_2_GoldenerHerbstFinale.Moveable {
        type;
        size;
        constructor() {
            super();
            console.log("Leaves constructor");
            this.position = new L11_2_GoldenerHerbstFinale.Vector((Math.random() * L11_2_GoldenerHerbstFinale.crc2.canvas.width), (Math.random() * L11_2_GoldenerHerbstFinale.crc2.canvas.height));
            this.velocity = new L11_2_GoldenerHerbstFinale.Vector(5, 2);
            this.type = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
        }
        draw() {
            L11_2_GoldenerHerbstFinale.crc2.save();
            L11_2_GoldenerHerbstFinale.crc2.translate(this.position.x, this.position.y);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.rect(-1, -20, 2, 20);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "purple";
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.moveTo(0, -50);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(10, -40);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(35, -35);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(10, -30);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(25, -15);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(0, -20);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(-25, -15);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(-10, -30);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(-35, -35);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(-10, -40);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(0, -50);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.restore();
        }
    }
    L11_2_GoldenerHerbstFinale.Leave = Leave;
})(L11_2_GoldenerHerbstFinale || (L11_2_GoldenerHerbstFinale = {}));
//# sourceMappingURL=leaves.js.map
"use strict";
var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    class Leave extends L10_2_GoldenerHerbstPolymorphie.Moveable {
        type;
        size;
        constructor() {
            super();
            console.log("Leaves constructor");
            this.position = new L10_2_GoldenerHerbstPolymorphie.Vector((Math.random() * L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width), (Math.random() * L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height));
            this.velocity = new L10_2_GoldenerHerbstPolymorphie.Vector(5, 2);
            this.type = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
        }
        draw() {
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.rect(-1, -20, 2, 20);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "purple";
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.moveTo(0, -50);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(10, -40);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(35, -35);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(10, -30);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(25, -15);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(0, -20);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(-25, -15);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(-10, -30);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(-35, -35);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(-10, -40);
            L10_2_GoldenerHerbstPolymorphie.crc2.lineTo(0, -50);
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
        }
    }
    L10_2_GoldenerHerbstPolymorphie.Leave = Leave;
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=leaves.js.map
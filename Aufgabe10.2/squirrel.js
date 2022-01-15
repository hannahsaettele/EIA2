"use strict";
var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    class Squirreli extends L10_2_GoldenerHerbstPolymorphie.Moveable {
        size;
        constructor() {
            super();
            console.log("Squirelli constructor");
            this.position = new L10_2_GoldenerHerbstPolymorphie.Vector(0, 0);
            this.velocity = new L10_2_GoldenerHerbstPolymorphie.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        draw() {
            L10_2_GoldenerHerbstPolymorphie.crc2.save();
            L10_2_GoldenerHerbstPolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_2_GoldenerHerbstPolymorphie.crc2.fillStyle = "brown";
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            L10_2_GoldenerHerbstPolymorphie.crc2.beginPath();
            L10_2_GoldenerHerbstPolymorphie.crc2.closePath();
            L10_2_GoldenerHerbstPolymorphie.crc2.fill();
            L10_2_GoldenerHerbstPolymorphie.crc2.restore();
        }
    }
    L10_2_GoldenerHerbstPolymorphie.Squirreli = Squirreli;
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=squirrel.js.map
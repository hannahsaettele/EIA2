"use strict";
var L10_2_GoldenerHerbstPolymorphie;
(function (L10_2_GoldenerHerbstPolymorphie) {
    class Moveable {
        position;
        velocity;
        constructor() {
            //
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height;
            if (this.position.x > L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width)
                this.position.x -= L10_2_GoldenerHerbstPolymorphie.crc2.canvas.width;
            if (this.position.y > L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height)
                this.position.y -= L10_2_GoldenerHerbstPolymorphie.crc2.canvas.height;
        }
    }
    L10_2_GoldenerHerbstPolymorphie.Moveable = Moveable;
})(L10_2_GoldenerHerbstPolymorphie || (L10_2_GoldenerHerbstPolymorphie = {}));
//# sourceMappingURL=moveable.js.map
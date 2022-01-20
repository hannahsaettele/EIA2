"use strict";
var L11_2_GoldenerHerbstFinale;
(function (L11_2_GoldenerHerbstFinale) {
    class Moveable {
        position;
        velocity;
        constructor() {
            //
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += L11_2_GoldenerHerbstFinale.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_2_GoldenerHerbstFinale.crc2.canvas.height;
            if (this.position.x > L11_2_GoldenerHerbstFinale.crc2.canvas.width)
                this.position.x -= L11_2_GoldenerHerbstFinale.crc2.canvas.width;
            if (this.position.y > L11_2_GoldenerHerbstFinale.crc2.canvas.height)
                this.position.y -= L11_2_GoldenerHerbstFinale.crc2.canvas.height;
        }
    }
    L11_2_GoldenerHerbstFinale.Moveable = Moveable;
})(L11_2_GoldenerHerbstFinale || (L11_2_GoldenerHerbstFinale = {}));
//# sourceMappingURL=moveable.js.map
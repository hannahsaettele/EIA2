"use strict";
var L11_1_GoldenerHerbstAdvanced;
(function (L11_1_GoldenerHerbstAdvanced) {
    class Moveable {
        position;
        velocity;
        constructor() {
            //
        }
        move() {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += L11_1_GoldenerHerbstAdvanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_1_GoldenerHerbstAdvanced.crc2.canvas.height;
            if (this.position.x > L11_1_GoldenerHerbstAdvanced.crc2.canvas.width)
                this.position.x -= L11_1_GoldenerHerbstAdvanced.crc2.canvas.width;
            if (this.position.y > L11_1_GoldenerHerbstAdvanced.crc2.canvas.height)
                this.position.y -= L11_1_GoldenerHerbstAdvanced.crc2.canvas.height;
        }
    }
    L11_1_GoldenerHerbstAdvanced.Moveable = Moveable;
})(L11_1_GoldenerHerbstAdvanced || (L11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=moveable.js.map
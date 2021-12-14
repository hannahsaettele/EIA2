"use strict";
var L092_goldenerHerbstClasses;
(function (L092_goldenerHerbstClasses) {
    class Squirreli {
        position;
        velocity;
        type;
        size;
        constructor(_size, _position) {
            console.log("Squirelli constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L092_goldenerHerbstClasses.Vector(0, 0);
            this.velocity = new L092_goldenerHerbstClasses.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
    }
    L092_goldenerHerbstClasses.Squirreli = Squirreli;
    /*drawSquirreli(): void {

        crc2.save();
        crc2.translate(100, 500);

        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.beginPath();
        crc2.closePath();

        crc2.fill();
        crc2.restore();
    }*/
})(L092_goldenerHerbstClasses || (L092_goldenerHerbstClasses = {}));
//# sourceMappingURL=squirrel.js.map
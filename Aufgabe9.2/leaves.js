"use strict";
var L092_goldenerHerbstClasses;
(function (L092_goldenerHerbstClasses) {
    class Leave {
        position;
        velocity;
        type;
        size;
        constructor(_size, _position) {
            console.log("Leave constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L092_goldenerHerbstClasses.Vector(0, 0);
            this.velocity = new L092_goldenerHerbstClasses.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        drawLeave() {
            L092_goldenerHerbstClasses.crc2.save();
            L092_goldenerHerbstClasses.crc2.translate(100, 500);
            L092_goldenerHerbstClasses.crc2.beginPath();
            L092_goldenerHerbstClasses.crc2.rect(-1, -20, 2, 20);
            L092_goldenerHerbstClasses.crc2.closePath();
            L092_goldenerHerbstClasses.crc2.fillStyle = "purple";
            L092_goldenerHerbstClasses.crc2.fill();
            L092_goldenerHerbstClasses.crc2.beginPath();
            L092_goldenerHerbstClasses.crc2.moveTo(0, -50);
            L092_goldenerHerbstClasses.crc2.lineTo(10, -40);
            L092_goldenerHerbstClasses.crc2.lineTo(35, -35);
            L092_goldenerHerbstClasses.crc2.lineTo(10, -30);
            L092_goldenerHerbstClasses.crc2.lineTo(25, -15);
            L092_goldenerHerbstClasses.crc2.lineTo(0, -20);
            L092_goldenerHerbstClasses.crc2.lineTo(-25, -15);
            L092_goldenerHerbstClasses.crc2.lineTo(-10, -30);
            L092_goldenerHerbstClasses.crc2.lineTo(-35, -35);
            L092_goldenerHerbstClasses.crc2.lineTo(-10, -40);
            L092_goldenerHerbstClasses.crc2.lineTo(0, -50);
            L092_goldenerHerbstClasses.crc2.closePath();
            L092_goldenerHerbstClasses.crc2.fill();
            L092_goldenerHerbstClasses.crc2.restore();
        }
    }
    L092_goldenerHerbstClasses.Leave = Leave;
})(L092_goldenerHerbstClasses || (L092_goldenerHerbstClasses = {}));
//# sourceMappingURL=leaves.js.map
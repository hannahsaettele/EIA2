"use strict";
var L11_2_GoldenerHerbstFinale;
(function (L11_2_GoldenerHerbstFinale) {
    class Squirreli extends L11_2_GoldenerHerbstFinale.Moveable {
        size;
        constructor() {
            super();
            console.log("Squirelli constructor");
            this.position = new L11_2_GoldenerHerbstFinale.Vector(450, 500);
            this.velocity = new L11_2_GoldenerHerbstFinale.Vector(0, 0);
            //this.velocity.random(1, 1);
        }
        draw() {
            L11_2_GoldenerHerbstFinale.crc2.save();
            L11_2_GoldenerHerbstFinale.crc2.translate(this.position.x, this.position.y);
            L11_2_GoldenerHerbstFinale.crc2.scale(0.3, 0.3);
            if (this.velocity.x > 0)
                L11_2_GoldenerHerbstFinale.crc2.scale(-1, 1);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "rgb(165;42;42)";
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.translate(-40, -75);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "rgb(165;42;42)";
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.translate(-10, -10);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "white";
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "rgb(165;42;42)";
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.translate(-10, -10);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.moveTo(0, 0);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(20, -40);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(40, 0);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "rgb(165;42;42)";
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.translate(10, 80);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "rgb(165;42;42)";
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.translate(40, 70);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.ellipse(0, 0, 20, 50, Math.PI * 1.5, 0, 2 * Math.PI);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "e093a0";
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.translate(50, 0);
            L11_2_GoldenerHerbstFinale.crc2.beginPath();
            L11_2_GoldenerHerbstFinale.crc2.moveTo(0, 0);
            L11_2_GoldenerHerbstFinale.crc2.bezierCurveTo(50, 0, 100, -120, 150, -150);
            L11_2_GoldenerHerbstFinale.crc2.bezierCurveTo(-20, -220, 50, -80, 0, -20);
            L11_2_GoldenerHerbstFinale.crc2.closePath();
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = "rgb(122, 63, 0)";
            L11_2_GoldenerHerbstFinale.crc2.fill();
            L11_2_GoldenerHerbstFinale.crc2.restore();
        }
    }
    L11_2_GoldenerHerbstFinale.Squirreli = Squirreli;
})(L11_2_GoldenerHerbstFinale || (L11_2_GoldenerHerbstFinale = {}));
//# sourceMappingURL=squirrel.js.map
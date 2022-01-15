namespace L11_1_GoldenerHerbstAdvanced {

    export class Squirreli extends Moveable {
        size: number;


        constructor() {
            super();
            console.log("Squirelli constructor");

            this.position = new Vector(450, 500);

            this.velocity = new Vector(0, 0);
            //this.velocity.random(1, 1);
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(0.3, 0.3);

            if (this.velocity.x > 0)
            crc2.scale(-1, 1);

            crc2.beginPath();
            crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(165;42;42)";
            crc2.fill();

            crc2.translate(-40, -75);
            crc2.beginPath();
            crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(165;42;42)";
            crc2.fill();

            crc2.translate(-10, -10);
            crc2.beginPath();
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(165;42;42)";
            crc2.fill();

            crc2.translate(-10, -10);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(20, -40);
            crc2.lineTo(40, 0);
            crc2.closePath();
            crc2.fillStyle = "rgb(165;42;42)";
            crc2.fill();

            crc2.translate(10, 80);
            crc2.beginPath();
            crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(165;42;42)";
            crc2.fill();

            crc2.translate(40, 70);
            crc2.beginPath();
            crc2.ellipse(0, 0, 20, 50, Math.PI * 1.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "e093a0";
            crc2.fill();

            crc2.translate(50, 0);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(50, 0, 100, -120, 150, -150);
            crc2.bezierCurveTo(-20, -220, 50, -80, 0, -20);
            crc2.closePath();
            crc2.fillStyle = "rgb(122, 63, 0)";
            crc2.fill();

            crc2.restore();
        }
    }
}


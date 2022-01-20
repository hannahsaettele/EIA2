namespace L11_2_GoldenerHerbstFinale {

    export class Leave extends Moveable {

        type: number;
        size: number;


        constructor() {
            super();
            console.log("Leaves constructor");

            this.position = new Vector((Math.random() * crc2.canvas.width), (Math.random() * crc2.canvas.height));

            this.velocity = new Vector(5, 2);


            this.type = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
        }


        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.beginPath();
            crc2.rect(-1, -20, 2, 20);
            crc2.closePath();
            crc2.fillStyle = "purple";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(0, -50);
            crc2.lineTo(10, -40);
            crc2.lineTo(35, -35);
            crc2.lineTo(10, -30);
            crc2.lineTo(25, -15);
            crc2.lineTo(0, -20);
            crc2.lineTo(-25, -15);
            crc2.lineTo(-10, -30);
            crc2.lineTo(-35, -35);
            crc2.lineTo(-10, -40);
            crc2.lineTo(0, -50);
            crc2.closePath();

            crc2.fill();
            crc2.restore();
        }
    }
}

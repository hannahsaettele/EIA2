namespace L11_2_GoldenerHerbstFinale {


    export class Raindrop extends Moveable {

        constructor() {
            super();

            this.position = new Vector(rainCloud.position.x, rainCloud.position.y);
            this.velocity = new Vector(0, 5);

        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "lightblue";
            crc2.fill(); //fläche vs stroke style ist die umrandung
            crc2.restore();
        }

        move(): void {
            this.position.add(this.velocity);
        }

    }
}

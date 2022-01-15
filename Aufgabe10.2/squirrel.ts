namespace L10_2_GoldenerHerbstPolymorphie {

    export class Squirreli extends Moveable {
        size: number;


        constructor() {
            super();
            console.log("Squirelli constructor");

            this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "brown";
            crc2.fill();

            crc2.beginPath();
            crc2.closePath();

            crc2.fill();
            crc2.restore();
        }
    }
}


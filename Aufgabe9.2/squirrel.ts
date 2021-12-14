namespace L092_goldenerHerbstClasses {

    export class Squirreli {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;


        constructor(_size: number, _position?: Vector) {
            console.log("Squirelli constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
    }

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

}


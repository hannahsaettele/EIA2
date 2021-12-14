namespace L092_goldenerHerbstClasses {

    export class Leave {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;


        constructor(_position?: Vector) {
            console.log("Leaves constructor");

            if (_position)
                this.position = _position;
            else
                this.position = new Vector((Math.random() * crc2.canvas.width), 100);

            this.velocity = new Vector(10, 0);


            this.type = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
        }


        draw(): void {
            crc2.save();
            crc2.translate(100, 500);

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
        move(): void {
            this.position.add(this.velocity);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
}

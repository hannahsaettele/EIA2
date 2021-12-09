namespace L092_goldenerHerbstClasses {

    export class Leave {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;
    

    constructor(_size: number, _position ?: Vector) {
        console.log("Leave constructor");

        if (_position)
            this.position = _position;
        else
            this.position = new Vector(0, 0);

        this.velocity = new Vector(0, 0);
        this.velocity.random(100, 200);

        this.type = Math.floor(Math.random() * 4);
        this.size = _size;
    }


    drawLeave(): void {
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
}
}

namespace L11_1_GoldenerHerbstAdvanced {

    export class Nut {
        position: Vector;

        constructor() {
//
        }
        draw(): void {
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill(); //fläche vs stroke style ist die umrandung
        crc2.restore();
    }
    }
}
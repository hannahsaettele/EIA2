namespace L11_2_GoldenerHerbstFinale {

  export class Cloud extends Moveable {


    constructor() {
      super();
      console.log("Clouds constructor");

      this.position = new Vector((Math.random() * crc2.canvas.width), 100);
      this.velocity = new Vector(5, 0);

    }

    draw(): void {
      crc2.beginPath();
      crc2.save();
      crc2.translate(this.position.x, this.position.y);
      crc2.ellipse(0, 0, 75, 50, Math.PI * 0, 0, 2 * Math.PI);
      crc2.fillStyle = "lightblue";
      crc2.closePath();
      crc2.fill();
      crc2.restore();
      crc2.resetTransform();
    }
  }
}
namespace L11_1_GoldenerHerbstAdvanced {

    export class Cloud  extends Moveable {
        type: number;
        size: number;

        constructor() {
            super();
            console.log("Clouds constructor");

           
            this.position = new Vector((Math.random() * crc2.canvas.width), 100);
            this.velocity = new Vector(10, 0);


            this.type = Math.floor(Math.random() * 4);
            this.size = Math.random() * 3;
        }

        draw(): void {

            let nParticles: number = 20;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.size;
                let y: number = - (Math.random() * this.size);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }

    }
}
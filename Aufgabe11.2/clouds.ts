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

            crc2.fillStyle = "white";
           

            crc2.closePath();
            crc2.fill();
            crc2.restore();
            crc2.resetTransform();

        }

        /* public draw(): void {
           /*let nParticles: number = 30;
           let radiusParticle: number = 40;
           let particle: Path2D = new Path2D();
           let gradient: CanvasGradient = crc2.createRadialGradient(
             0,
             0,
             0,
             0,
             0,
             radiusParticle
           );
   
           let r1: number = 20;
           let r2: number = 50;
           let gradient: CanvasGradient = crc2.createRadialGradient(
             0,
             0,
             r1,
             0,
             0,
             r2
           );
       
           gradient.addColorStop(0, "hsl(184, 65%, 74%)");
           gradient.addColorStop(1, "hsl(261, 65%, 74%)");
           crc2.beginPath();
           crc2.save();
           crc2.translate(200, 225);
           crc2.fillStyle = gradient;
           crc2.arc(0, 0, r2, 0, Math.PI * 2);
           crc2.closePath();
           crc2.fill();
           crc2.restore();
           crc2.beginPath();
           crc2.save();
           crc2.translate(250, 200);
           crc2.fillStyle = gradient;
           crc2.arc(0, 0, r2, 0, Math.PI * 2);
           crc2.closePath();
           crc2.fill();
           crc2.restore();
           crc2.beginPath();
           crc2.save();
           crc2.translate(300, 225);
           crc2.fillStyle = gradient;
           crc2.arc(0, 0, r2, 0, Math.PI * 2);
           crc2.closePath();
           crc2.fill();
           crc2.restore();
           crc2.beginPath();
           crc2.save();
           crc2.translate(250, 225);
           crc2.fillStyle = gradient;
           crc2.arc(0, 0, r2, 0, Math.PI * 2);
           crc2.closePath();
           crc2.fill();
           crc2.restore();
     
     
           gradient.addColorStop(0, "hsl(184, 65%, 74%)");
           gradient.addColorStop(1, "hsl(261, 65%, 74%)");
           crc2.beginPath();
           crc2.save();
           crc2.translate(900, 225);
           crc2.fillStyle = gradient;
           crc2.arc(0, 0, r2, 0, Math.PI * 2);
           crc2.closePath();
           crc2.fill();
           crc2.restore();
           crc2.beginPath();
           crc2.save();
           crc2.translate(850, 200);
           crc2.fillStyle = gradient;
           crc2.arc(0, 0, r2, 0, Math.PI * 2);
           crc2.closePath();
           crc2.fill();
           crc2.restore();
           crc2.beginPath();
           crc2.save();
           crc2.translate(800, 225);
           crc2.fillStyle = gradient;
           crc2.arc(0, 0, r2, 0, Math.PI * 2);
           crc2.closePath();
           crc2.fill();
           crc2.restore();
           crc2.beginPath();
           crc2.save();
           crc2.translate(850, 225);
           crc2.fillStyle = gradient;
           crc2.arc(0, 0, r2, 0, Math.PI * 2);
           crc2.closePath();
           crc2.fill();
           crc2.restore();
           } */
    }
}  
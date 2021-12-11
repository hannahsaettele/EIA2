namespace L092_goldenerHerbstClasses {

    export class Cloud {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_position?: Vector) {
            console.log("Clouds constructor");

            if (_position)
                this.position = _position;
            else
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
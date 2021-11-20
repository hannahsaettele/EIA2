namespace Canvas {

    let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", hndLoad);

    function hndLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        console.log(canvas);

        crc2 = canvas.getContext("2d")!;
        console.log(crc2);

        for (let i: number = 0; i < 40; i++) {
            let x: number = Math.random() * 1 / 2 * innerWidth + 1 / 2 * innerWidth;
            let y: number = Math.random() * innerHeight;
            drawCircle(x, y, "pink", 50);
    
        }

        for (let i: number = 0; i < 10; i++) {
            let x: number = i * 50;
            let y: number = i * 50;
            let color: string = "#pink";
            
        
            drawCircle(x, y,  color, 10 + 0.5 * i);
            drawGradient(x, y);
        }

    
        function drawGradient(_x: number, _y: number): void {       
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 200);

            gradient.addColorStop(0, "blue");
            gradient.addColorStop(0.5, "pink");
            gradient.addColorStop(1, "red");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, 1200, 100);
            
    }

    }
    
    function drawCircle(_x: number, _y: number, _color: string, _size: number): void {
        crc2.beginPath();
        crc2.moveTo(2.1, 1);
        crc2.lineTo(2.1, 10);
        crc2.moveTo(4.5, 1);
        crc2.lineTo(4.5, 10);
        crc2.moveTo(7.5, 1);
        crc2.lineTo(10.5, 10);
       
        crc2.arc(_x, _y, _size, 0, 2 * Math.PI);
        crc2.closePath();

        crc2.strokeStyle = _color;
        crc2.lineWidth = 5;
        crc2.stroke();
        
      
        
    }

}

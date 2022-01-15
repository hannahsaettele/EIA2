namespace L11_1_GoldenerHerbstAdvanced {
    /*Aufgabe: L10.2 Goldener Herbst, Hannah Sättele, Matrikelnr. 268473, erstellt.: 09.12.21; 
    */

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;
    let nuts: Nut[] = [];
    let moveables: Moveable[] = [];

    let background: ImageData;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;
        let streetWidthBack: number = 100;
        let streetWidthFront: number = 600;
        let treesOffsetBack: number = 15;
        let treesOffsetFront: number = 100;

        let posMountains: Vector = new Vector(0, horizon);
        let posStreet: Vector = new Vector(crc2.canvas.width / 2, horizon);
        let posTreesStart: Vector = new Vector(posStreet.x - streetWidthBack / 2 - treesOffsetBack, horizon);
        let posTreesEnd: Vector = new Vector(crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, crc2.canvas.height);

        drawBackground();
        drawSun(new Vector(100, 75));


        //drawStreet(posStreet, streetWidthBack, streetWidthFront);
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        posTreesStart.x = posStreet.x + streetWidthBack / 2 + treesOffsetBack;
        posTreesEnd.x = posTreesEnd.x + streetWidthFront + 2 * treesOffsetFront;
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        drawFirs();
        background = crc2.getImageData(0, 0, canvas.width, canvas.height);
        createObjects();
        window.setInterval(animate, 20);

        window.addEventListener("click", createNut);
    }

    function createNut(_event: MouseEvent): void {
        let oneNut: Nut = new Nut;
        oneNut.position = new Vector(_event.x, _event.y);
        nuts.push(oneNut);

    }

    function createObjects(): void {

        for (let i: number = 0; i < 3; i++) {
            let oneCloud: Cloud = new Cloud();
            oneCloud.draw();
            moveables.push(oneCloud); //array
        }

        for (let i: number = 0; i < 3; i++) {
            let oneLeave: Leave = new Leave();
            oneLeave.draw();
            moveables.push(oneLeave);
        }

        for (let i: number = 0; i < 3; i++) {
            let oneSquirelli: Squirreli = new Squirreli();
            oneSquirelli.draw();
            moveables.push(oneSquirelli); //array
        }


    }

    function animate(): void { //oder auch update genannt

        //putImageData einfügen hintergrund malen
        crc2.putImageData(background, 0, 0);

        if (nuts.length > 0) { //malt nur eine Nuss wenn es eine gibt/geklickt wurde 
            for (let oneNut of nuts) {
                oneNut.draw();
            }
        }
      
        for (let oneObject of moveables) {
            oneObject.move();
            oneObject.draw();
        }
        

    }

    function drawBackground(): void {
        console.log("Background");
        crc2.save();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }




    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);


        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawTrees(_nTrees: number, _posStart: Vector, _posEnd: Vector, _minScale: number, _stepPos: number, _stepScale: number): void {
        console.log("Trees", _posStart, _posEnd);
        let transform: DOMMatrix = crc2.getTransform();
        let step: Vector = new Vector(
            (_posEnd.x - _posStart.x) * _stepPos,
            (_posEnd.y - _posStart.y) * _stepPos);

        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);

        do {
            drawTree();

            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);

        } while (--_nTrees > 0);

        crc2.setTransform(transform);
    }

    function drawTree(): void {
        console.log("Tree");
        let nBranches: number = 50;
        let maxRadius: number = 60;
        let branch: Path2D = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);

        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -200);

        crc2.save();
        crc2.translate(0, -120);

        do {
            let y: number = Math.random() * 350;
            let size: number = 1 - y / 700;
            let x: number = (Math.random() - 0.5) * 2 * maxRadius;

            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);

            let colorAngle: number = 120 - Math.random() * 60;
            let color: string = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";

            crc2.fillStyle = color;
            crc2.fill(branch);

            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }

    //mehrere Tannen
    function drawFirs(): void {
        let nFirs: number = 15;
        let x: number = 1;
        let y: number = 2;

        for (let drawn: number = 0; drawn < nFirs; drawn++) {

            crc2.save();
            x = (Math.random() - 0.5);

            x += x + Math.round(Math.random());
            crc2.translate(x, y);
            drawFir();
            crc2.restore();
        }
    }
    // Tanne erstellen in Zusammenarbeit im Praktikum mit MD
    function drawFir(): void {
        crc2.save();
        crc2.beginPath();
        // Stamm erstellen
        crc2.translate(500, 500);
        crc2.moveTo(0, 0);
        crc2.rect(-5, -20, 10, 20);  // beginn links oben rect = rectle = Rehteck
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();

        //Tanne erstellen
        crc2.beginPath();
        crc2.moveTo(0, -90);
        crc2.lineTo(-23, -45);
        crc2.lineTo(-15, -50);
        crc2.lineTo(-27, -27);
        crc2.lineTo(-20, -32);
        crc2.lineTo(-35, -7);
        crc2.lineTo(0, -18);

        crc2.moveTo(0, -90);
        crc2.lineTo(23, -45);
        crc2.lineTo(15, -50);
        crc2.lineTo(27, -27);
        crc2.lineTo(20, -32);
        crc2.lineTo(35, -7);
        crc2.lineTo(0, -18);
        crc2.fillStyle = "darkgreen";
        crc2.fill();


        let nFir: number = 50;
        let fir: Path2D = new Path2D();


        for (let drawn: number = 0; drawn < nFir; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5);
            let y: number = - (Math.random() - 2);
            crc2.translate(x, y);
            crc2.fill(fir);
            crc2.restore();
        }
        crc2.restore();

    }
}
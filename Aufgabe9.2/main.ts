namespace L092_goldenerHerbstClasses {
    /*Aufgabe: L09.2 Goldener Herbst, Hannah Sättele, Matrikelnr. 268473, erstellt.: 09.12.21; 
    Quellen: Praktikum: mit Alida & Inverted Classroom*/

    /* Die Abhängigkeiten im Klassendiagramm stimmen nicht, sind teilweise falsch herum.
    Lt. Aufgabenstellung sollten auch Eichhörnchen die Fähigkeit haben sich zu bewegen. 
    Der Objektknoten in handleLoad sollte zu "install load listener" um die Variablen global und nicht nur in der Funktion anzulegen.
     Der herumschewebende Objektknoten würde nicht ausgeführt werden, da er weder mit Start- noch Endknoten verknüpft ist.
     createObjects wird nirgends aufgerufen und würde vollständig funktionieren, wenn die Anzahl der Wolken und Blätter gleich ist,
     was zwei Parameter an der Stelle unnötig machen würde; zudem fehlt die Bedingung für die Spaltung nach links
     und rechts beim Entscheidungsknoten, da dort vermutlich keine sein sollte, es sei denn zwei seperate Schleifen sind gedacht;
     index++ ist eine Aktion und gehört in einen Aktionsknoten. animate wird auch nie aufgerufen,
     stattdessen fehlt die vom interval aufgerufen update-Funktion. Das Anlegen von oneCloud und oneLeave erzeugt ein neues Objekt,
     gehört in einen Objektknoten und ist keine Bedingung; dafür fehlt direkt danach eine passende Bedingung nichts zu animieren;
     cloud ist in animate nicht mehr bekannt, sondern oneCloud, diese kann gemalt und bewegt werden –
     gleiches für leave (engl. Verlassen, leaf = Blatt); die Reihenfolge währe andersum schöner, erst bewegen, dann malen;
     das Hintergrundbild wieder zu verwenden um zu vermeiden, dass frühere Positionen der Elemente sichtbar sind,
     sollte auch berücksichtig werden. Die Parameter der Constructor passen im AD nicht mit den Klassendiagrammen überein.
     Warum sollen erst die Parameterwerte bei den Constructorn benutzt werden,
     wenn direkt darauf andere Werte zugeschrieben werden (this.position = _position -> position to 0, 0)?
     Gibt es bei Leaf.draw je nach type unterschiede in allen Aktionen – würde nur im path vermuten?
     Dann reicht es den Entscheidungsknoten darum zu positionieren. Was ist composition component in den move-Methoden?
     Bei der Umsetzung entstehen zwar drei Wolken, ich sehe aber keine Blätter; kann selber nicht ausmachen, warum,
     weil die Darstellung im debugger spinnt. ImageData schon mal als Kommentar in animate; wenn das Bild vor der Erstellung
     der beweglichen Elemente in einer globalen Variable gespeichert wird, kann es an der Stelle wieder auf den Canvas 
     projeziert werden bevor die weiteren Elemente erneut gemalt werden. Bei Cloud wird schönerweise ein optionaler Parameter verwendet.
     Die size von cloud wird für die Positionen der Partikel verwendet, die scheinen aber entweder zu nah beieinander 
     (size ist als einziger Multiplikator zu klein für x und y) oder der Radius ist zu groß,
     statt 20 Partikel kann ich pro Wolke nur ein großes erkennen. Leider gibts keine Eichhörnchen :( Dranbleiben (MD) */


    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    let clouds: Cloud[] = [];
    let leaves: Leave[] = [];


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
        //drawSquirreli();
        //drawFirCone();
        createObjects();
        window.setInterval(animate, 20);
    }

    function createObjects(): void {

        for (let i: number = 0; i < 3; i++) {
            let oneCloud: Cloud = new Cloud();
            oneCloud.draw();
            clouds.push(oneCloud); //array
        }

        for (let i: number = 0; i < 3; i++) {
            let oneLeave: Leave = new Leave();
            oneLeave.draw();
            leaves.push(oneLeave);
        }

    }

    function animate(): void {
        //putImageData einfügen hintergrund malen
        for (let oneCloud of clouds) {
            oneCloud.move();
            oneCloud.draw();
        }
        for (let oneLeave of leaves) {
            oneLeave.move();
            oneLeave.draw();
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
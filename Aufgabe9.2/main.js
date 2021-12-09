"use strict";
var L092_goldenerHerbstClasses;
(function (L092_goldenerHerbstClasses) {
    /*Aufgabe: L09.2 Goldener Herbst, Hannah Sättele, Matrikelnr. 268473, erstellt.: 09.12.21;
    Quellen: Praktikum: mit Alida & Inverted Classroom*/
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    let clouds = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L092_goldenerHerbstClasses.crc2 = canvas.getContext("2d");
        let horizon = L092_goldenerHerbstClasses.crc2.canvas.height * golden;
        let streetWidthBack = 100;
        let streetWidthFront = 600;
        let treesOffsetBack = 15;
        let treesOffsetFront = 100;
        let posMountains = new L092_goldenerHerbstClasses.Vector(0, horizon);
        let posStreet = new L092_goldenerHerbstClasses.Vector(L092_goldenerHerbstClasses.crc2.canvas.width / 2, horizon);
        let posTreesStart = new L092_goldenerHerbstClasses.Vector(posStreet.x - streetWidthBack / 2 - treesOffsetBack, horizon);
        let posTreesEnd = new L092_goldenerHerbstClasses.Vector(L092_goldenerHerbstClasses.crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, L092_goldenerHerbstClasses.crc2.canvas.height);
        drawBackground();
        drawSun(new L092_goldenerHerbstClasses.Vector(100, 75));
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
    function createObjects() {
        for (let i = 0; i < 3; i++) {
            let oneCloud = new L092_goldenerHerbstClasses.Cloud();
            oneCloud.draw();
            clouds.push(oneCloud); //array
        }
        //Blätter erstellen
        /* for (let i: number = 0; i < 3; i++) {
             let oneLeave: Leave = new Leave();
             oneLeave.drawLeave();
         }*/
    }
    function animate() {
        //putImageData einfügen hintergrund malen
        for (let oneCloud of clouds) {
            oneCloud.move();
            oneCloud.draw();
        }
    }
    function drawBackground() {
        console.log("Background");
        L092_goldenerHerbstClasses.crc2.save();
        let gradient = L092_goldenerHerbstClasses.crc2.createLinearGradient(0, 0, 0, L092_goldenerHerbstClasses.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L092_goldenerHerbstClasses.crc2.fillStyle = gradient;
        L092_goldenerHerbstClasses.crc2.fillRect(0, 0, L092_goldenerHerbstClasses.crc2.canvas.width, L092_goldenerHerbstClasses.crc2.canvas.height);
        L092_goldenerHerbstClasses.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = L092_goldenerHerbstClasses.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L092_goldenerHerbstClasses.crc2.save();
        L092_goldenerHerbstClasses.crc2.translate(_position.x, _position.y);
        L092_goldenerHerbstClasses.crc2.fillStyle = gradient;
        L092_goldenerHerbstClasses.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L092_goldenerHerbstClasses.crc2.fill();
        L092_goldenerHerbstClasses.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L092_goldenerHerbstClasses.crc2.save();
        L092_goldenerHerbstClasses.crc2.translate(_position.x, _position.y);
        L092_goldenerHerbstClasses.crc2.beginPath();
        L092_goldenerHerbstClasses.crc2.moveTo(0, 0);
        L092_goldenerHerbstClasses.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L092_goldenerHerbstClasses.crc2.lineTo(x, y);
        } while (x < L092_goldenerHerbstClasses.crc2.canvas.width);
        L092_goldenerHerbstClasses.crc2.lineTo(x, 0);
        let gradient = L092_goldenerHerbstClasses.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L092_goldenerHerbstClasses.crc2.fillStyle = gradient;
        L092_goldenerHerbstClasses.crc2.fill();
        L092_goldenerHerbstClasses.crc2.closePath();
        L092_goldenerHerbstClasses.crc2.restore();
    }
    function drawTrees(_nTrees, _posStart, _posEnd, _minScale, _stepPos, _stepScale) {
        console.log("Trees", _posStart, _posEnd);
        let transform = L092_goldenerHerbstClasses.crc2.getTransform();
        let step = new L092_goldenerHerbstClasses.Vector((_posEnd.x - _posStart.x) * _stepPos, (_posEnd.y - _posStart.y) * _stepPos);
        L092_goldenerHerbstClasses.crc2.translate(_posStart.x, _posStart.y);
        L092_goldenerHerbstClasses.crc2.scale(_minScale, _minScale);
        do {
            drawTree();
            L092_goldenerHerbstClasses.crc2.translate(step.x, step.y);
            L092_goldenerHerbstClasses.crc2.scale(_stepScale, _stepScale);
        } while (--_nTrees > 0);
        L092_goldenerHerbstClasses.crc2.setTransform(transform);
    }
    function drawTree() {
        console.log("Tree");
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        L092_goldenerHerbstClasses.crc2.fillStyle = "brown";
        L092_goldenerHerbstClasses.crc2.fillRect(0, 0, 20, -200);
        L092_goldenerHerbstClasses.crc2.save();
        L092_goldenerHerbstClasses.crc2.translate(0, -120);
        do {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            L092_goldenerHerbstClasses.crc2.save();
            L092_goldenerHerbstClasses.crc2.translate(0, -y);
            L092_goldenerHerbstClasses.crc2.scale(size, size);
            L092_goldenerHerbstClasses.crc2.translate(x, 0);
            let colorAngle = 120 - Math.random() * 60;
            let color = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";
            L092_goldenerHerbstClasses.crc2.fillStyle = color;
            L092_goldenerHerbstClasses.crc2.fill(branch);
            L092_goldenerHerbstClasses.crc2.restore();
        } while (--nBranches > 0);
        L092_goldenerHerbstClasses.crc2.restore();
    }
    //mehrere Tannen
    function drawFirs() {
        let nFirs = 15;
        let x = 1;
        let y = 2;
        for (let drawn = 0; drawn < nFirs; drawn++) {
            L092_goldenerHerbstClasses.crc2.save();
            x = (Math.random() - 0.5);
            x += x + Math.round(Math.random());
            L092_goldenerHerbstClasses.crc2.translate(x, y);
            drawFir();
            L092_goldenerHerbstClasses.crc2.restore();
        }
    }
    // Tanne erstellen in Zusammenarbeit im Praktikum mit MD
    function drawFir() {
        L092_goldenerHerbstClasses.crc2.save();
        L092_goldenerHerbstClasses.crc2.beginPath();
        // Stamm erstellen
        L092_goldenerHerbstClasses.crc2.translate(500, 500);
        L092_goldenerHerbstClasses.crc2.moveTo(0, 0);
        L092_goldenerHerbstClasses.crc2.rect(-5, -20, 10, 20); // beginn links oben rect = rectle = Rehteck
        L092_goldenerHerbstClasses.crc2.closePath();
        L092_goldenerHerbstClasses.crc2.fillStyle = "brown";
        L092_goldenerHerbstClasses.crc2.fill();
        //Tanne erstellen
        L092_goldenerHerbstClasses.crc2.beginPath();
        L092_goldenerHerbstClasses.crc2.moveTo(0, -90);
        L092_goldenerHerbstClasses.crc2.lineTo(-23, -45);
        L092_goldenerHerbstClasses.crc2.lineTo(-15, -50);
        L092_goldenerHerbstClasses.crc2.lineTo(-27, -27);
        L092_goldenerHerbstClasses.crc2.lineTo(-20, -32);
        L092_goldenerHerbstClasses.crc2.lineTo(-35, -7);
        L092_goldenerHerbstClasses.crc2.lineTo(0, -18);
        L092_goldenerHerbstClasses.crc2.moveTo(0, -90);
        L092_goldenerHerbstClasses.crc2.lineTo(23, -45);
        L092_goldenerHerbstClasses.crc2.lineTo(15, -50);
        L092_goldenerHerbstClasses.crc2.lineTo(27, -27);
        L092_goldenerHerbstClasses.crc2.lineTo(20, -32);
        L092_goldenerHerbstClasses.crc2.lineTo(35, -7);
        L092_goldenerHerbstClasses.crc2.lineTo(0, -18);
        L092_goldenerHerbstClasses.crc2.fillStyle = "darkgreen";
        L092_goldenerHerbstClasses.crc2.fill();
        let nFir = 50;
        let fir = new Path2D();
        for (let drawn = 0; drawn < nFir; drawn++) {
            L092_goldenerHerbstClasses.crc2.save();
            let x = (Math.random() - 0.5);
            let y = -(Math.random() - 2);
            L092_goldenerHerbstClasses.crc2.translate(x, y);
            L092_goldenerHerbstClasses.crc2.fill(fir);
            L092_goldenerHerbstClasses.crc2.restore();
        }
        L092_goldenerHerbstClasses.crc2.restore();
    }
    /*Eichhörnchen
    function drawSquirreli(): void {
        console.log();
    }

    //Tannenzapfen
    function drawFirCone {
    }
*/
})(L092_goldenerHerbstClasses || (L092_goldenerHerbstClasses = {}));
//# sourceMappingURL=main.js.map
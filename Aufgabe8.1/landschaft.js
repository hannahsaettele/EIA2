"use strict";
var L081_goldenerHerbst;
(function (L081_goldenerHerbst) {
    /*Aufgabe: L08.1 Goldener Herbst, Hannah Sättele, Matrikelnr. 268473, erstellt.: 29.11.21;
    Quellen: Praktikum: mit MD & Inverted Classroom*/
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        let streetWidthBack = 100;
        let streetWidthFront = 600;
        let treesOffsetBack = 15;
        let treesOffsetFront = 100;
        let posMountains = { x: 0, y: horizon };
        let posStreet = { x: crc2.canvas.width / 2, y: horizon };
        let posTreesStart = { x: posStreet.x - streetWidthBack / 2 - treesOffsetBack, y: horizon };
        let posTreesEnd = { x: crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, y: crc2.canvas.height };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        //drawStreet(posStreet, streetWidthBack, streetWidthFront);
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        posTreesStart.x = posStreet.x + streetWidthBack / 2 + treesOffsetBack;
        posTreesEnd.x = posTreesEnd.x + streetWidthFront + 2 * treesOffsetFront;
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        drawFirs();
        //drawSquirreli();
        drawLeave();
        //drawFirCone();
    }
    function drawBackground() {
        console.log("Background");
        crc2.save();
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawTrees(_nTrees, _posStart, _posEnd, _minScale, _stepPos, _stepScale) {
        console.log("Trees", _posStart, _posEnd);
        let transform = crc2.getTransform();
        let step = {
            x: (_posEnd.x - _posStart.x) * _stepPos,
            y: (_posEnd.y - _posStart.y) * _stepPos
        };
        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);
        do {
            drawTree();
            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);
        } while (--_nTrees > 0);
        crc2.setTransform(transform);
    }
    function drawTree() {
        console.log("Tree");
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -200);
        crc2.save();
        crc2.translate(0, -120);
        do {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);
            let colorAngle = 120 - Math.random() * 60;
            let color = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";
            crc2.fillStyle = color;
            crc2.fill(branch);
            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }
    //mehrere Tannen
    function drawFirs() {
        let nFirs = 15;
        let x = 1;
        let y = 2;
        for (let drawn = 0; drawn < nFirs; drawn++) {
            crc2.save();
            x = (Math.random() - 0.5);
            x += x + Math.round(Math.random());
            crc2.translate(x, y);
            drawFir();
            crc2.restore();
        }
    }
    // Tanne erstellen in Zusammenarbeit im Praktikum mit MD
    function drawFir() {
        crc2.save();
        crc2.beginPath();
        // Stamm erstellen
        crc2.translate(500, 500);
        crc2.moveTo(0, 0);
        crc2.rect(-5, -20, 10, 20); // beginn links oben rect = rectle = Rehteck
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
        let nFir = 50;
        let fir = new Path2D();
        for (let drawn = 0; drawn < nFir; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5);
            let y = -(Math.random() - 2);
            crc2.translate(x, y);
            crc2.fill(fir);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawLeave() {
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
    /*Eichhörnchen
    function drawSquirreli(): void {
        console.log();
    }

    //Tannenzapfen
    function drawFirCone {
    }
*/
})(L081_goldenerHerbst || (L081_goldenerHerbst = {}));
//# sourceMappingURL=landschaft.js.map
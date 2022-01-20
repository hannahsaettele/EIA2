"use strict";
var L11_2_GoldenerHerbstFinale;
(function (L11_2_GoldenerHerbstFinale) {
    /*Aufgabe: L11.2 Goldener Herbst Final, Hannah Sättele, Matrikelnr. 268473, erstellt.: 20.01.22;
    */
    window.addEventListener("load", handleLoad);
    let golden = 0.62;
    let nuts = [];
    let moveables = [];
    let background;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_2_GoldenerHerbstFinale.crc2 = canvas.getContext("2d");
        let horizon = L11_2_GoldenerHerbstFinale.crc2.canvas.height * golden;
        let streetWidthBack = 100;
        let streetWidthFront = 600;
        let treesOffsetBack = 15;
        let treesOffsetFront = 100;
        let posMountains = new L11_2_GoldenerHerbstFinale.Vector(0, horizon);
        let posStreet = new L11_2_GoldenerHerbstFinale.Vector(L11_2_GoldenerHerbstFinale.crc2.canvas.width / 2, horizon);
        let posTreesStart = new L11_2_GoldenerHerbstFinale.Vector(posStreet.x - streetWidthBack / 2 - treesOffsetBack, horizon);
        let posTreesEnd = new L11_2_GoldenerHerbstFinale.Vector(L11_2_GoldenerHerbstFinale.crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, L11_2_GoldenerHerbstFinale.crc2.canvas.height);
        drawBackground();
        drawSun(new L11_2_GoldenerHerbstFinale.Vector(100, 75));
        //drawStreet(posStreet, streetWidthBack, streetWidthFront);
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 150, "grey", "lightgrey");
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        posTreesStart.x = posStreet.x + streetWidthBack / 2 + treesOffsetBack;
        posTreesEnd.x = posTreesEnd.x + streetWidthFront + 2 * treesOffsetFront;
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        drawFirs();
        background = L11_2_GoldenerHerbstFinale.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createObjects();
        window.setInterval(animate, 20);
        window.addEventListener("click", createExtras);
    }
    function createExtras(_event) {
        if (_event.y > L11_2_GoldenerHerbstFinale.crc2.canvas.height * golden) {
            let oneNut = new L11_2_GoldenerHerbstFinale.Nut;
            oneNut.position = new L11_2_GoldenerHerbstFinale.Vector(_event.x, _event.y);
            nuts.push(oneNut);
        }
        else {
            createRaindrop();
            window.setTimeout(createRaindrop, 100);
            window.setTimeout(createRaindrop, 200);
        }
    }
    function createRaindrop() {
        let oneRaindrop = new L11_2_GoldenerHerbstFinale.Raindrop;
        moveables.push(oneRaindrop);
    }
    function createObjects() {
        L11_2_GoldenerHerbstFinale.rainCloud = new L11_2_GoldenerHerbstFinale.Cloud();
        moveables.push(L11_2_GoldenerHerbstFinale.rainCloud);
        for (let i = 0; i < 3; i++) {
            let oneCloud = new L11_2_GoldenerHerbstFinale.Cloud();
            moveables.push(oneCloud); //array
            let oneLeave = new L11_2_GoldenerHerbstFinale.Leave();
            moveables.push(oneLeave);
            let oneSquirelli = new L11_2_GoldenerHerbstFinale.Squirreli();
            moveables.push(oneSquirelli); //array
        }
    }
    function animate() {
        //putImageData einfügen hintergrund malen
        L11_2_GoldenerHerbstFinale.crc2.putImageData(background, 0, 0);
        if (nuts.length > 0) {
            for (let oneNut of nuts) {
                oneNut.draw();
            }
        }
        for (let oneObject of moveables) {
            oneObject.move();
            oneObject.draw();
        }
    }
    function drawBackground() {
        console.log("Background");
        L11_2_GoldenerHerbstFinale.crc2.save();
        let gradient = L11_2_GoldenerHerbstFinale.crc2.createLinearGradient(0, 0, 0, L11_2_GoldenerHerbstFinale.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L11_2_GoldenerHerbstFinale.crc2.fillStyle = gradient;
        L11_2_GoldenerHerbstFinale.crc2.fillRect(0, 0, L11_2_GoldenerHerbstFinale.crc2.canvas.width, L11_2_GoldenerHerbstFinale.crc2.canvas.height);
        L11_2_GoldenerHerbstFinale.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 150;
        let gradient = L11_2_GoldenerHerbstFinale.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        L11_2_GoldenerHerbstFinale.crc2.save();
        L11_2_GoldenerHerbstFinale.crc2.translate(_position.x, _position.y);
        L11_2_GoldenerHerbstFinale.crc2.fillStyle = gradient;
        L11_2_GoldenerHerbstFinale.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_2_GoldenerHerbstFinale.crc2.fill();
        L11_2_GoldenerHerbstFinale.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11_2_GoldenerHerbstFinale.crc2.save();
        L11_2_GoldenerHerbstFinale.crc2.translate(_position.x, _position.y);
        L11_2_GoldenerHerbstFinale.crc2.beginPath();
        L11_2_GoldenerHerbstFinale.crc2.moveTo(0, 0);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_2_GoldenerHerbstFinale.crc2.lineTo(x, y);
        } while (x < L11_2_GoldenerHerbstFinale.crc2.canvas.width);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(x, 0);
        let gradient = L11_2_GoldenerHerbstFinale.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11_2_GoldenerHerbstFinale.crc2.fillStyle = gradient;
        L11_2_GoldenerHerbstFinale.crc2.fill();
        L11_2_GoldenerHerbstFinale.crc2.closePath();
        L11_2_GoldenerHerbstFinale.crc2.restore();
    }
    function drawTrees(_nTrees, _posStart, _posEnd, _minScale, _stepPos, _stepScale) {
        console.log("Trees", _posStart, _posEnd);
        let transform = L11_2_GoldenerHerbstFinale.crc2.getTransform();
        let step = new L11_2_GoldenerHerbstFinale.Vector((_posEnd.x - _posStart.x) * _stepPos, (_posEnd.y - _posStart.y) * _stepPos);
        L11_2_GoldenerHerbstFinale.crc2.translate(_posStart.x, _posStart.y);
        L11_2_GoldenerHerbstFinale.crc2.scale(_minScale, _minScale);
        do {
            drawTree();
            L11_2_GoldenerHerbstFinale.crc2.translate(step.x, step.y);
            L11_2_GoldenerHerbstFinale.crc2.scale(_stepScale, _stepScale);
        } while (--_nTrees > 0);
        L11_2_GoldenerHerbstFinale.crc2.setTransform(transform);
    }
    function drawTree() {
        console.log("Tree");
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        L11_2_GoldenerHerbstFinale.crc2.fillStyle = "brown";
        L11_2_GoldenerHerbstFinale.crc2.fillRect(0, 0, 20, -200);
        L11_2_GoldenerHerbstFinale.crc2.save();
        L11_2_GoldenerHerbstFinale.crc2.translate(0, -120);
        do {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            L11_2_GoldenerHerbstFinale.crc2.save();
            L11_2_GoldenerHerbstFinale.crc2.translate(0, -y);
            L11_2_GoldenerHerbstFinale.crc2.scale(size, size);
            L11_2_GoldenerHerbstFinale.crc2.translate(x, 0);
            let colorAngle = 120 - Math.random() * 60;
            let color = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";
            L11_2_GoldenerHerbstFinale.crc2.fillStyle = color;
            L11_2_GoldenerHerbstFinale.crc2.fill(branch);
            L11_2_GoldenerHerbstFinale.crc2.restore();
        } while (--nBranches > 0);
        L11_2_GoldenerHerbstFinale.crc2.restore();
    }
    //mehrere Tannen
    function drawFirs() {
        let nFirs = 15;
        let x = 1;
        let y = 2;
        for (let drawn = 0; drawn < nFirs; drawn++) {
            L11_2_GoldenerHerbstFinale.crc2.save();
            x = (Math.random() - 0.5);
            x += x + Math.round(Math.random());
            L11_2_GoldenerHerbstFinale.crc2.translate(x, y);
            drawFir();
            L11_2_GoldenerHerbstFinale.crc2.restore();
        }
    }
    // Tanne erstellen in Zusammenarbeit im Praktikum mit MD
    function drawFir() {
        L11_2_GoldenerHerbstFinale.crc2.save();
        L11_2_GoldenerHerbstFinale.crc2.beginPath();
        // Stamm erstellen
        L11_2_GoldenerHerbstFinale.crc2.translate(500, 500);
        L11_2_GoldenerHerbstFinale.crc2.moveTo(0, 0);
        L11_2_GoldenerHerbstFinale.crc2.rect(-5, -20, 10, 20); // beginn links oben rect = rectle = Rehteck
        L11_2_GoldenerHerbstFinale.crc2.closePath();
        L11_2_GoldenerHerbstFinale.crc2.fillStyle = "brown";
        L11_2_GoldenerHerbstFinale.crc2.fill();
        //Tanne erstellen
        L11_2_GoldenerHerbstFinale.crc2.beginPath();
        L11_2_GoldenerHerbstFinale.crc2.moveTo(0, -90);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(-23, -45);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(-15, -50);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(-27, -27);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(-20, -32);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(-35, -7);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(0, -18);
        L11_2_GoldenerHerbstFinale.crc2.moveTo(0, -90);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(23, -45);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(15, -50);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(27, -27);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(20, -32);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(35, -7);
        L11_2_GoldenerHerbstFinale.crc2.lineTo(0, -18);
        L11_2_GoldenerHerbstFinale.crc2.fillStyle = "darkgreen";
        L11_2_GoldenerHerbstFinale.crc2.fill();
        let nFir = 50;
        let fir = new Path2D();
        for (let drawn = 0; drawn < nFir; drawn++) {
            L11_2_GoldenerHerbstFinale.crc2.save();
            let x = (Math.random() - 0.5);
            let y = -(Math.random() - 2);
            L11_2_GoldenerHerbstFinale.crc2.translate(x, y);
            L11_2_GoldenerHerbstFinale.crc2.fill(fir);
            L11_2_GoldenerHerbstFinale.crc2.restore();
        }
        L11_2_GoldenerHerbstFinale.crc2.restore();
    }
})(L11_2_GoldenerHerbstFinale || (L11_2_GoldenerHerbstFinale = {}));
//# sourceMappingURL=main.js.map
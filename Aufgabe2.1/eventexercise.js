var L02_Load;
(function (L02_Load) {
    // leider habe ich den Fehler nicht gefunden, weshalb meine html jetzt nicht mehr funktioniert
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mouse move", setInfoBox);
        document.getElementById(".div0").addEventListener("click", logInfo);
        document.getElementById(".div1").addEventListener("click", logInfo);
        document.getElementById(".div0").addEventListener("keyup", logInfo);
        document.querySelector(".div1").addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        var xPosition = _event.clientX;
        var yPosition = _event.clientY;
        var span = document.getElementById("span");
        span.innerHTML = "x position:" + xPosition + "y position" + yPosition;
        span.style.left = xPosition + "px";
        span.style.top = yPosition + "px";
    }
    function logInfo(_event) {
        console.log(_event);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("TypeEvent: " + _event.type);
    }
})(L02_Load || (L02_Load = {}));
//# sourceMappingURL=eventexercise.js.map
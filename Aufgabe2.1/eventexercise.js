"use strict";
var L02_Load;
(function (L02_Load) {
    window.addEventListener("load", handleLoad);
    const span = document.querySelector("#span0");
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let xPosition = _event.clientX;
        let yPosition = _event.clientY;
        span.style.left = xPosition.toString() + "px";
        span.style.top = yPosition.toString() + "px";
        span.innerHTML = "x position:" + xPosition.toString() + "y position" + yPosition.toString();
    }
    function logInfo(_event) {
        console.log(_event);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("TypeEvent: " + _event.type);
    }
})(L02_Load || (L02_Load = {}));
//# sourceMappingURL=eventexercise.js.map
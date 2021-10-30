var L02_Load;
(function (L02_Load) {
    window.addEventListener("load", handleLoad);
    var div0;
    var div1;
    var span0;
    var xPosition;
    var yPosition;
    function handleLoad(_event) {
        document.addEventListener("mouse move", setInfoBox);
        document.querySelector(".div0").addEventListener("click", logInfo);
        document.querySelector(".div1").addEventListener("click", logInfo);
        document.querySelector(".div0").addEventListener("keyup", logInfo);
        document.querySelector(".div1").addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        xPosition = _event.x;
        yPosition = _event.y;
        document.getElementById("span0").innerHTML = "Position X: " + xPosition + "Position y" + yPosition;
        document.getElementById("span0").style.left = _event.x + "px";
        document.getElementById("span0").style.top = _event.y + "px";
        span0.style.left = xPosition + "px";
        span0.style.top = yPosition + "px";
    }
    function logInfo(_event) {
        console.log(_event);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("TypeEvent: " + _event.type);
    }
})(L02_Load || (L02_Load = {}));
//# sourceMappingURL=eventexercise.js.map
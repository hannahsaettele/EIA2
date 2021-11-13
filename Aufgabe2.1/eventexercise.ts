namespace L02_Load {

    window.addEventListener("load", handleLoad);

    const span: HTMLElement = <HTMLElement>document.querySelector("#span0");

    function handleLoad(_event: Event): void {

        document.addEventListener("mousemove", setInfoBox);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }

    function setInfoBox(_event: MouseEvent): void {

        let xPosition: number = _event.clientX;
        let yPosition: number = _event.clientY;

        span.style.left = xPosition.toString() + "px";
        span.style.top = yPosition.toString() + "px";

        span.innerHTML = "x position:" + xPosition.toString() + "y position" + yPosition.toString();
    }

    function logInfo(_event: Event): void {
        console.log(_event);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("TypeEvent: " + _event.type);
    }
}

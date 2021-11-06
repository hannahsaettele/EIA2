    namespace L02_Load {
        
        window.addEventListener("load", handleLoad);
    
        function handleLoad(_event: Event): void {

            document.addEventListener("mouse move", setInfoBox);
            document.getElementById("div0").addEventListener("click", logInfo);
            document.getElementById("div1").addEventListener("click", logInfo);
            document.getElementById("div0").addEventListener("keyup", logInfo);
            document.querySelector("#div1").addEventListener("keyup", logInfo);
            document.body.addEventListener("click", logInfo);
            document.body.addEventListener("keyup", logInfo);
            document.addEventListener("click", logInfo);
            document.addEventListener("keyup", logInfo);
        }

        function setInfoBox(_event: MouseEvent): void {

            let xPosition: number = _event.clientX;
            let yPosition: number = _event.clientY;
            let span: HTMLElement = document.getElementById("span");

            span.innerHTML = "x position:" + xPosition + "y position" + yPosition;

            span.style.left = xPosition + "px";
            span.style.top = yPosition + "px";          
        }

        function logInfo (_event: Event): void {
            console.log(_event);
            console.log("Target: " + _event.target);
            console.log("CurrentTarget: " + _event.currentTarget);  
            console.log("TypeEvent: " + _event.type);
        }
    }
namespace SequenzmemoySettings {
    window.addEventListener("load", init);


    function init(_event: Event): void {
        console.log("Init");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");


        // Install listeners on form and fieldsets
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            form.addEventListener("change", handleChange);
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log();


        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);

        // Handling checkbox
        if (target.type == "checkbox")
            console.log("Checked: " + target.name + " = " + target.checked);

        // Slider response
        if (target.name == "Slider") {
             let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
             progress.value = parseFloat(target.value);
         }

        // Color response
        if (target.name == "Color") {
             let ouput: HTMLOutputElement = <HTMLOutputElement>document.querySelector("output");
             ouput.value = target.value;
         }
    }

    let formData: FormData = new FormData(document.forms[0]);
    console.log(formData.get(""));

    for (let entry of formData.entries()) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']" );
        console.log(item);
    }

}
        

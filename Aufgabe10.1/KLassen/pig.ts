namespace L10_1_OldMcDonaldsFarm {


    export class Pig extends Animal {

        constructor() {
           super("Liz", "trash", "1000g", "grunz", "Männchen");
        }

        doSpecialAction(): void {
            
        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name"); //zugrief auf id
        nameDiv.innerHTML += this.talent;

        }
    }

}




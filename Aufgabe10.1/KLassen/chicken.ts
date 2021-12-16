namespace L10_1_OldMcDonaldsFarm {


    export class Chicken extends Animal {

        constructor() {
           super("Gustaf", "grains", "500g", "kickeriki", "fliegen");
        }

        doSpecialAction(): void {
            
        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name"); //zugrief auf id
        nameDiv.innerHTML += this.talent;

        }
    }

}




namespace L10_1_OldMcDonaldsFarm {


    export class Horse extends Animal {

        constructor() {
           super("Schimmel", "carottes", "2000g", "ia", "springen");
        }

        doSpecialAction(): void {
            
        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name"); //zugrief auf id
        nameDiv.innerHTML += this.talent;

        }
    }

}




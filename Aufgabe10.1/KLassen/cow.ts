namespace L10_1_OldMcDonaldsFarm {


    export class Cow extends Animal {

        constructor() {
           super("Milka", "gras", "2000g", "muh", "xxx");
        }

        doSpecialAction(): void {
            
        let nameAnimalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(this.name); //zugrief auf id
        nameAnimalDiv.innerHTML += this.talent;

        }
    }

}




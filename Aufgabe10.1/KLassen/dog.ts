namespace L10_1_OldMcDonaldsFarm {


    export class Dog extends Animal {

        constructor() {
           super("Rocky", "meet", "500g", "woof", "Ballspielen");
        }

        doSpecialAction(): void {
            
        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name"); //zugrief auf id
        nameDiv.innerHTML += this.talent;

        }
    }

}




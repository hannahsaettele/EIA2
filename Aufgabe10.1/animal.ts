namespace L10_1_OldMcDonaldsFarm {

    export class Animal {
        name: string;
        food: string;
        amountFood: string;
        lyrics: string;
        talent: string;

    constructor (_name: string, _food: string, _amountFood: string, _lyrics: string, _talent: string) {
            console.log("constructor");
            this.name = _name;
            this.food = _food;
            this.amountFood = _amountFood;
            this.lyrics = _lyrics;
            this.talent = _talent;
    }

    eat(): void {

       // let _amountFood:;
        //this.food.substract(_amountFood);
        
    }

    sing (): void {

        let nameAnimalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(this.name);
        nameAnimalDiv.innerHTML += this.name;
        nameAnimalDiv.innerHTML += this.lyrics;
    }
  doSpecialAction(): void {
            
        let nameAnimalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(this.name); //zugrief auf id
        nameAnimalDiv.innerHTML += this.talent;

        }
}}

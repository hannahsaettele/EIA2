namespace L09_1_OldMcDonaldsFarm {

    export class Animal {
        type: string;
        name: string;
        food: string;
        amountFood: string;
        lyrics: string;

    constructor (_type: string, _name: string, _food: string, _amountFood: string, _lyrics: string) {
            console.log("constructor");
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.amountFood = _amountFood;
            this.lyrics = _lyrics;
    }

    eat(): void {

        let _amountFood: ;
        substract(_amountFood);
        
    }

    sing (): void {

        let nameDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("name");
        let lyricsDiv: HTMLDivElement = <HTMLDivElement>document.getElementById ("lyrics");
        nameDiv.innerHTML = this.name;
        lyricsDiv.innerHTML = this.lyrics;

    }
}
}

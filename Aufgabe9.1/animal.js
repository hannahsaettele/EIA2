"use strict";
var L09_1_OldMcDonaldsFarm;
(function (L09_1_OldMcDonaldsFarm) {
    class Animal {
        type;
        name;
        food;
        amountFood;
        lyrics;
        constructor(_type, _name, _food, _amountFood, _lyrics) {
            console.log("constructor");
            this.type = _type;
            this.name = _name;
            this.food = _food;
            this.amountFood = _amountFood;
            this.lyrics = _lyrics;
        }
        eat() {
            let _amountFood;
            substract(_amountFood);
        }
        sing() {
            let nameDiv = document.getElementById("name");
            let lyricsDiv = document.getElementById("lyrics");
            nameDiv.innerHTML = this.name;
            lyricsDiv.innerHTML = this.lyrics;
        }
    }
    L09_1_OldMcDonaldsFarm.Animal = Animal;
})(L09_1_OldMcDonaldsFarm || (L09_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=animal.js.map
"use strict";
var L10_1_OldMcDonaldsFarm;
(function (L10_1_OldMcDonaldsFarm) {
    class Animal {
        name;
        food;
        amountFood;
        lyrics;
        talent;
        constructor(_name, _food, _amountFood, _lyrics, _talent) {
            console.log("constructor");
            this.name = _name;
            this.food = _food;
            this.amountFood = _amountFood;
            this.lyrics = _lyrics;
            this.talent = _talent;
        }
        eat() {
            // let _amountFood:;
            //this.food.substract(_amountFood);
        }
        sing() {
            let nameAnimalDiv = document.getElementById(this.name);
            nameAnimalDiv.innerHTML += this.name;
            nameAnimalDiv.innerHTML += this.lyrics;
        }
        doSpecialAction() {
            let nameAnimalDiv = document.getElementById(this.name); //zugrief auf id
            nameAnimalDiv.innerHTML += this.talent;
        }
    }
    L10_1_OldMcDonaldsFarm.Animal = Animal;
})(L10_1_OldMcDonaldsFarm || (L10_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=animal.js.map
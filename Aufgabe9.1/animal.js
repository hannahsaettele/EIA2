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
    }
    L09_1_OldMcDonaldsFarm.Animal = Animal;
})(L09_1_OldMcDonaldsFarm || (L09_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=animal.js.map
"use strict";
var L10_1_OldMcDonaldsFarm;
(function (L10_1_OldMcDonaldsFarm) {
    class Chicken extends L10_1_OldMcDonaldsFarm.Animal {
        constructor() {
            super("Gustaf", "grains", "500g", "kickeriki", "fliegen");
        }
        doSpecialAction() {
            let nameDiv = document.getElementById("name"); //zugrief auf id
            nameDiv.innerHTML += this.talent;
        }
    }
    L10_1_OldMcDonaldsFarm.Chicken = Chicken;
})(L10_1_OldMcDonaldsFarm || (L10_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=chicken.js.map
"use strict";
var L10_1_OldMcDonaldsFarm;
(function (L10_1_OldMcDonaldsFarm) {
    class Horse extends L10_1_OldMcDonaldsFarm.Animal {
        constructor() {
            super("Schimmel", "carottes", "2000g", "ia", "springen");
        }
        doSpecialAction() {
            let nameDiv = document.getElementById("name"); //zugrief auf id
            nameDiv.innerHTML += this.talent;
        }
    }
    L10_1_OldMcDonaldsFarm.Horse = Horse;
})(L10_1_OldMcDonaldsFarm || (L10_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=horse.js.map
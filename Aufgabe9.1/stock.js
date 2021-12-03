"use strict";
var L09_1_OldMcDonaldsFarm;
(function (L09_1_OldMcDonaldsFarm) {
    class Stock {
        type;
        amount;
        constructor(_type, _amount) {
            this.type = _type;
        }
        substract(_substractionAmount) {
            this.amount = this.amount - _substractionAmount;
            this.showAmount();
        }
        showAmount() {
            let amountDiv = document.getElementById("amount");
            amountDiv.innerHTML = this.amount.toString();
        }
    }
    L09_1_OldMcDonaldsFarm.Stock = Stock;
})(L09_1_OldMcDonaldsFarm || (L09_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=stock.js.map
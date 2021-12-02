namespace L09_1_OldMcDonaldsFarm {

    export class Stock {
        type: string;
        amount: number;

        constructor (_type: string, _amount: number) {
        this.type = _type; 
        }

        substract (_substractionAmount: number): void {
            this.amount = this.amount - _substractionAmount;
            this.showAmount();
        }

        showAmount (): void {
            let amountDiv: HTMLDivElement;
            getElementbyId (this.type);
            amountDiv.innerHTML (this.amount);
        }


    }

}
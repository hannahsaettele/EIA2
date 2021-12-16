"use strict";
var L10_1_OldMcDonaldsFarm;
(function (L10_1_OldMcDonaldsFarm) {
    /*Aufgabe: L09.1 OldMcDonaldsFarm, Hannah Sättele, Matrikelnr. 268473, erstellt.: 02.12.21;
    Quellen: Praktikum: mit MD, AL, Liz & Inverted Classroom*/
    //Konzept austausch mit Liz H.
    window.addEventListener("load", handleLoad);
    let animals = [];
    let stock = [];
    let cow;
    let pig;
    let dog;
    let horse;
    let chicken;
    let trash;
    let meet;
    let carottes;
    let grains;
    function handleLoad(_event) {
        cow = new L10_1_OldMcDonaldsFarm.Cow();
        pig = new L10_1_OldMcDonaldsFarm.Pig();
        dog = new L10_1_OldMcDonaldsFarm.Dog();
        horse = new L10_1_OldMcDonaldsFarm.Horse();
        chicken = new L10_1_OldMcDonaldsFarm.Chicken();
        animals.push(cow, pig, chicken, dog, horse, chicken);
        L10_1_OldMcDonaldsFarm.gras = new L10_1_OldMcDonaldsFarm.Stock("gras", 10000);
        trash = new L10_1_OldMcDonaldsFarm.Stock("trash", 10000);
        meet = new L10_1_OldMcDonaldsFarm.Stock("meet", 10000);
        carottes = new L10_1_OldMcDonaldsFarm.Stock("carottes", 10000);
        grains = new L10_1_OldMcDonaldsFarm.Stock("grains", 10000);
        stock.push(L10_1_OldMcDonaldsFarm.gras, trash, meet, carottes, grains);
        simulateDay();
    }
    function simulateDay() {
        cow.eat();
        pig.eat();
        dog.eat();
        horse.eat();
        chicken.eat();
        cow.sing();
        pig.sing();
        dog.sing();
        horse.sing();
        chicken.sing();
        pig.sing();
        cow.doSpecialAction();
        pig.doSpecialAction();
        dog.doSpecialAction();
        horse.doSpecialAction();
        chicken.doSpecialAction();
        pig.doSpecialAction();
    }
})(L10_1_OldMcDonaldsFarm || (L10_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=farm.js.map
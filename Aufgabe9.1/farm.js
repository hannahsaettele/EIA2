"use strict";
var L09_1_OldMcDonaldsFarm;
(function (L09_1_OldMcDonaldsFarm) {
    /*Aufgabe: L09.1 OldMcDonaldsFarm, Hannah Sättele, Matrikelnr. 268473, erstellt.: 02.12.21;
    Quellen: Praktikum: mit MD, AL, Liz & Inverted Classroom*/
    window.addEventListener("load", handleLoad);
    let animals = [];
    let stock = [];
    console.log("start");
    let cow;
    let pig;
    let dog;
    let horse;
    let chicken;
    let gras;
    let trash;
    let meet;
    let carottes;
    let grains;
    function handleLoad(_event) {
        console.log("handleLoad");
        cow = new L09_1_OldMcDonaldsFarm.Animal("Cow", "Milka", "gras", "2000g", "Muh");
        pig = new L09_1_OldMcDonaldsFarm.Animal("Pig", "Liz", "trash", "1000g", "Grunz");
        dog = new L09_1_OldMcDonaldsFarm.Animal("Dog", "Rocky", "meet", "500g", "Woof");
        horse = new L09_1_OldMcDonaldsFarm.Animal("Horse", "Schimmel", "carottes", "2000g", "ia");
        chicken = new L09_1_OldMcDonaldsFarm.Animal("Chicken", "Gustaf", "grains", "500g", "kickeriki");
        animals.push(cow, pig, chicken, dog, horse, chicken);
        gras = new L09_1_OldMcDonaldsFarm.Stock("gras", 10000);
        trash = new L09_1_OldMcDonaldsFarm.Stock("trash", 10000);
        meet = new L09_1_OldMcDonaldsFarm.Stock("meet", 10000);
        carottes = new L09_1_OldMcDonaldsFarm.Stock("carottes", 10000);
        grains = new L09_1_OldMcDonaldsFarm.Stock("grains", 10000);
        stock.push(gras, trash, meet, carottes, grains);
    }
})(L09_1_OldMcDonaldsFarm || (L09_1_OldMcDonaldsFarm = {}));
//# sourceMappingURL=farm.js.map
namespace L10_1_OldMcDonaldsFarm {

    /*Aufgabe: L09.1 OldMcDonaldsFarm, Hannah Sättele, Matrikelnr. 268473, erstellt.: 02.12.21; 
    Quellen: Praktikum: mit MD, AL, Liz & Inverted Classroom*/
    //Konzept austausch mit Liz H.

    window.addEventListener("load", handleLoad); 

    let animals: Animal [] = [];
    let stock: Stock [] = [];
    
    let cow: Animal; 
    let pig: Animal;
    let dog: Animal;
    let horse: Animal; 
    let chicken: Animal;
    
    export let gras: Stock;
    let trash: Stock;
    let meet: Stock; 
    let carottes: Stock; 
    let grains: Stock;

    function handleLoad (_event: Event): void {

        cow =  new Cow ();
        pig = new Pig ();
        dog = new Dog ();
        horse = new Horse ();
        chicken = new Chicken ();
        animals.push (cow, pig, chicken, dog, horse, chicken);

        gras = new Stock ("gras", 10000);
        trash = new Stock ("trash", 10000);
        meet = new Stock ("meet", 10000 );
        carottes = new Stock ("carottes", 10000);
        grains = new Stock ("grains", 10000);
        stock.push (gras, trash, meet, carottes, grains);
        simulateDay();
    }

    function simulateDay (): void {

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
}

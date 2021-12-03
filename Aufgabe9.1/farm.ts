namespace L09_1_OldMcDonaldsFarm {

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
    
    let gras: Stock;
    let trash: Stock;
    let meet: Stock; 
    let carottes: Stock; 
    let grains: Stock;

    function handleLoad (_event: Event): void {

        cow =  new Animal ("Cow", "Milka", "gras", "2000g", "muh");
        pig = new Animal ("Pig", "Liz", "trash", "1000g", "grunz");
        dog = new Animal ("Dog", "Rocky", "meet", "500g", "woof");
        horse = new Animal ("Horse", "Schimmel", "carottes", "2000g", "ia");
        chicken = new Animal ("Chicken", "Gustaf", "grains", "500g", "kickeriki");
        animals.push (cow, pig, chicken, dog, horse, chicken);

        gras = new Stock ("gras", 10000);
        trash = new Stock ("trash", 10000);
        meet = new Stock ("meet", 10000 );
        carottes = new Stock ("carottes", 10000);
        grains = new Stock ("grains", 10000);
        stock.push (gras, trash, meet, carottes, grains);
        simulateDay();
    }

    function simulateDay (): void { // ich weiß for of Schleife wäre schöner, kommt vllt noch

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

    }
}

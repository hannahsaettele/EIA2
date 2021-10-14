namespace Aufgabe1 {

    let subject: string [] = ["Hannah", "Theo", "Liz", "Peter", "Gustaf", "Traude"];
    let verb: string [] = ["macht", "liebt", "studiert", "vergisst", "raucht", "lackiert"];
    let object: string [] = ["EIA", "den Abwasch", "das ganze Studium", "die E-Zigarette", "die goldenen Ringe", "die Fingernägel"]; 

//console.log (subject, verb, object);

    for (let i: number = subject.length ; i > 0; i-- ) {
        //console.log (i);
            getVerse(subject, verb, object);
            
        }
    function getVerse (_subject: string [],_verb: string [],_object: string []): string {
       let verse: string = "";
       let getSubject: number = Math.floor(Math.random() * subject.length); 
       let getVerb: number = Math.floor(Math.random() * verb.length);
       let getObject: number = Math.floor(Math.random() * object.length);

       verse = verse + _subject.splice(getSubject, 1) + " " + _verb.splice(getVerb, 1) + " " + _object.splice(getObject, 1);
        console.log(verse);

        return ("Alohomora");
        
}
    //console.log (getVerse);
    
}


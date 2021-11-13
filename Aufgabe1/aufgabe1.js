"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    let subject = ["Hannah", "Theo", "Liz", "Peter", "Gustaf", "Traude"];
    let verb = ["macht", "liebt", "studiert", "vergisst", "raucht", "lackiert"];
    let object = ["EIA", "den Abwasch", "das ganze Studium", "die E-Zigarette", "die goldenen Ringe", "die Fingernägel"];
    //console.log (subject, verb, object);
    for (let i = subject.length; i > 0; i--) {
        //console.log (i);
        getVerse(subject, verb, object);
    }
    function getVerse(_subject, _verb, _object) {
        let verse = "";
        let getSubject = Math.floor(Math.random() * subject.length);
        let getVerb = Math.floor(Math.random() * verb.length);
        let getObject = Math.floor(Math.random() * object.length);
        verse = verse + _subject.splice(getSubject, 1) + " " + _verb.splice(getVerb, 1) + " " + _object.splice(getObject, 1);
        console.log(verse);
        return ("Alohomora");
    }
    //console.log (getVerse);
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=aufgabe1.js.map
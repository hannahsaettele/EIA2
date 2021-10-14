var Aufgabe1;
(function (Aufgabe1) {
    var subject = ["Hannah", "Theo", "Liz", "Peter", "Gustaf", "Traude"];
    var verb = ["macht", "liebt", "studiert", "vergisst", "raucht", "lackiert"];
    var object = ["EIA", "den Abwasch", "das ganze Studium", "die E-Zigarette", "die goldenen Ringe", "die Fingernägel"];
    //console.log (subject, verb, object);
    for (var i = subject.length; i > 0; i--) {
        //console.log (i);
        getVerse(subject, verb, object);
    }
    function getVerse(_subject, _verb, _object) {
        var verse = "";
        var getSubject = Math.floor(Math.random() * subject.length);
        var getVerb = Math.floor(Math.random() * verb.length);
        var getObject = Math.floor(Math.random() * object.length);
        verse = verse + _subject.splice(getSubject, 1) + " " + _verb.splice(getVerb, 1) + " " + _object.splice(getObject, 1);
        console.log(verse);
        return ("Alohomora");
    }
    //console.log (getVerse);
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=aufgabe1.js.map
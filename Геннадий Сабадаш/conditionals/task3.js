let userName1 = +prompt("введите возраст Федота");
let userName2 = +prompt("введите возраст Митрофана");

if (userName1 > userName2) {
    let userName1Win = userName1 - userName2;
    alert ("Федот старше Митрофана на" +userName1Win);
} else if (userName2 > userName1) {
    let userName2Win = userName2 - userName1;
    alert ("Митрофан старше Федота на " +userName2Win);
} else if (userName1 === userName2) {
    alert ("Федот и Митрофан одного возраста");
} else {
    alert ('Errore');
}

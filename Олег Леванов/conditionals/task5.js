// Создать программу в которой сравнивается возраст 
//  двух человек (Федота и Митрофана).
// Если возраст Федота больше чем возраст Митрофана, 
//  то должно выводится сообщение, в котором указана 
//  разница в возрасте: «Федот старше Митрофана на 3 ».
// Если возраст Митрофана больше, то выводится такое 
//  сообщение: «Митрофан старше Федота на 5».
// Если возраст обоих человек один и тот же, то 
//  выводится такое сообщение: «Федот и Митрофан 
//  одного возраста».

let inputAgeFedot = prompt('Введите возраст Федота');
let inputAgeMitrofan = prompt('Введите возраст Митрофана');
let ageFedot;
let ageMitrofan;
if (inputAgeFedot === null || inputAgeFedot === ''
    || inputAgeMitrofan === null || inputAgeMitrofan === '') {
    alert('Ошибка ввода есть пустая строка!');
} else {

    ageFedot = Number(inputAgeFedot);
    ageMitrofan = Number(inputAgeMitrofan);

    if (isNaN(ageFedot) || isNaN(ageMitrofan)) {
        alert('Ошибка надо два числа!');
    } else {

        if (ageFedot > 120 || ageMitrofan > 120) {
            alert('Кто то врет! Слишком большой возраст.');
        } else {
            if (ageFedot > ageMitrofan) {
                alert(`Федот старше Митрофана на ${ageFedot - ageMitrofan}`);
            } else if (ageMitrofan > ageFedot) {
                alert(`Митрофан старше Федота на ${ageMitrofan - ageFedot}`);
            } else {
                alert('Федот и Митрофан одного возраста');
            }
        }
    }
}


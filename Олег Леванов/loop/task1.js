// 1. пользователь вводит число n 
// написать цикл который выводит все числа от n до 0
// (n может быть отрицательным) 
// let inputNumber;
// let isWork = false;
// let number = 0;
// do {

//     inputNumber = prompt("Введите число.\n(число может быть отрицательным)");

//     if (inputNumber === null || inputNumber === '') {
//         console.log('Надо было вести число а не пустую строку.');
//     } else {

//         number = Number(inputNumber);
//         if (isNaN(number)) {
//             console.log('Введено не число!\nНадо число.');
//         } else if (!Number.isSafeInteger(number)) {
//             console.log('Переданное значение НЕ является безопасным целым числом.');
//         } else {
//             isWork = true;
//         }
//     }

// } while (isWork === false);

// if (number > 0) {
//     for (let i = number; i > 0; i--) {
//         console.log(i);
//     }
// } else if (number < 0) {
//     for (let i = number; i < 0; i++) {
//         console.log(i);
//     }
// } else {
//     console.log('До нуля чисел нет.');
// }

// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n
// (n всегда положительное) + проверить число n на число

let inputNumber;
let isWork = false;
let number = 0;
do {

    inputNumber = prompt("Введите число.\n(число всегда положительное)");

    if (inputNumber === null || inputNumber === '') {
        console.log('Надо было вести число а не пустую строку.');
    } else {

        number = Number(inputNumber);
        if (isNaN(number)) {
            console.log('Введено не число!\nНадо число.');
        } else if (!Number.isSafeInteger(number)) {
            console.log('Переданное значение НЕ является безопасным целым числом.');
        } else if (number < 0) {
            console.log('Число должно быть положительное!');
        } else if (number === 0) {
            console.log('Число 0 не является ни положительным, ни отрицательным числом.');
        } else {
            isWork = true;
        }
    }

} while (isWork === false);

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log(`Сумма числа ${number} составила ${sum}`); //n = 100 -> sum = 5050

// 3. написать программу воторая определяет количество
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

// 4. написать программу которая выводит среднее арифметическое
// n чисел введенных пользователем. Ввод чисел прекращается когда
// нажали "отмена", после чего выводится среднее арифметическое

// 5. пользователь вводит числа n и m, вывести в консоль
// квадраты всех чисел от n до m
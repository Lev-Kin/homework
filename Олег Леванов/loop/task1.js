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

// let inputNumber;
// let isWork = false;
// let number = 0;
// do {

//     inputNumber = prompt("Введите число.\n(число всегда положительное)");

//     if (inputNumber === null || inputNumber === '') {
//         console.log('Надо было вести число а не пустую строку.');
//     } else {

//         number = Number(inputNumber);
//         if (isNaN(number)) {
//             console.log('Введено не число!\nНадо число.');
//         } else if (!Number.isSafeInteger(number)) {
//             console.log('Переданное значение НЕ является безопасным целым числом.');
//         } else if (number < 0) {
//             console.log('Число должно быть положительное!');
//         } else if (number === 0) {
//             console.log('Число 0 не является ни положительным, ни отрицательным числом.');
//         } else {
//             isWork = true;
//         }
//     }

// } while (isWork === false);

// let sum = 0;
// for (let i = 1; i <= number; i++) {
//     sum += i;
// }
// console.log(`Сумма числа ${number} составила ${sum}`); //n = 100 -> sum = 5050

// 3. написать программу воторая определяет количество
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

// let inputNumber;
// let isWork = false;
// let number = 0;
// do {

//     inputNumber = prompt("Введите количество чисел котрые будете вводить.");

//     if (inputNumber === null || inputNumber === '') {
//         console.log('Надо было вести число а не пустую строку.');
//     } else {

//         number = Number(inputNumber);
//         if (isNaN(number)) {
//             console.log('Введено не число!\nНадо число.');
//         } else if (!Number.isSafeInteger(number)) {
//             console.log('Переданное значение НЕ является безопасным целым числом.');
//         } else if (number < 0) {
//             console.log('Число должно быть положительное!');
//         } else if (number === 0) {
//             console.log('Ну алее хотяб одно число.\nКоличестВООО');
//         } else {
//             isWork = true;
//         }
//     }

// } while (isWork === false);

// let countZerro = 0;
// let countNegative = 0;
// let countPositive = 0;
// let inputNumberFind;
// let isStep = false;
// let numberFind = 0;
// for (let i = 1; i < number + 1; i++) {
//     do {

//         inputNumberFind = prompt(`Введите ${i} число для проверки.`);

//         if (inputNumberFind === null || inputNumberFind === '') {
//             console.log('Надо было вести число а не пустую строку.');
//         } else {

//             numberFind = Number(inputNumberFind);
//             if (isNaN(numberFind)) {
//                 console.log('Введено не число!\nНадо число.');
//             } else if (!Number.isSafeInteger(numberFind)) {
//                 console.log('Переданное значение НЕ является безопасным целым числом.');
//             } else {
//                 isStep = true;
//             }
//         }

//     } while (isStep === false);

//     if (numberFind > 0) {
//         countPositive++;
//     } else if (numberFind < 0) {
//         countNegative++;
//     } else {
//         countZerro++;
//     }

// }

// console.log('===============================');
// console.log('положительных: ' + countPositive);
// console.log('отрицательных: ' + countNegative);
// console.log('нулей: ' + countZerro);

// 4. написать программу которая выводит среднее арифметическое
// n чисел введенных пользователем. Ввод чисел прекращается когда
// нажали "отмена", после чего выводится среднее арифметическое

// let inputNumber = '';
// let isWork = false;
// let isStop = false;
// let number = 0;
// let count = 0;
// let sum = 0;
// while (true) {

//     inputNumber = '\0';
//     isWork = false;
//     number = 0;
//     do {

//         inputNumber = prompt('Вводите числа чтоб получить среднее арифметическое\nДля завершения нажмите кнопку отмена');
//         if (inputNumber === null) {
//             isStop = true;
//             break;
//         }

//         if (inputNumber === '') {
//             console.log('Надо было вести число а не пустую строку.\nЕсли хотите выйте нажмите отмена.');
//         } else {

//             number = Number(inputNumber);
//             if (isNaN(number)) {
//                 console.log('Введено не число!\nНадо число.');
//             } else if (!Number.isSafeInteger(number)) {
//                 console.log('Переданное значение НЕ является безопасным целым числом.');
//             } else {
//                 isWork = true;
//             }
//         }

//     } while (isWork === false);

//     if (isStop) {
//         break;
//     }

//     count++;
//     sum += number;
// }

// if (sum === 0) {
//     console.log('Вы вышли из программы без расчетов.');
// } else {
//     console.log('Среднее арифметическое значение будет ' + sum / count);
// }

// 5. пользователь вводит числа n и m, вывести в консоль
// квадраты всех чисел от n до m

let inputNumber = '\0';
let isWork = false;
let number = 0;
do {

    inputNumber = prompt("Введите первое число n.");

    if (inputNumber === null || inputNumber === '') {
        console.log('Надо было вести число а не пустую строку.');
    } else {

        number = Number(inputNumber);
        if (isNaN(number)) {
            console.log('Введено не число!\nНадо число.');
        } else if (!Number.isSafeInteger(number)) {
            console.log('Переданное значение НЕ является безопасным целым числом.');
        } else {
            isWork = true;
        }
    }

} while (isWork === false);
let onNum = number;

inputNumber = '\0';
isWork = false;
number = 0;
do {

    inputNumber = prompt("Введите второе число m.");

    if (inputNumber === null || inputNumber === '') {
        console.log('Надо было вести число а не пустую строку.');
    } else {

        number = Number(inputNumber);
        if (isNaN(number)) {
            console.log('Введено не число!\nНадо число.');
        } else if (!Number.isSafeInteger(number)) {
            console.log('Переданное значение НЕ является безопасным целым числом.');
        } else {
            isWork = true;
        }
    }

} while (isWork === false);
let toNum = number;

for (let i = onNum; i < toNum; i++) {
    console.log(`Квадрат ${i} = ${Math.pow(i, 2)}`);
}


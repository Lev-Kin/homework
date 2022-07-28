// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n 
// (n всегда положительное) + проверить число n на число

// let userNumber = +prompt ('Введи положительное число');
// let sum = 0;
// if (userNumber <= 0) {
//     userNumber = +prompt ('Введи положительное число');
// } else if (isNaN (userNumber) === true) {
//     userNumber = +prompt ('Введи положительное число');
// } else {
//     for (let i = 0; i <= userNumber; i++) {
//         sum += i;
//     }
//     console.log (sum);
// }

// 3. написать программу воторая определяет количество 
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

// let userAmountOfNumbers = +prompt ('Скольско чисел вы хотите ввести?');
// let userNumber = 0;
// let positive = 0;
// let negative = 0;
// let zero = 0;
// for (let i = 0; i < userAmountOfNumbers; i++) {

//     userNumber = +prompt ('введите число');

//     if (userNumber > 0) {
//         positive += 1;
//     } else if (userNumber < 0) {
//         negative += 1;
//     } else {
//         zero += 1;
//     }
    
// }
// console.log (`положительных: ${positive}, отрицательных: ${negative}, нулей: ${zero}`);

// 4. написать программу которая выводит среднее арифметическое 
// n чисел введенных пользователем. Ввод чисел прекращается когда
// нажали "отмена", после чего выводится среднее арифметическое

// let userNumber = 0;
// let sum = 0;

// for (let i = 0; ; i++) {

//     userNumber = prompt (`Введи число`);

//     sum += +userNumber;

//     if (userNumber ===  null || userNumber === ``) {
//         console.log (sum / i);
//         break;
//     } 
// }

// 5. пользователь вводит числа n и m, вывести в консоль
// квадраты всех чисел от n до m

// let userNumber1 = +prompt ('Введите число n');
// let userNumber2 = +prompt ('Введите число m');
// let square = 0;
// for (userNumber1; userNumber1 <= userNumber2; userNumber1++) {
//     square = Math.pow (userNumber1, 2);
//     console.log (square);
// }

// 6. написать игру. Под диваном живет 100 хомячков, пользователь
// не знает сколько их. Задача пользователя доставать из под дивана хомячков 
// до тех пор, пока их там не останется.
// В конце игры выводим количество попыток за которое пользователь достал
// всех хомячков.
// Если пользователь нажмет "отмена" игра должна прекратиться досрочно
// с выводом сообщения чз алерт.
// Если пользователь пытается достать хомячков больше чем их осталось под 
// диваном то вывести алертом сообщение "нет столько хомячков".

let humsters = 100;
let counter = 0;
for (humsters; humsters > 0; ) {
    let attempt = prompt ('достань хомяков');
    humsters -= attempt;
    counter += 1;
    if (+attempt > 100) {
        alert ('столько нет');
        humsters = 100;
    } else if (humsters === 0) {
        alert (`вы победили, попыток: ${counter}`);
    } else if (humsters < 0) {
        humsters = 100;
    } else if (attempt === null || attempt === "") {
        alert ('вы закончили игру');
        break;
    }
}
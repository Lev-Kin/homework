// 1. пользователь вводит число n 
// написать цикл который выводит все числа от n до 0
// (n может быть отрицательным) 

let userNumber = +prompt('Введите число');
if (userNumber > 0) {
    for ( ; userNumber >= 0; userNumber--) {
        console.log(userNumber);
    }
} else if (userNumber < 0) {
    for ( ; userNumber <= 0; userNumber++) {
        console.log(userNumber);
    }
}

// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n 
// (n всегда положительное) + проверить число n на число.

let enterNumber = +prompt ('Введите положительное число');
let summa = 0;
if (isNaN(enterNumber) || enterNumber <= 0) {
    alert('Введите корректное число');
} else if (enterNumber > 0) {
    for (let i = 1; i <= enterNumber; i++) {
        summa += i;
        console.log(summa);
    }
}

// 3. написать программу воторая определяет количество 
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

let enterCount = +prompt ('Введите количество чисел, которое вы захотите ввести');
let numbers;
let positiveNumber = 0;
let negativeNumber = 0;
let zero = 0;
for ( ; enterCount > 0; enterCount--) {
    numbers = +prompt ('Введите число');
    if (numbers > 0){
        positiveNumber++;
    } else if (numbers < 0){
        negativeNumber++;
    } else if (numbers === 0){
        zero++;
    }
}
console.log (`Положительных: ${positiveNumber}`);
console.log (`Отрицательных: ${negativeNumber}`);
console.log (`Нулей: ${zero}`);

// 4. написать программу которая выводит среднее арифметическое 
// n чисел введенных пользователем. Ввод чисел прекращается когда
// нажали "отмена", после чего выводится среднее арифметическое

let arithmeticMean = 0;
for (let i = 0; ; i++) {
    let enterArithmeticNum = prompt ('Вводите числа. Для прекращения ввода нажмите Отмена');
    arithmeticMean += +enterArithmeticNum;
    if (enterArithmeticNum === null) {
        arithmeticMean = arithmeticMean / i;
        console.log(arithmeticMean);
        break;
    } else if (isNaN(enterArithmeticNum)) {
        alert('Вы ввели не число. Математическая операция невозможна. Начните сначала!');
        break;
    }
}

// 5. пользователь вводит числа n и m, вывести в консоль
// квадраты всех чисел от n до m

let firstNumber = +prompt ('Введите первое число');
let secondNumber = +prompt ('Введите второе число');
let square = 0;
for ( ; firstNumber <= secondNumber; firstNumber++) {
        square = Math.pow(firstNumber, 2);
        console.log (square);
}
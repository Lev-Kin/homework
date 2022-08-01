// 1. пользователь вводит число n
// написать цикл который выводит все числа от n до 0
// (n может быть отрицательным)

// let userNumber = +prompt("Введите число");

// if (userNumber > 0) {
//   for (; userNumber >= 0; userNumber--) {
//     console.log(userNumber);
//   }
// } else {
//   for (; userNumber <= 0; userNumber++) {
//     console.log(userNumber);
//   }
// }

// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n
// (n всегда положительное) + проверить число n на число

// let userNumber = +prompt("Введите число");
// let sumNumber = 0;

// if (isNaN(userNumber) || userNumber <= 0) {
//   alert("Введите число больше ноля цифрами");
// } else {
//   for (let i = 1; i <= userNumber; i++) {
//     sumNumber = sumNumber + i;
//   }
// }

// if (sumNumber > 0) {
//   console.log(sumNumber);
// }

// 3. написать программу воторая определяет количество
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

// let countNumber = +prompt("Введите количество чисел");
// let positiveNumber = 0;
// let negativeNumber = 0;
// let zero = 0;
// let userNumber;

// for (let i = 0; i < countNumber; i++) {
//   userNumber = +prompt("Введите число");
//   if (userNumber > 0) {
//     positiveNumber++;
//   } else if (userNumber < 0) {
//     negativeNumber++;
//   } else {
//     zero++;
//   }
// }

// console.log(`положительных: ${positiveNumber}
// отрицательных: ${negativeNumber}
// нулей: ${zero}`);

// 4. написать программу которая выводит среднее арифметическое
// n чисел введенных пользователем. Ввод чисел прекращается когда
// нажали "отмена", после чего выводится среднее арифметическое

// let userNumber;
// let sumNumber = 0;
// let average;

// for (let i = 0; ; i++) {
//   userNumber = prompt("Введите число");
//   if (isNaN(+userNumber)) {
//     alert("Вводите числа цифрами");
//     break;
//   } else if (userNumber === null) {
//     average = sumNumber / i;
//     console.log(average);
//     break;
//   } else {
//     sumNumber = +userNumber + sumNumber;
//   }
// }

// 5. пользователь вводит числа n и m, вывести в консоль
// квадраты всех чисел от n до m

let userNumN = +prompt("Введите число");
let userNumM = +prompt("Введите число");
let squareNum;

if (userNumN > userNumM) {
  for (; userNumN >= userNumM; userNumN--) {
    squareNum = userNumN ** 2;
    console.log(squareNum);
  }
} else {
  for (; userNumN <= userNumM; userNumN++) {
    squareNum = userNumN ** 2;
    console.log(squareNum);
  }
}

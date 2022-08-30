// 1.Пользователь вводит число n.
// Написать цикл, котрый выводит все числа от n до 0
// (n может быть отрицательным)
// let enterNumber = +prompt('Please enter a number');
//
// if (enterNumber < 0 ) {
//   for (; enterNumber <= 0; enterNumber++) {
//     console.log(enterNumber);
//   }
// } else if (enterNumber > 0 ) {
//     for (; enterNumber >= 0; enterNumber--) {
//       console.log(enterNumber);
//     }
// }
//
// Написать программу, которая вычисляет сумму чисел от 1 до n.
// (n всегда положительное) + проверить число n на число
// let enterNumber = +prompt("Please enter a number");
// let totalSum = 0;
//
// if (enterNumber > 0) {
//   for (let i = 1; i <= enterNumber; i++) {
//     totalSum += i;
//     console.log(totalSum);
//   }
// } else if (isNaN(enterNumber) || enterNumber <= 0 ) {
//     alert("You entered the wrong number");
// }
// 3. Написать программу воторая определяет количество
// положительных, отрицательных и нулей
// в начале программы пользователь вводит количество чисел которое намерен вводить
// пример вывода в консоли:
// положительных: 2
// отрицательных: 4
// нулей: 1
// let enterNumber;
// enterNumber = prompt('Please enter a number');
//
// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;
//
// for (;enterNumber;) {
//   const formatNumber = +enterNumber;
//   enterNumber = prompt('Please enter a number');
//   if (formatNumber > 0) {
//     ++positiveCount;
//     continue;
//   }
//   if (formatNumber < 0) {
//     ++negativeCount;
//     continue;
//   }
//   ++zeroCount;
// }
//
// console.log("Negative count ==>>", negativeCount);
// console.log("Positive count ==>>", positiveCount);
// console.log("Zero count ==>>", zeroCount);
// 4. Написать программу которая выводит среднее арифметическое
// n чисел введенных пользователем. Ввод чисел прекращается когда
// нажали "отмена", после чего выводится среднее арифметическое
// let enterNumber;
// enterNumber = +prompt('Please enter a number');
//
// let sum = enterNumber || 0;
// let count = 0;
//
// for (; enterNumber;) {
//   enterNumber = +prompt('Please enter a number');
//   sum += enterNumber;
//   count += 1;
// }
//
// const result = sum / count;
// console.log(result)
// 5. Пользователь вводит числа n и m, вывести в консоль
// квадраты всех чисел от n до m
//
// let nNumber = +prompt('Please enter a number');
// let mNumber = +prompt('Please enter a number');
//
// for (let i = nNumber; i <= mNumber; i++) {
//   console.log(i**2);
// }

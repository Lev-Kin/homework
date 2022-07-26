// 1. пользователь вводит число n 
// написать цикл который выводит все числа от n до 0
// (n может быть отрицательным) 

let n = +prompt('Введите число');

if (n > 0) {
   for (let i = 0; i <= n; n--) {
      console.log(n);
   }
} else if (n < 0) {
   for (let i = 0; i >= n; n++) {
      console.log(n);
   }
}
// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n
// (n всегда положительное) + проверить число n на число

let userNumber = +prompt('Введите число');
let summ = 0;

if (Number.isFinite(userNumber) & userNumber > 0) {

   for (let i = 1; i <= userNumber; i++) {
      summ += i;
      console.log(summ);
   }
} else {
   alert('Введите число! ');
}

// 3. написать программу которая определяет количество
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

let quantityOfNumber = +prompt('Сколько чисел вы будете вводить?');
let countOfPositiveNumbers = 0;
let countOfNegativNumbers = 0;
let countOfNull = 0;

for (let i = 0; i < quantityOfNumber; i++) {

   let userNum = +prompt('Введите числа!!!');

   if (userNum > 0) {
      countOfPositiveNumbers++;
   } else if (userNum < 0) {
      countOfNegativNumbers++;
   } else if (userNum === 0) {
      countOfNull++;
   }
}

// console.log(`положительных:${countOfPositiveNumbers} отрицательных:${countOfNegativNumbers} нулей:${countOfNull}`);

// 4. написать программу которая выводит среднее арифметическое
// n чисел введенных пользователем. Ввод чисел прекращается когда
// нажали "отмена", после чего выводится среднее арифметическое


let arifm = 0;

for (let i = 0; ; i++) {
   let userNumbers = +prompt('Введите числа, для того чтобы выполнить подсчет нажмите ОТМЕНА');

   arifm += userNumbers;

   if (userNumbers === 0) {
      arifm = arifm / i;
      alert(`среднее арифметическое чисел = ${arifm}`);
      break;
   }
}




// 5. пользователь вводит числа n и m, вывести в консоль
// квадраты всех чисел от n до m

let numberN = +prompt('num N');
let numberM = +prompt('num M');

for (numberN; numberN <= numberM; numberN++) {
   let numbersPow = Math.pow(numberN, 2);
   console.log(numbersPow);
}


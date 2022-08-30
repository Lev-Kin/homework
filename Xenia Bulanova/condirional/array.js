// 1. дан массив 10 чисел. вывести в консоль сумму всех элементов массива

// const arrSum = [1, 34, 54, 3, 56, 13, 10, 28, 22, 14];
// let sum = 0;
//
// for (i = 0; i < arrSum.length; i++) {
//     sum += arrSum[i];
//     console.log (sum)
// }

// 2. найти среднее арифметическое всех элементов массива, которые стоят
// на четных местах (0,2,4...)

// const arrArith = [1, 2, 10, 12, 22, 14, 15, 18, 3, 11];
// let sum = 0;
// let done = 1;
// let average = 0;
//
// for (let i = 0; i < arrArith.length; i++) {
//   if (i % 2 === 0) {
//       sum += arrArith[i];
//       done++
//     }
//  }
//  average = sum/done;
//
// console.log(done);

//  3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9]
// создать новый массив, элементы которого противоположны по знакам исходного

// const arrNegative = [2, -65 ,7, -1, 26, 48, -93, 58, 9];
// let arrPositive = [];

// for (let i = 0; i < arrNegative.length; i++) {

//   arrPositive [arrPositive.length] = -arrNegative[i];

// }

// console.log(arrPositive);


// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы

// let arrRandom = [];
//
// for (let i = 0; i < 10; i++) {
//  if(i % 2 === 0){
//   arrRandom[i] = 1;
//  }
//  if (i % 2 !== 0){
//   arrRandom[i] = 0;
//  }
// }
//   console.log(arrRandom);


// 5. заполнить массив последовательными нечетными числами (длина 10)

// const arrOdd = [];
// let len = 1;
//
// for (let i = 0; i < 10; i++) {
//   arrOdd[i] = len;
//   len += 2;
// }
// console.log(arrOdd);


// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)

// const arrSquare = [];
//
// for(let i = 0; i < 10; i++){
//  arrSquare[i] = i*i;
// }
// console.log(arrSquare);

// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива

// const arrEven = [1, 23, 10, 44, 56, 13, 18, 22, 5, 80];
//
// for(let i = 0; i < arrEven.length; i++ ){
//   if(arrEven[i] % 2 === 1){
//   console.log(arrEven[i]);
//   }
// }


// 8. дан массив 10 чисел. вывести наибольшее число из этого массива

// const arrMax = [1, 23, 10, 44, 56, 13, 18, 22, 5, 80];
// let maxNumber = 0;
//
// for(let i = 0; i < arrMax.length; i++){
//  if(arrMax[i] > maxNumber){
//   maxNumber = arrMax[i];
//  }
// }
// console.log(maxNumber)
//

// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего
// не больше чем на 10%

// let maxValue = 0;
// let maxValueIndex = 0;
// let resultCounter = 0;
//
// const arrRandom = [1, 23, 10, 44, 56, 13, 18, 72, 5, 80];
//
// for (let i = 0; i < arrRandom.length; i++) {
//   if (arrRandom[i] > maxValue) {
//     maxValue = arrRandom[i];
//     maxValueIndex = i;
//   }
// };
//
// const tenPercent = (maxValue / 100) * 10;
//
// for (let i = 0; i < arrRandom.length; i++) {
//   if (maxValue - arrRandom[i] <= tenPercent && i !== maxValueIndex) {
//     ++resultCounter
//   }
// }
//
// console.log(resultCounter)


// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива

// let maxValue = 0;

// const arrRandom = [1, 23, 10, 44, 56, 13, 18, 22, 5, 80];
// const arrRandom = [0, 0, 0, 0];
//
// for (let i = 0; i < arrRandom.length; i++) {
//   const isEven = arrRandom[i] % 2 === 0;
//   const isBigest = arrRandom[i] > maxValue;
//   if (isBigest && isEven) {
//     maxValue = arrRandom[i];
//   }
// }

// console.log(maxValue || "В массиве нет положительных чисел");

// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)

// const arrRandom = [1, -23, -10, 13, 13, 12, 18, 22, 5, 80];
// let values = [];
// let minDifference = 0;
//
// let userValue = +prompt("Enter your number");
//
// if (isNaN(userValue)) {
//   alert("This is not number");
//   userValue = +prompt("Enter your number");
// };
//
// for (let i = 0; i < arrRandom.length; i++) {
//   const curentDifference = Math.abs(userValue - arrRandom[i]);
//
//   if (i === 0) {
//     values.push(arrRandom[i]);
//     minDifference = curentDifference;
//     continue;
//   };
//
//   if (minDifference > curentDifference) {
//     minDifference = curentDifference;
//     values.splice(0, values.length, arrRandom[i]);
//     continue;
//   }
//
//   if (minDifference === curentDifference) {
//     values.push(arrRandom[i]);
//     continue;
//   }
// };

// 1. дан массив 10 чисел, вывести в консоль сумму всех элементов массива

let numArr = [3, 10, 12, 5, 6, 9, 11, 13, 17, 7];
let summ = 0;

for (let i = 0; i < numArr.length; i++) {
   summ += numArr[i];
}

console.log(summ);



// 2. найти среднее арифметическое всех элементов массива, которые стоят
// на четных местах (0,2,4...)

let numbersArray = [5, 6, 7, 12, 14, 8, 9, 11, 21, 25];
let summa = 0;
let countOfNumbers = 0;

for (let i = 0; i < numbersArray.length; i++) {
   if (i % 2 === 0) {
      countOfNumbers++;
      summa += numbersArray[i];
   }
}

let arifm = summa / countOfNumbers;

console.log(arifm);

// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9]
// создать новый массив, элементы которого противоположны по знакам исходного

let nums = [2, -65, 7, -1, 26, 48, -93, 58, 9];
let numsRevers = [];

for (let i = 0; i < nums.length; i++) {
   numsRevers[i] = -nums[i];
}

console.log(numsRevers);

// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы

let emptyArray = [];
emptyArray.length = 10;

for (let i = 0; i < emptyArray.length; i++) {
   if (i % 2 === 0) {
      emptyArray[i] = 1;
   } else if (i % 2 !== 0) {
      emptyArray[i] = 0;
   }
}

console.log(emptyArray);

// 5. заполнить массив последовательными нечетными числами (длина 10)

let numsArray = [];
numsArray.length = 10;

for (let i = 0; i < numsArray.length; i++) {
   if (i === 0) {
      numsArray[0] = 1;
   } else {
      numsArray[i] = (i + 1) * 2 - 1;
   }
}

console.log(numsArray);

// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)

let numbersPovArray = [];
numbersPovArray.length = 10;

for (let i = 0; i < numbersPovArray.length; i++) {
   numbersPovArray[i] = Math.pow(i, 2);
}

console.log(numbersPovArray);


// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива

let numbersArr = [2, 34, 43, 5, 6, 8, 12, 14, 10, 11];

let countOfPositivNumbers = 0;

for (let i = 0; i < numbersArr.length; i++) {

   if (numbersArr[i] % 2 === 0) {
      countOfPositivNumbers++;
   }

}

console.log(countOfPositivNumbers);

// 8. дан массив 10 чисел. вывести наибольшее число из этого массива

let numbers = [45, 12, 1, 65, 7, 81, 313, 2, 11, 10];

let maxNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
   }
}


console.log(maxNumber);

// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего
// не больше чем на 10%

let arrayOfNumbers = [10, 34, 43, 5, 105, 96, 100, 101, 89, 69,];
let maxNum = arrayOfNumbers[0];
let countOfEl = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {

   for (let j = 0; j < arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[j] > maxNum) {
         maxNum = arrayOfNumbers[j];
      }
   }

   if (arrayOfNumbers[i] !== maxNum && maxNum - arrayOfNumbers[i] <= maxNum * 0.1) {
      countOfEl++;
   }
}
console.log(countOfEl);



// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива

let arrNums = [225, 11, 43, 56, 2, 116, 9, 78, 101, 110];
let biggestPositiveNumber;

for (let i = 0; i < arrNums.length; i++) {
   if (arrNums[i] % 2 === 0) {
      biggestPositiveNumber = arrNums[i];
      break;
   }
}

for (let i = 0; i < arrNums.length; i++) {
   if (arrNums[i] > biggestPositiveNumber && arrNums[i] % 2 === 0) {
      biggestPositiveNumber = arrNums[i];
   }
}
console.log(biggestPositiveNumber);



// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)


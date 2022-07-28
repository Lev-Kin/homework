// 1. дан массив 10 чисел. вывести в консоль сумму всех элементов массива
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 69, 6];
// let sum = 0;
// for (let i = 0; i <numbersArray.length; i++){
//     sum += numbersArray[i];
// }
// console.log (sum);



// 2. найти среднее арифметическое всех элементов массива, которые стоят 
// на четных местах (0,2,4...)
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 69, 6];
// let arithmetic = 0;
// let division = 0;
// for (let i = 0; i < numbersArray.length; i++){
//     if (i % 2 === 0){
//         arithmetic += numbersArray[i];
//         division++;
//     }
// }
// arithmetic = arithmetic / division;
// console.log (arithmetic);


// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9] 
// создать новый массив, элементы которого противоположны по знакам исходного
// let numArray = [2, -65 ,7 ,-1 ,26 ,48 ,-93 ,58 ,9 ];
// let newArray = [];
// for (let i = 0; i < numArray.length; i++){
//     newArray[newArray.length] = -numArray[i];
// }
// console.log (newArray);



// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы
// let emptyArray = [];
// emptyArray[emptyArray.length] = 1;
// for (let i = 0; emptyArray.length < 10; i++){
//     emptyArray[emptyArray.length] = Math.round(Math.random()*1);
// }
// console.log (emptyArray);


// 5. заполнить массив последовательными нечетными числами (длина 10)
// let emptyArray = [];
// for (let i = 0; emptyArray.length !== 10; i++){
//     if (i % 2 !== 0){
//         emptyArray[emptyArray.length] = i;
//     }
// }
// console.log (emptyArray);


// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)

// let numbersArray = [];
// for (let i = 0; numbersArray.length !== 10; i++){
//     numbersArray[i] = i**2;
// }
// console.log (numbersArray);


// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 69, 6];
// let counter = 0;
// for (let i = 0; i < numbersArray.length; i++){
//     if (numbersArray[i] % 2 === 0){
//         counter++;
//     }
// }
// console.log (counter);


// 8. дан массив 10 чисел. вывести наибольшее число из этого массива
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 69, 6];
// let biggestNum = numbersArray[0];
// for (let i = 0; i < numbersArray.length; i++){
//     if (numbersArray[i] > biggestNum){
//         biggestNum = numbersArray[i];
//     }
// }
// console.log (biggestNum);


// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%
// let numbersArray = [1, 5, 10, 33, 2, 4, 100, 30, 99, 6];
// let biggestNum = numbersArray[0];
// let counter = 0;
// for (let i = 0; i < numbersArray.length; i++){
//     if (numbersArray[i] > biggestNum){
//         biggestNum = numbersArray[i];
//     }
// }
// let procentOfBiggestNum = biggestNum * 10 / 100;
// for (let i = 0; i < numbersArray.length; i++){
//     if (numbersArray[i] !== biggestNum && biggestNum - numbersArray[i] <= procentOfBiggestNum){
//         counter++;
//     }
// }
// console.log (counter);


// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива
// let numbersArray = [1, 5, 11, 33, -4, 5, 81, 31, 99, 9];
// let biggestNum; 
// for (let i = 0; i < numbersArray.length; i++){
//    if (numbersArray[i] % 2 ===0){
//       biggestNum = numbersArray[i];
//       break;
//    }
// }
// for (let i = 0; i < numbersArray.length; i++){
//    if (numbersArray[i] > biggestNum && numbersArray[i] % 2 === 0){
//       biggestNum = numbersArray[i];
//    }
// }
// console.log (biggestNum);


// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)

let numbersArray = [1, 5, 10, 33, 2, 78, 81, 30, 99, 6];
let userEnterNum = +prompt ('Введите число');
let differentArray = [];
for (let i = 0; i < numbersArray.length; i++){
   differentArray[differentArray.length] = userEnterNum - numbersArray[i];
}
let lessDifferent = differentArray[0];
let indexOfLessDifferent = 0;
let secondIndex = 0;
for (let i = 1; i < differentArray.length; i++){
   if (Math.abs(differentArray[i]) === Math.abs(lessDifferent)){
      secondIndex = i;
   }
   if (Math.abs(differentArray[i]) < Math.abs(lessDifferent)){
      lessDifferent = differentArray[i];
      indexOfLessDifferent = i;
   }
   
}
let secondNearNumArray = 0;
let nearNumArray = numbersArray[indexOfLessDifferent];
if (secondIndex){
   secondNearNumArray = numbersArray[secondIndex];
   console.log (`${nearNumArray} и ${secondNearNumArray}`);
} else {
   console.log (nearNumArray);
}
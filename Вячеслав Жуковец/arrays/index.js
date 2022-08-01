// 1. дан массив 10 чисел. вывести в консоль сумму всех элементов массива

// summArray = 0;

// const numbers = [3,5,9,2,5,3,6,1,7,9];
//     for (let i=0; i < numbers.length; i++){
//         summArray = summArray + numbers[i];
//     }
// console.log(summArray);

// 2. найти среднее арифметическое всех элементов массива, которые стоят 
// на четных местах (0,2,4...)

// let summArray = 0;
// let summa = 0;
// srAr = 0;

// const numbers = [3,5,9,2,5,3,6,1,7,9];
//     for (let i=0; i < numbers2.length; i++){
//          if (i % 2 === 0){
//              summArray = summArray + numbers2[i];
//              summa++;
//         }
//     }
// srAr = summArray/summa;
// console.log(srAr);

// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9] 
// создать новый массив, элементы которого противоположны по знакам исходного

// let numbers = [2,-65,7,-1,26,48,-93,58,9];

// for (let i=0; i < numbers.length; i++){
//         numbers[i] =  (-1) * numbers[i];
// }
// console.log(numbers);

// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы

// const numbers = new Array(10);

// for (let i=0; i < numbers.length; i++){
//     if (i % 2){
//         numbers[i] = 0;
//     } else {
//         numbers[i] = 1;
//     }
// }
// console.log (numbers);

// 5. заполнить массив последовательными нечетными числами (длина 10)

// const numbers = [];

// for (let i=0; numbers.length !== 10; i++){
//     if (i % 2 !== 0){
//         numbers[numbers.length] = i;
//     }
// }
// console.log(numbers);

// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)

// let numbers = [];
// let kv = 0;

// for (let i = 0; numbers.length !== 10; i++){
//     kv = Math.pow(i,2);
//     numbers[numbers.length] = kv;
// }
// console.log(numbers);

// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива

// const numbers = [3,2,5,2,6,9,2,5,9,7];
// summa = 0;

// for (let i=0; i <= numbers.length; i++){
//     if (numbers[i] % 2 === 0)
//     summa++;
// }
// console.log (summa);

// 8. дан массив 10 чисел. вывести наибольшее число из этого массива

// const numbers = [-11,8,5,-2,6,19,2,5,-9,7];
// let number = 0;

// for (let i = 0; i <= numbers.length; i++){
//     if (number < numbers[i]){
//         number = numbers[i];
//     }
// }
// console.log(number);

// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%

// const numbers = [-11,8,18.8,5,-2,19.2,6,18,2,5,-9,17,20,19,7];
// let number = 0;

// for (let i = 0; i <= numbers.length; i++){
//     if (number < numbers[i]){
//         number = numbers[i];
//     }
// }

// let target = number*0.9;
// summ = 0;
// for (let i = 0; i <= numbers.length; i++){
//     if (numbers[i]> target){ 
//         summ++;
//     }  
// }
// console.log(summ);

// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива

// const numbers = [-11,8,5,-2,6,19,12,5,-9,7];
// let number = 0;

// console.log(numbers);

// for (let i = 0; i <= numbers.length; i++){
//     if (number < numbers[i] && numbers[i] % 2 === 0){
//         number = numbers[i];
//     }
// }
// console.log(number);

// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)

// const numbers = [-11,8,5,-2,6,2,-19,12,5,-9];
// let enterUser = +prompt('Введите число!');
// let currentNumber;
// let minDifference = enterUser - numbers[0];

// for (let i = 0 ; i < numbers.length ; i++){
//     currentNumber = enterUser - numbers[i];
//     if (currentNumber < 0){
//         currentNumber = Math.abs(currentNumber);
//     }
//     if (minDifference > currentNumber){
//         minDifference = currentNumber;
//     } 
// }
// console.log(`Числа наиболее близкие к ${enterUser}:`);
// for (let i = 0 ; i < numbers.length ; i++){
//     currentNumber = enterUser - numbers[i];
//     if (currentNumber < 0){
//         currentNumber = Math.abs(currentNumber);
//     }
//     if (minDifference === currentNumber){
//         console.log(numbers[i]);
//     }
// }



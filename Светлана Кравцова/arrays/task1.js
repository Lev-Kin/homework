// 1. дан массив из 10 чисел. Вывести в консоль сумму всех элементов массива
// const arr = [55, 2, 43, 6, 5, 16, 7, 38, 9, 320];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];    
// }
// console.log(sum);


// 2. найти среднее арифметическое всех элементов массива, которые стоят на четных местах (0,2,4...)
// const arr = [2, 5, 6, 8, 13, 11, 19];
// let sum = 0;
// let average = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         sum += arr[i];
//         average++;       
//     }    
// }
//  console.log(sum / average);


// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9] 
// создать новый массив, элементы которого противоположны по знакам исходного
// const arr = [2,-65,7,-1,26,48,-93,58,9];
// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//         arr2[i] = -arr[i]; 
// }
//     console.log(arr);
//     console.log(arr2);


// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы
// const arr = [];
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//        arr[i] = 1;
//     }
//     if (i % 2 !== 0) {
//        arr[i] = 0;
//     }    
// }
// console.log(arr);


// 5. заполнить массив последовательными нечетными числами (длина 10)
// const arr = [];
// let n = 1;
// for (let i = 0; i < 10; i++) {   
//     arr[i] = n;
//     n += 2;
// } console.log(arr);


// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)
// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = i*i;
// }
// console.log(arr);


// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива
// const arr = [55, 2, 43, 6, 5, 16, 7, 38, 10, 320];
// let even = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         even++;
//     }
// }
// console.log('количество четных элементов = ' + even);


// 8. дан массив 10 чисел. вывести наибольшее число из этого массива//
// const arr = [55, 2, 430, 6, 5, 16, 7, 380, 10, 200];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {    
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);


// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%
// const arr = [44, 22, 43, 6, 5, 16, 42, 38, 41, 10];
// let max = arr[0];
// let num = 0;
// let quantity = 0;
// for (let i = 0; i < arr.length; i++) {    
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (100 - (arr[i] / max)*100 <= 10) {
//         num = arr[i];
//         quantity++;
//         console.log(num);
//     }    
// }
// console.log('количество искомых чисел = ' + quantity);


// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива
// const arr = [60, 22, 43, 6, 400, 16, 48, 38, 522, 600];
// let max = arr[0];
// let num;
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         num = arr[i];
//         if (num > max) {
//             max = num;
//         }
//     }     
// }
// console.log(max);

// если нужно не по номеру элемента, а по его значениею, то следующий код:
// const arr = [60, 22, 43, 6, 801, 16, 48, 38, 522, 600];
// let max = arr[0];
// let num;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         num = arr[i];
//         if (num > max) {
//             max = num;
//         }
//     }     
// }
// console.log(max);


// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)

// const arr = [60, 45, 43, 6, 5, 16, 167, 20, 40, 50, 200];
// let userNumber = +prompt('введите число');
// let min = 0;
// let min1;
// let min2;
// let num;
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     num = arr[i]; 
//     if (num === userNumber) {
//         min = num;
//     } 
//     if (num < userNumber && (typeof min1 === 'undefined' || min1 < num)) {
//         min1 = num;
//     }  
//     if (num > userNumber && (typeof min2 === 'undefined' || min2 > num)) {
//         min2 = num;
//     }    
// } 
// if ((userNumber - min) === 0) {
//     console.log(min);
// } else if ((userNumber - min1) === (min2 - userNumber)) {
//     console.log(min1, min2);
// } else if ((userNumber - min1) < (min2 - userNumber)) {
//     console.log(min1);
// } else if ((userNumber - min1) > (min2 - userNumber)) {
//     console.log(min2);
// }

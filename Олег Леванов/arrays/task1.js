// 1. дан массив 10 чисел. вывести в консоль сумму всех элементов массива

// let arr = [];
// let sum = 0;
// let i = 0;
// while (arr.length !== 10) {
//     arr[i] = Math.floor(Math.random() * 10);
//     sum += arr[i];
//     i++;
// }
// console.log(arr);
// console.log(sum);

// 2. найти среднее арифметическое всех элементов массива, которые стоят 
// на четных местах (0,2,4...)

// let arr = [];
// let sum = 0;
// let averageMean = 0;
// let count = 0;
// for (let i = 0; arr.length !== 10; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
//         if (i % 2 === 0) {
//             sum += arr[i];
//             count++;
//         }
//     }
// }
// console.log(arr);
// console.log(count);
// console.log(sum / count);

// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9] 
// создать новый массив, элементы которого противоположны по знакам исходного
// let arr = [2, -65, 7, -1, 26, 48, -93, 58, 9];
// let arr2 = new Array(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     arr2[i] = -arr[i]
// }
// console.log(arr2); 
// console.log(arr);

// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         arr[i] = 1;
//     } else {
//         arr[i] = 0;
//     }
// }
// console.log(arr);

// 5. заполнить массив последовательными нечетными числами (длина 10)
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = 2 * i + 1;
// }
// console.log(arr);

// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.pow(i, 2);
// }
// console.log(arr);

// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива
// let arr = new Array(10);
// let countEvenElement = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
//     if (arr[i] % 2 === 0 && arr[i] !== 0) {
//         countEvenElement++;
//     }
// }
// console.log(countEvenElement);

// 8. дан массив 10 чисел. вывести наибольшее число из этого массива
// let arr = new Array(10);
// let max = Number.MIN_SAFE_INTEGER;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(arr);
// console.log(max);

// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%
// let arr = new Array(10);
// let max = Number.MIN_SAFE_INTEGER;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * 100);
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// let tenPercentOfMax = max / 100 * 10;
// let minimumFromMaximum = max - tenPercentOfMax;

// console.log(arr);
// console.log(max);
// console.log(tenPercentOfMax);

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > minimumFromMaximum && arr[i] !== max) {
//         count++;
//     }
// }
// console.log(count);

// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива

// let arr = new Array(10);
// let maxEvenElement;
// let min = -100;
// let max = 100;
// let isFirstEnty = true;
// for (let i = 0; i < arr.length; i++) {

//     arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;

//     if (arr[i] % 2 === 0) {
//         if(isFirstEnty){
//             maxEvenElement = arr[i];
//             isFirstEnty = false;
//         }else if (arr[i] > maxEvenElement) {
//             maxEvenElement = arr[i]
//         }
//     }

// }
// console.log(arr);
// console.log(maxEvenElement);


// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)

let inputUserNumber = +prompt('enter number');

let arr = new Array(10);
let min = -100;
let max = 100;
let minimumDistance;
let tempMinDistance;
for (let i = 0; i < arr.length; i++) {
    // Максимум и минимум включаются
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;

    if (i === 0) {
        minimumDistance = Math.abs(arr[i] - inputUserNumber);
    } else {
        if (Math.abs(arr[i] - inputUserNumber) <= minimumDistance) {
            tempMinDistance = minimumDistance;
            minimumDistance = Math.abs(arr[i] - inputUserNumber);

            if (minimumDistance === 0) {
                minimumDistance = tempMinDistance;
            }
        }
    }
}

let result = [];
for (let i = 0; i < arr.length; i++) {

    if (arr[i] - minimumDistance === inputUserNumber) {
        result.push(arr[i]);
    }

    if (arr[i] + minimumDistance === inputUserNumber) {
        result.push(arr[i]);
    }
}

console.log(minimumDistance);
console.log(arr);
console.log(result);

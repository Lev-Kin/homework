
// 1. Дан массив из 10 чисел. Вывестии в консоль сумму всех элементов массива.
// const array = [10, 76, 36, 98, 45, 66, 23, 1, 90, 12];
// let sum = 0;
// for (let i = 0; i < array.length; i++){
//     sum += array[i];
// }
// console.log(`сумма всех элементов массива ${sum}`);


// 2. найти среднее арифметическое всех элементов массива, 
// которые стоят на чётных местах (0,2,4,..)
// const array = [10, 76, 36, 98, 45, 66, 23, 1, 90, 12];
// let sum = 0;
// let number = 0;
// for (let i = 0; i < array.length; i++) {
//     if (i%2 === 0)
//     sum += array[i];
//     number++;
// }
// console.log(`среднее арифметическое ${sum/number}`);

// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9]. 
// Создать новый массив, элементы которого противоположны по знакам исходного.

// const array = [2,-65,7,-1,26,48,-93,58,9];
// const arrayNew = [];
// for (let i = 0; i < array.length; i++) {
//        arrayNew[i] = -array[i];
// } 
// console.log(arrayNew);

// 4. создать пустой массив длиной 10.
// Автоматически заполнить массив нулями и единицами, начиная с единицы.
// const arrayNew = new Array (10);

// for (let i = 0; i < arrayNew.lenght; i++)
//     if (i%2 === 0) {
//         arrayNew[i] = 0;
//     } else if (i%2 !== 0) {
//         arrayNew[i] = 1;
//     }

// console.log(arrayNew);

// 5. заполнить массив последовательными нечётными числами (длина 10)
// const arrayNew = new Array (10);
// let necet = 1;
// for (let i = 0; i < arrayNew.length; i++) {
//     necet = necet + 2;
//     arrayNew[i] =  necet;
// }
// console.log(arrayNew);

// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)

// const array = new Array(10);
// for (let i = 0; i < array.length; i++) {
//     array[i] = Math.pow(i, 2);
// }
// console.log(array);



// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива
// const array = [2, -65, 7, 1, 26, 48, -93, 58, 9, 10];
// let even = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] %2 === 0) {
//     even++;
//     }
// }
// console.log(`количество чётных элементов ${even}`);

// 8. дан массив 10 чисел. вывести наибольшее число из этого массива

// const array = [2, -65, 7, 1, 26, 48, -93, 58, 9, 10];
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//     max = array[i];
//     }
// }
// console.log(`наибольшее число ${max}`);

// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%
// const array = [2, 5, 7, 1, 50, 63, 35, 58, 9, 10];
// let max = array[0];
// let sum = 0;
// let maxIndex;

//     for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//         maxIndex = i;
//         }
//     }
//     for (let i = 0; i < array.length; i++) {
//         if (i === maxIndex) {
//             continue;
//         }
//         if (array[i] >= max - max/10) {
//         sum++;
//         }
//     }
//  console.log(`кол-во эл-тов, отличных от наиб-го не более чем на 10% ${sum}`);

// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива

// const array = [1, -65, 7, 1, 26, 48, -93, 58, 9, 11];
// let maxEven;
// for (let i = 0; i < array.length; i++) {
//     if (array[i]%2 ===0) {
//         maxEven = array[i];
//         break;
//     } 
// }
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxEven && array[i]%2 === 0)
//     maxEven = array[i];
// }
// console.log(`наибольший чётный элемент ${maxEven}`);

// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких  элементов несколько, вывести несколько)

// const array = [5, -65, 7, 1, 26, 48, 26, 58, 26, 10];
// const secondArray = new Array(10);
// let n = +prompt('введите число');
// n = Math.abs(n);
// let currentRaznica;
// let minRaznica = n - Math.abs(array[0]);
// minRaznica = Math.abs(minRaznica);
// secondArray[0] = minRaznica;

// for (let i = 1; i < array.length; i++) {
//     currentRaznica = n - Math.abs(array[i]);
//     currentRaznica = Math.abs(currentRaznica);

//     if (currentRaznica < minRaznica) {
//         minRaznica = currentRaznica;
//     }
//     secondArray[i] = currentRaznica;
// }
// for (let i = 0; i < secondArray.length; i++) {
//     if (secondArray[i] === minRaznica) {
//         console.log(secondArray[i]);
//     }
// }

   
     










// 1. Написать функцию, которая принимает массив и степень. 
// Функция возвращает массив, в котором каждое число 
// массива возведено в указанную степень

// function exponentiate (arr, stepen) {
//    for (let i = 0; i < arr.length; i++) {
//    arr[i] = arr[i]**stepen;    
//    }
//     return arr;   
// }
// console.log(exponentiate([5,2,3564,54,54,5545,4,554], 5)); 


// 2. Написать функцию, которая принимает число дня недели и возвращает 
// его название, если введено число больше 7 или меньше 1 вернуть 
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет 
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели».

// function dayOfWeek(dayUser) {
//     switch (dayUser) {
//         case 1:
//             return "понедельник"; 
//         case 2:
//             return "вторник";         
//         case 3:
//             return "среда"; 
//         case 4:
//             return "четверг"; 
//         case 5:
//             return "пятница"; 
//         case 6:
//             return "суббота"; 
//         case 6:
//             return "воскресенье"; 
//         default:
//             return "Нет такого дня недели";
//     }    
// }
// let dayUser = +prompt("введите номер недели");
// console.log(dayOfWeek(dayUser));


// 3. Написать функцию, которая принимает два числа (n1 и n2) и 
// возвращает массив (8 элементов) из этих чередующихся чисел. 
// Например, передаем два числа arrMaker(2,5), функция вернет массив 
// [2,5,2,5,2,5,2,5]

// const arr = [];
// function arrMaker(a,b) {
//     for (let i = 0; i < 4; i++) {
//         arr.push(a,b);        
//     }
//    return arr;
// }
// console.log(arrMaker(2,5));


// 4. Написать функцию, которая возвращает годовую оценку по предмету. 
// Функция принимает 4 оценки за четверти и возвращает годовую. В 
// начале программы пользователя спршивают оценки за четверти в 
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и 
// т.д. В конце работы программы выводится сообщение «ваша годовая 
// оценка N»

// function grade(a,b,c,d) {    
//     const result = (a + b + c + d) / 4;
//     return  "ваша годовая оценка " + result; 
// }
// grade(2,34,234,23);
// let one = +prompt("введите оценку за 1 четверть");
// let two = +prompt("введите оценку за 2 четверть");
// let three = +prompt("введите оценку за 3 четверть");
// let four = +prompt("введите оценку за 4 четверть");
// console.log(grade(one, two, three, four));


// 5. Напишите функцию, которая возвращает процент побед и процент 
// поражений в контру или доту. Функция принимает два параметра: 
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы: 
// myStats(352,211), это значит было 352 победы и 211 поражений. 
// Функция возвращает сообщение «ваш процент побед - 62%, 
// поражений – 38%».

// function myStats(victory, defeat) {
//     let result1 = Math.round(victory / (victory + defeat) * 100);
//     let result2 = Math.round(defeat / (victory + defeat) * 100);
//     return "ваш процент побед - " + result1 + "%, поражений – " + result2 + "%";
// }
// console.log(myStats(352, 211));


// 6. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, 
// которая вернет массив только из тех чисел, которые 
// повторялись в исходном. Массив, который возвращает 
// функция [1,4,6,74]
// function newArr(arr) {
//     const arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(arr[i], i+1) && !arr2.includes(arr[i])) {            
//             arr2.push(arr[i]);
//         }        
//     }
//     return arr2;
// }
// console.log(newArr([1,1,1,4,4,5,1,6,6,74,74,74,3]));


// 7. Написать функцию, которая принимает случайный 
// двумерный массив (разной длины) из 8 элементов. Функция 
// возвращает тот массив сумма элементов которого 
// наибольшая

// (function () {
//     const arr = new Array(8);    
//     let arrSum = [];
//     let sum;
//     for (let i = 0; i < arr.length; i++) {
//         let randomLength = Math.ceil(Math.random() * 5);        
//         arr[i] = new Array(randomLength);   
//         if (arr[i].length < 2) {
//             arr[i].push(randomLength);
//         }
//         for (let j = 0; j < arr[i].length; j++) {
//             arr[i][j] = Math.ceil(Math.random() * 10);                          
//         }   
//     }   
//     console.log(arr);
//         for (let i = 0; i < arr.length; i++) {
//             sum = 0;
//             for (let j = 0; j < arr[i].length; j++) {
//                 sum += arr[i][j]; 
//                 arrSum[i] = sum;         
//             }             
//         }  console.log(arrSum);
//     let maxSumIndex = arrSum.indexOf(Math.max(...arrSum));
//     console.log(maxSumIndex);
//     let maxSumArr = [...arr[maxSumIndex]];
//     console.log(maxSumArr);
//     return maxSumArr;        
// }) ()


// 8. Написать программу, которая спрашивает у пользователя сколько ему 
// лет. В программе должна присутствовать функция validator(), которая 
// проверяет введенное число. Если validator() вернет true, то возраст 
// можно выводить на экран в виде “Вам N лет”. Функция validator() 
// должна проверять, чтобы введенный возраст не был отрицательным, 
// меньше 5 лет и больше 100, чтобы возраст не был строкой, и не был 
// null или undefined.

// function validator(age) {
//     if (age !== undefined) {
//         if (age >= 5 && age <= 100) {
//             console.log(`Вам ${age} лет`);
//         } else  if (age === null) {
//             console.log('Вы нажали отмену, введите еще раз Ваш возраст');
//         } else if (age < 0) {
//             console.log('Вы ввели отрицательное число');
//         } else if (age < 5 || age > 100) {
//             console.log(`Вы слишком молоды или слишком стары для этого приложения`);
//         } else if (age !== Number) {
//             console.log('Вы указали данные в неправильном формате, введите еще раз Ваш возраст в форме числа');
//         } 
//     }
// }
// let userAge = prompt('сколько Вам лет?');
// validator(userAge);


// 9. Написать компьютерную игру «отгадай число». Игра на двух игроков. 
// Сначала игрок1 указывает максимальное число(max) до которого 
// можно загадывать. Потом игрок2 указывает число n от 1 до max.
// Игрок1 пытается отгадать число n, если не угадал выводится 
// сообщение «Загаданное число меньше указанного вами» или 
// «Загаданное число больше указанного вами». Выигрывает тот игрок, 
// который за наименьшее количество попыток отгадает число. 

// function game(player1, player2) {
//     (function () {
//         let max1 = +prompt(`${player1} введите максимальное число, до которого можно угадывать`);
//         let num1 = +prompt(`${player2} введите число от 1 до ${max1}`);
//         let sum1 = 0;
//         for ( ; ; ) {
//             let userNum1 = +prompt(`${player1} введите число`);
//             if (userNum1 === num1) {
//                 console.log('Вы угадали');
//                 sum1++;
//                 break;
//             } else if (userNum1 < num1) {
//                 console.log('Загаданное число больше указанного Вами');
//                 sum1++;
//             } else if (userNum1 > num1) {
//                 console.log('Загаданное число меньше указанного Вами');
//                 sum1++;
//             }                             
//         } console.log(sum1);
//         let max2 = +prompt(`${player2} введите максимальное число, до которого можно угадывать`);
//         let num2 = +prompt(`${player1} введите число от 1 до ${max2}`);
//         let sum2 = 0;
//         for ( ; ; ) {
//             let userNum2 = +prompt(`${player2} введите число`);
//             if (userNum2 < num2) {
//                 console.log('Загаданное число больше указанного Вами');
//                 sum2++;
//             } else if (userNum2 > num2) {
//                 console.log('Загаданное число меньше указанного Вами');
//                 sum2++;
//             }  else if (userNum2 === num2) {
//                 console.log('Вы угадали');
//                 sum2++;
//                 break;
//             }                          
//         } console.log(sum2);
//         if (sum1 > sum2) {
//             console.log(`${player2} поздравляем, Вы победили!!!`);
//         }
//         if (sum1 < sum2) {
//             console.log(`${player1} поздравляем, Вы победили!!!`);
//         }
//         if (sum1 === sum2) {
//             console.log(`Боевая ничья`);
//         }
//     }) ();
// }
// let userName1 = prompt('Игрок №1 введите Ваше имя');
// let userName2 = prompt('Игрок №2 введите Ваше имя');
// game(userName1, userName2);
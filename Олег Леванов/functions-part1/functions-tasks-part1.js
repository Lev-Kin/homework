// 1. Написать функцию, которая принимает массив и степень. 
// Функция возвращает массив, в котором каждое число 
// массива возведено в указанную степень
// let arr = new Array(10);
// let max = 100;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * 100 + 1);
// }

// let power = 2;

// // raiseArrayElementInPower
// const arrResult = function (arr, power) {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//         array[i] = Math.pow(arr[i], power);
//     }
//     return array;
// };

// console.log(arr);
// console.log(arrResult(arr, power));

// 2. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели».

// const dayOfWeek = function (numberDay) {

//     switch (numberDay) {
//         case 1:
//             return 'Понедельник.';

//         case 2:
//             return 'Вторник.';

//         case 3:
//             return 'Среда.';

//         case 4:
//             return 'Четверг.';

//         case 5:
//             return 'Пятница.';

//         case 6:
//             return 'Суббота.';

//         case 7:
//             return 'Воскресенье.';

//         default:
//             return 'Нет токой цифры для дня недели\nМожет быть от (1 - 7)';

//     }
// };

// console.log(dayOfWeek(3));
// console.log(dayOfWeek(8));

// 3. Написать функцию, которая принимает два числа (n1 и n2) и
// возвращает массив (8 элементов) из этих чередующихся чисел.
// Например, передаем два числа arrMaker(2,5), функция вернет массив
// [2,5,2,5,2,5,2,5]

// const arrayAlternatingNumbers = function (n1, n2) {
//     let arr = new Array(8);

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             arr[i] = n1;
//         } else {
//             arr[i] = n2;
//         }
//     }

//     return arr;
// };

// console.log(arrayAlternatingNumbers(2, 5));


// 4. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N»

// let arrGrade = [];
// let count = 0;
// do {
//     arrGrade[count] = +prompt(`Введите оценку за ${count + 1} четверть`);

//     if (arrGrade[count] != 0 && !isNaN(arrGrade[count])) {
//         count++;
//     } else {
//         alert(`Некорректный ввод числа!`)
//     }

// } while (count != 4);

// function calculateSubjectGradeOfTheYear([...arrGrade]) {

//     let sum = 0;
//     for (let index = 0; index < arrGrade.length; index++) {
//         sum += arrGrade[index];
//     }

//     return Math.round(sum / arrGrade.length);
// }

// let result = calculateSubjectGradeOfTheYear(arrGrade);
// alert(`Ваша годовая оценка ${result}.`);

// 5. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%».

// function myStats(win, lose) {
//     let onePersentAllGames = (win + lose) / 100;

//     let str = `ваш процент побед - ${Math.floor(win / onePersentAllGames)}%, ` +
//         `поражений – ${Math.ceil(lose / onePersentAllGames)}%`;

//     return str;
// }

// console.log(myStats(352, 211));

// 6. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74]
// [1, 1, 2, 2, 3].filter((element, index, array) => array.indexOf(element) !== index) // [1, 2]
let arr = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

function leaveOnlyDuplicateNumbers([...arr]) {

    let arrTemp = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (!(arrTemp.indexOf(arr[i]) > -1) && !(arr[i] != arr[i + 1])) {
            arrTemp.push(arr[i]);
        }
    }

    return arrTemp;
}

console.log(leaveOnlyDuplicateNumbers(arr));
console.log(arr);

// 1. Написать функцию, которая принимает массив и степень. 
// Функция возвращает массив, в котором каждое число 
// массива возведено в указанную степень

// function degreeNumForArray (arrayOfNumbers, degree){
//     let newArray = [];
//     for (let i = 0; i < arrayOfNumbers.length; i++){
//         newArray.push(arrayOfNumbers[i]**degree);
//     }
//     return newArray;
// }
// console.log(degreeNumForArray([2, 4, 6, 10] , 3));

// 2. Написать функцию, которая принимает число дня недели и возвращает 
// его название, если введено число больше 7 или меньше 1 вернуть 
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет 
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели».

// function dayOfWeek (numberOfDay){
//     switch (numberOfDay) {
//         case 1: 
//             return 'Понедельник';
//         case 2:
//             return 'Вторник';
//         case 3:
//             return 'Среда';
//         case 4:
//             return 'Четверг';
//         case 5:
//             return 'Пятница';
//         case 6:
//             return 'Суббота';
//         case 7:
//             return 'Воскресенье';
//         default:
//             return 'Нет такого дня недели';
//     }
// }
// console.log(dayOfWeek(+prompt('Введите номер дня недели')));


// 3. Написать функцию, которая принимает два числа (n1 и n2) и 
// возвращает массив (8 элементов) из этих чередующихся чисел. 
// Например, передаем два числа arrMaker(2,5), функция вернет массив 
// [2,5,2,5,2,5,2,5]

// function twoNumbersForArray (firstNum, secondNum){
//     let arrayOfNumbers = [];
//     for (let i = 0; i < 4; i++){
//         arrayOfNumbers.push(firstNum);
//         arrayOfNumbers.push(secondNum);
//     }
//    return arrayOfNumbers;
// }
// console.log(twoNumbersForArray(2,66));

// 4. Написать функцию, которая возвращает годовую оценку по предмету. 
// Функция принимает 4 оценки за четверти и возвращает годовую. В 
// начале программы пользователя спршивают оценки за четверти в 
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и 
// т.д. В конце работы программы выводится сообщение «ваша годовая 
// оценка N»

// function counterYearsMark (firstMark, secondMark, thirdMark, fourthMark){
//     yearsMark = (firstMark + secondMark + thirdMark + fourthMark) / arguments.length;
//     yearsMark = Math.round(yearsMark);
//     let message = alert (`Ваша годовая оценка ${yearsMark}`);
//     return message;
// }
// console.log(counterYearsMark(+prompt('Введите оценку за 1 четверть'), +prompt('Введите оценку за 2 четверть'), +prompt('Введите оценку за 3 четверть'), +prompt('Введите оценку за 4 четверть')));

// 5. Напишите функцию, которая возвращает процент побед и процент 
// поражений в контру или доту. Функция принимает два параметра: 
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы: 
// myStats(352,211), это значит было 352 победы и 211 поражений. 
// Функция возвращает сообщение «ваш процент побед - 62%, 
// поражений – 38%».

// function procentVictoryandDefeat (victory, defeat) {
//     let sumStats = victory + defeat;
//     let procentVictory = victory / sumStats * 100;
//     procentVictory = Math.round(procentVictory);
//     let procentDefeat = defeat / sumStats * 100;
//     procentDefeat = Math.round(procentDefeat);
//     let message = alert (`Ваш процент побед - ${procentVictory}%, поражений - ${procentDefeat}%`);
//     return message;
// }
// console.log(procentVictoryandDefeat(352, 211));

// 6. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, 
// которая вернет массив только из тех чисел, которые 
// повторялись в исходном. Массив, который возвращает 
// функция [1,4,6,74]
// let arrNum = [1,1,1,4,4,5,1,6,6,74,74,74,3];
// function arrWithoutRepeatNum (arrNum){
//     let firstElement = arrNum[0];
//     let newArray = [];
//     for (let i = 1; i < arrNum.length; i++){
//         if (firstElement === arrNum[i] && !newArray.includes(arrNum[i])) {
//             newArray.push(firstElement);
//         }
//         firstElement = arrNum[i];
//     }
//     return newArray;
// }
// console.log(arrWithoutRepeatNum(arrNum));

// 7. Написать функцию, которая принимает случайный 
// двумерный массив (разной длины) из 8 элементов. Функция 
// возвращает тот массив сумма элементов которого 
// наибольшая
// let arr = [
//     [1,2], 
//     [2, 55], 
//     [1, 2, 3], 
//     [60, 99], 
//     [1, 2, 6, 7, 8], 
//     [3,5, 10, 77], 
//     [5, 9], 
//     [1, 20, 3]
// ];

// const resultFunction = function (someArr) {
//     const sumAllElementsOfArr = someArr.map ((item, index, mass) => {
//         let firstValue = 0;
//         for(let i = 0; i < mass[index].length; i++){
//             firstValue += mass[index][i];
//         }
//         return firstValue;
//     });
//     let bigNum = 0;
//     const findTheBiggestNum = sumAllElementsOfArr.reduce((maxNumIndex, item, index) => {
//         if(bigNum < item){
//             bigNum = item;
//             maxNumIndex = index;
//          }
//         return maxNumIndex;
//     }, 0);

//     return someArr[findTheBiggestNum];
// };
// console.log(resultFunction(arr));

// 8. Написать программу, которая спрашивает у пользователя сколько ему 
// лет. В программе должна присутствовать функция validator(), которая 
// проверяет введенное число. Если validator() вернет true, то возраст 
// можно выводить на экран в виде “Вам N лет”. Функция validator() 
// должна проверять, чтобы введенный возраст не был отрицательным, 
// меньше 5 лет и больше 100, чтобы возраст не был строкой, и не был 
// null или undefined.

// let yourAge = +prompt('Введите ваш возраст');
// function validator(yourAge){
//     return (yourAge && yourAge >= 5 && yourAge <= 100)
// }
// if (validator(yourAge)){
//     alert(`Вам ${yourAge} лет`);
// }


// 9. Написать компьютерную игру «отгадай число». Игра на двух игроков.
// Сначала игрок1 указывает максимальное число(max) до которого
// можно загадывать. Потом игрок2 указывает число n от 1 до max.
// Игрок1 пытается отгадать число n, если не угадал выводится
// сообщение «Загаданное число меньше указанного вами» или
// «Загаданное число больше указанного вами». Выигрывает тот игрок,
// который за наименьшее количество попыток отгадает число.

function inputMaxNumber(nameForFirstPlayer, nameForFirstPlayer){
    let maxNumber1 = +prompt(`${nameForFirstPlayer}, введите максимальное число`);
    let maxNumber2 = +prompt(`${nameForSecondPlayer}, введите максимальное число`);
    return [maxNumber1, maxNumber2];
}

function checkNumberForTwoGamers(numForGamer, maxNumInputPlayer){
    for ( ; numForGamer < 1 || numForGamer > maxNumInputPlayer; ){
        alert('Вы ввели некорректное число');
        numForGamer = +prompt('Еще раз введите число');
    }
    return numForGamer;
}

function outputMaxNumIntoGame (maxNumberOfFirstPlayer, maxNumberOfSecondPlayer, nameForFirstPlayer, nameForSecondPlayer) {
    const numForFirstGamer = checkNumberForTwoGamers(+prompt(`${nameForSecondPlayer}, загадайте число от 1 до ${maxNumberOfFirstPlayer}`), maxNumberOfFirstPlayer);
    const numForSecondGamer = checkNumberForTwoGamers(+prompt(`${nameForFirstPlayer}, загадайте число от 1 до ${maxNumberOfSecondPlayer}`), maxNumberOfSecondPlayer);
    return [numForFirstGamer,numForSecondGamer];
}

function playingGamer(guessNum, numForGamer, nameGamer){
    if (guessNum !== numForGamer){
        guessNum = +prompt(`Угадывайте число, ${nameGamer}`);
        if (guessNum < numForGamer){  
            alert('Загаданное число больше указанного вами');
        } else if (guessNum > numForGamer){
            alert('Загаданное число меньше указанного вами');
        } else {
            alert('Верно!');
        }
    }
    return guessNum;
}

function processOfGame(numberForFirstPlayer, numberForSecondPlayer, counterFirstPlayer, counterSecondPlayer, nameForFirstPlayer, nameForSecondPlayer) {
    let tryNumFirstPlayer;
    let tryNumSecondPlayer;
    for ( ; tryNumFirstPlayer !== numberForFirstPlayer || tryNumSecondPlayer !== numberForSecondPlayer; ){
        tryNumFirstPlayer = playingGamer(tryNumFirstPlayer, numberForFirstPlayer, nameForFirstPlayer);
        tryNumFirstPlayer !== numberForFirstPlayer ? counterFirstPlayer++ : false;
        tryNumSecondPlayer = playingGamer(tryNumSecondPlayer, numberForSecondPlayer, nameForSecondPlayer);
        tryNumSecondPlayer !== numberForSecondPlayer ? counterSecondPlayer++ : false;
     }
     return [counterFirstPlayer, counterSecondPlayer];
}

const game = function () {   
    let nameFirstGamer = 'Игрок 1';
    let nameSecondGamer = 'Игрок 2';
    const [maxNumInputFirstPlayer, maxNumInputSecondPlayer] = inputMaxNumber(nameFirstGamer, nameSecondGamer)
    const [numForFirstGamer, numForSecondGamer] = outputMaxNumIntoGame (maxNumInputFirstPlayer, maxNumInputSecondPlayer, nameFirstGamer, nameSecondGamer);
    const [counterFirstPlayerForChecking, counterSecondPlayerForChecking] = processOfGame(numForFirstGamer, numForSecondGamer, 1, 1, nameFirstGamer, nameSecondGamer);
    if (counterFirstPlayerForChecking < counterSecondPlayerForChecking){
        alert(`${nameFirstGamer}, вы выиграли за ${counterFirstPlayerForChecking} попыток`);
    } else if (counterSecondPlayerForChecking < counterFirstPlayerForChecking){
        alert(`${nameSecondGamer}, вы выиграли за ${counterSecondPlayerForChecking} попыток`);
    } else if (counterFirstPlayerForChecking === counterSecondPlayerForChecking){
        alert('Ничья!!!');
    }
    let gameOver = 'GAME OVER';
    return gameOver;
};

console.log(game());


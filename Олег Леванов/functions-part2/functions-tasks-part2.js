// 7. Написать функцию, которая принимает случайный
// двумерный массив (разной длины) из 8 элементов. Функция
// возвращает тот массив сумма элементов которого
// наибольшая

// let arr = [];
// let max = 100;
// let min = -100;
// let countElement = 8;
// for (let i = 0; ; i++) {
//     if (countElement === 0) { break; }

//     arr[i] = [];
//     for (let j = 0; j < Math.floor(Math.random() * countElement) + i + countElement; j++) {
//         if (countElement === 0) { break; }

//         arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
//         countElement--;
//     }
// }
// console.log(arr);

// function getArrayMaxSum([...arr]) {

//     let arrResult = [];
//     let arrSum = [];
//     let k = 0;
//     for (let i = 0; i < arr.length; i++) {
//         arrSum[k] = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             arrSum[k] += arr[i][j];
//         }
//         k++;
//     }

//     let indexMaxSumArray = arrSum.indexOf(Math.max(...arrSum));

//     for (let i = 0; i < arr[indexMaxSumArray].length; i++) {
//         arrResult.push(arr[indexMaxSumArray][i]);
//     }

//     return arrResult;
// }
// console.log(getArrayMaxSum(arr));

// 8. Написать программу, которая спрашивает у пользователя сколько ему
// лет. В программе должна присутствовать функция validator(), которая
// проверяет введенное число. Если validator() вернет true, то возраст
// можно выводить на экран в виде “Вам N лет”. Функция validator()
// должна проверять, чтобы введенный возраст не был отрицательным,
// меньше 5 лет и больше 100, чтобы возраст не был строкой, и не был
// null или undefined.

// let age = prompt(`Сколько вам лет?`);

// function validator(value) {

//     if (isNaN(Number(value)) || Number(value) < 5 || Number(value) > 100) {
//         return false;
//     }

//     if (value === null || value === '') {
//         return false;
//     }

//     return true;
// }

// if (validator(age)) {
//     alert(`Вaм ${age} лет.`)
// }

// 9. Написать компьютерную игру «отгадай число». Игра на двух игроков.
// Сначала игрок1 указывает максимальное число(max) до которого
// можно загадывать. Потом игрок2 указывает число n от 1 до max.
// Игрок1 пытается отгадать число n, если не угадал выводится
// сообщение «Загаданное число меньше указанного вами» или
// «Загаданное число больше указанного вами». Выигрывает тот игрок,
// который за наименьшее количество попыток отгадает число.

function isValid(value) {
    if (isNaN(+value) || +value <= 0 ||
        value === null || value === '') {
        return false;
    }

    return true;
}

function getNumber(message) {
    let inputUserNumber;
    do {
        inputUserNumber = prompt(message);
    } while (!isValid(inputUserNumber));

    return Number(inputUserNumber);
}

function getMessageAboutYouNumber(secretNumber, number) {
    if (secretNumber < number) {
        return 'Загаданное число меньше указанного вами.';
    } else if (secretNumber > number) {
        return 'Загаданное число больше указанного вами.';
    }

    return 'Введенное число равно загаданному числу.';
}

function startGameGuessNumber() {

    const playerOneMaxNumber =
        getNumber(`Игрок1 укажите максимальное число(max)\n` + `до которого можно загадывать.`);

    let playerTwoSecretNumber;
    do {
        playerTwoSecretNumber =
            getNumber(`Игрок2 укажите число n от 1 до ${playerOneMaxNumber}.\nКоторое нужно отгадывать.`);

        if (playerTwoSecretNumber > playerOneMaxNumber) {
            alert(`Число должно быть меньше ${playerOneMaxNumber} (max)`);
        }

    } while (playerTwoSecretNumber > playerOneMaxNumber);

    let timesGuess = 1;
    while (true) {

        let playerGuessNumber;
        do {
            playerGuessNumber = prompt(`Угадай число.`);

            if (playerGuessNumber === null) {
                alert('Вы проиграли!\nВы сдались.');
                return;
            }

        } while (!isValid(playerGuessNumber));

        playerGuessNumber = Number(playerGuessNumber);
        if (
            getMessageAboutYouNumber(playerTwoSecretNumber, playerGuessNumber) ===
            'Введенное число равно загаданному числу.'
        ) {

            if (
                confirm
                    (
                        `Вы выиграли!\n` +
                        `Вы сделали ${timesGuess} попытки.\n` +
                        `Начать новую игру нажмите ОК.\n` +
                        `Завершить игру нажмите ОТМЕНА.`
                    )
            ) {
                return startGameGuessNumber();
            } else {
                return;
            }

        } else {
            alert(getMessageAboutYouNumber(playerTwoSecretNumber, playerGuessNumber));
        }

        timesGuess++;
    }
}

startGameGuessNumber();


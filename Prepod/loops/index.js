// while () {}
// do {} while ()
// for () {}

// while (condition) { // со временем должен становиться ложью
//     loop body
// }

// let i = 5;

// while ( i >= 0 ) {
//     console.log(i);
//     i--;
// }


// let i;

// do {
//     i = +prompt('ВВЕДИТЕ 5 !!!');
// } while (i !== 5)


// for (let i; i !== 5; ) {
//     i = +prompt('5');
// }

// for (let i = 0; i <= 10; i++) {

//    console.log('before continue');

//     if ( i === 4 ) {
//         break;
//     }

//     console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 5; j++) {
//         console.log(`${i}.${j}`);
//     }
// }

// for (let i = 1; i <= 5;  i++) {
//     for (let j = 1; j < 5; j++) {
//         if (i === 3 || j === 3) {
//             continue;
//         }
//         console.log(`${i}.${j}`);
//     }
// }

// написать программу которая выводит на экран
// ДВУЗНАЧНЫЕ числа, которые делятся на 4 но не делятся на 6

// 1. написать программу в которой пользователя просят ввести числа 5 раз
// причем каждое последующее должно быть больше ПРЕДЫДУЩЕГО
// если пользователь нарушил это правило то прекратить ввод и вывести алертом
// сообщение об ошибке
// если все 5 чисел были больше предыдущего вывести алертом сообщение об суспехе

// let currentUserNumber;
// let previousUserNumber = +prompt('enter number');

// for (let i = 0; i <= 5; i++) {
//     if (i === 5) {
//         alert('УСПЕШНЫЙ УСПЕХ!');
//         break;
//     }
//     currentUserNumber = +prompt('enter number');

//     if (currentUserNumber < previousUserNumber) {
//         alert('ERROR!');
//         break;
//     }   
    
//     previousUserNumber = currentUserNumber;
// }

// 2. написать программу заику, пользователь вводит число
// вывести в консоль столько "за" скоклько ввел пользователь
// например пользователь вводит 3
// вывод в консоли "зазазаика"
// зазазазазаика

// let userNumber = +prompt('how many za');
// let zaika = '';

// for (let i = 0; i < userNumber; i++) {
//     zaika = `${zaika}za`;
// }

// console.log(`${zaika}ika`);

// 0. zaika = `za`
// 1. zaika = `zaza`;
// 2. zaika = `zazaza`;
// 3. zaika = `zazazaza`;
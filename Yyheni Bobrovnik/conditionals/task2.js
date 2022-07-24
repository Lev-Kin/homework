/* 1. Пользователь вводит 3 числа, вывести на
экран наибольшее из этих 3х чисел

let userNamber1 = +prompt('Введите число 1');
let userNamber2 = +prompt('Введите число 2');
let userNamber3 = +prompt('Введите число 3');

console.log(Math.max(userNamber1, userNamber2, userNamber3));

*/

// 2. Пользователь вводит номер дня недели,
// вывести на экран название этого дня.


let dayOfTheWeek = +prompt('Введите день недели');

if (dayOfTheWeek === 1) {
    console.log('Понедельник');
} else if (dayOfTheWeek === 2) {
    console.log('Вторник');
} else if (dayOfTheWeek === 3) {
    console.log('Среда');
} else if (dayOfTheWeek === 4) {
    console.log('Четверг');
} else if (dayOfTheWeek === 5) {
    console.log('Пятница');
} else if (dayOfTheWeek === 6) {
    console.log('Суббота');
} else if (dayOfTheWeek === 7) {
    console.log('Воскресенье');
} else {
    console.log('Введите день недели числом от 1 до 7');
}
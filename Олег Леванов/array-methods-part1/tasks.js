// Даны 2 массива:
let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// let inputName = prompt("Введите имя");
// if (people1.includes(inputName)) {
//     people2.push(inputName);
// }
// console.log(people2);

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// let inputName = prompt("Введите имя");
// if (people2.includes(inputName)) {
//     people2.splice(people2.indexOf(inputName), 1);
// }
// console.log(people2);

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// let arrResult = [];
// for (let i = 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         arrResult.push(people1[i]);
//     }
// }
// console.log(arrResult);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
let arrResult = [];
for (let i = 0; i < people1.length; i++) {
    if (!people2.includes(people1[i])) {
        arrResult.push(people1[i]);
    }
}
arrResult.push(...people2);

console.log(arrResult);

// 5. Отсортируйте получившийся массив по алфавиту
arrResult.sort();
console.log(arrResult);

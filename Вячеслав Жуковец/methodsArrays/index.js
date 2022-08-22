// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let serchh = prompt('Введите имя');

//     if (people1.includes(serchh)){
//         people2.push(serchh);
//     } 
    
// console.log(people2);

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let serchh = prompt('Введите имя');

// let ser = people2.indexOf(serchh);
//     if (ser !== -1){
//         people2.splice(ser,1);
//     }    
// console.log(people2);

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let people3 = [];

// for (let i = 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         people3.push(people1[i]);
//     }
// }
// console.log(people3);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let people3 = [];

// for (let i = 0; i < people1.length; i++) {
//     if (!people2.includes(people1[i])) {
//         people3.push(people1[i]);
//     }
// }
// for (let j = 0; j < people2.length; j++) {
//     if (!people1.includes(people2[j])) {
//         people3.push(people2[j]);
//     }
// }
// console.log(people3);

// 5. Отсортируйте получившийся массив по алфавиту

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let people3 = [];

// for (let i = 0; i < people1.length; i++) {
//     if (!people2.includes(people1[i])) {
//         people3.push(people1[i]);
//     }
// }
// for (let j = 0; j < people2.length; j++) {
//     if (!people1.includes(people2[j])) {
//         people3.push(people2[j]);
//     }
// }
// console.log(people3.sort());
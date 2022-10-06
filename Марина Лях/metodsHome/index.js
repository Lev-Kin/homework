// 1. Пользователь вводит имя, если это имя есть в массиве people1,
//  добавьте это имя в конец people2.

// let userName = prompt('введите имя');
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
//     if (people1.includes(userName)){
//         people2.push(userName);
//     }
// console.log(people2);

// 2. Пользователь вводит имя, если это имя есть в массиве people2, 
// удалите это имя из массива.

// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let userName = prompt('введите имя');
// if (people2.includes(userName)){
//     const index = people2.indexOf(userName, 0);
//     people2.splice(index, 1);
// }
// console.log(people2);


// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let arr3 = [];
// let arr3IndexCouner = 0;
//     for (i = 0; i <people1.length; i++){
//     for (let j = 0; j<people2.length; j++) {
//         if (people1[i] === people2[j]) {
//             arr3[arr3IndexCouner] = people2[j];
//             arr3IndexCouner++;
//         }
//     }
//     }
// console.log(arr3);

// 4. Объедините массивы people1 и people2 так, 
// чтобы в получившемся массиве не было одинаковых имен.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let counter = 0;
// for (let i = 0; i < people1.length - counter; i++) {
//     for (let j = 0; j < people2.length; j++) {
//         if (people1[i] === people2[j]) {
//             people1.splice(i, 1);
//             counter++;
//             i--;
//             break;
//         }
//     }
// }
// let array = people1.concat(people2);
// console.log(array);


// 5. Отсортируйте получившийся массив по алфавиту

// console.log(array.sort());




// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arrNew = arr.splice(arr.indexOf('David'), arr.indexOf('Eddie') - 1);
// console.log(arrNew);


// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr = arr.slice(arr.indexOf('Janett'), arr.indexOf('Franz') + 1).concat(arr.slice(0,arr.indexOf('Janett')));
// console.log(arr);

// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.splice(arr.indexOf('Eddie'), 1, 'Oleg');
// arr.splice(arr.indexOf('Janett'), 1, 'Valerchik');
// console.log(arr);

// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.reverse();
// arr.splice(0, 4, 'Mitrofan', 'Mitrofan', 'Mitrofan', 'Mitrofan');
// console.log(arr);


// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]
// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

// let arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
// arr1 = arr1.concat(arr2.slice(arr2.indexOf('Aristarkh')));
// console.log(arr1);

// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

//DONE 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

// let enterName = prompt('Please enter name');
//
// for (let i = 0; i < people1.length; i++) {

//     if (enterName === people1[i]) {
//         people2.push(people1[i])
//     }
//
// };
//
// console.log(people2);


// DONE 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// let enterName = prompt('Please enter name');
//
// if (people2.includes(enterName)) {
//     people2.splice(people2.indexOf(enterName), 1)
// }
//
// console.log(people2);


// DONE 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// let newPeople = [];
//
// for (let i = 0; i < people1.length; i++) {
//
//     if (people1.includes(people2[i])) {
//         newPeople.push(people2[i])
//     }
// };
//
// console.log(newPeople);


// DONE 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
//
// let resultAll = people1.concat(people2);
//
// for (let i = 0; i < people1.length; i++) {
//
//     if(people2.includes(people1[i])){
//
//         let resultNew = resultAll.indexOf(people1[i])
//         resultAll.splice(resultNew, 1)
//     }
//
// };
//
// console.log(resultAll);
//

// DONE 5. Отсортируйте получившийся массив по алфавиту

// let result1 = people1.sort();
// console.log(result1);
//
// let result2 = people2.sort();
// console.log(result2);


// DONE/ 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// const somePeople = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//
// const result = somePeople.slice(2, 5);
// console.log(result);


// DONE 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

// const somePeople = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//
// somePeople.unshift(...somePeople.splice(5, 1));
// somePeople.unshift(...somePeople.splice(6, 1));
//
// console.log(somePeople);


// DONE 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"
//
// const somePeople = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//
// let resultFirst = somePeople.indexOf("Eddie");
// somePeople.splice(resultFirst, 1, "Oleg");
//
// let resultTwo = somePeople.indexOf("Janett");
// somePeople.splice(resultTwo, 1, "Valerchik");
//
// console.log(somePeople)


//DONE 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// const somePeople = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//
// let result = somePeople.reverse();
// console.log(result);
//
// let resultTwo = result.fill("Mitrofan", 0,4);
// console.log(resultTwo);


//DONE 5. Даны два массива
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]
// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

// const firstPeople = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const twoPeople = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
//
// let result = twoPeople.splice(2);
// console.log(result);
//
// let resultEnd = firstPeople.concat(result);
// console.log(resultEnd);

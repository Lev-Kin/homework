




// Даны 2 массива:
let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

let userInputName = prompt('Enter a name!');

if (people1.includes(userInputName)) {
   people2.push(userInputName);
}

console.log(people2);


// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

let userInputName = prompt('Enter a name!!!');


if (people2.includes(userInputName)) {
   people2.splice(people2.indexOf(userInputName), 1);
}

console.log(people2);

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

let people3 = [];

for (let i = 0; i < people2.length; i++) {
   if (people1.includes(people2[i])) {
      people3.push(people2[i]);
   }
}

console.log(people3);


// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

for (let i = 0; i < people2.length; i++) {

   if (people1.includes(people2[i])) {
      people2.splice(i, 1);
   }
}

let people3 = people1.concat(people2);

console.log(people3);

// 5. Отсортируйте получившийся массив по алфавиту

let sortPeopleArray = people3.sort();
console.log(sortPeopleArray);

console.log(people3);






// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

let newArr = arr.splice(2, 3);

console.log(newArr);
console.log(arr);

// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

console.log(arr.reverse());



// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

arr.splice(4, 2, "Oleg", "Valerchik");

console.log(arr);



// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

arr.reverse().splice(0, 4, "Mitrofan", "Mitrofan", "Mitrofan", "Mitrofan");

console.log(arr);

// 5. Даны два массива
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]

// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

let arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
let arr2 = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];

let arr3 = arr1.concat(arr2.slice(2));

console.log(arr3);






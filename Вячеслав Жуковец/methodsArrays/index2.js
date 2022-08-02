// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// let people1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// let people2 = people1.splice(2, 3);
// console.log(people2);

// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива

// let people = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// people.unshift(...people.splice(5, 2));
// console.log(people);

// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// let people = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// people.splice(4, 2, 'Oleg', 'Valerchik');
// console.log(people);

// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// let people = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// people.reverse().fill('Mitrofan', 0, 4);
// console.log(people);

// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]
// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

// let people1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let people2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];

// people1.push(...people2.slice(2,3));
// console.log(people1);

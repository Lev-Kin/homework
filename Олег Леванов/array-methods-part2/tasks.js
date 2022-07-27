// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arrResult = arr.splice(arr.indexOf('David'), arr.indexOf('Eddie') - 1);
// console.log(arrResult);
// console.log(arr);

// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr = arr.slice(arr.indexOf("Janett"), arr.indexOf("Franz") + 1).concat(arr.slice(0, arr.indexOf("Janett")));
// console.log(arr);

// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.splice(arr.indexOf("Eddie"), 1, "Oleg");
// arr.splice(arr.indexOf("Janett"), 1, "Valerchik");
// console.log(arr);

// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.reverse();
// arr.splice(0, 4, "Mitrofan", "Mitrofan", "Mitrofan", "Mitrofan");
// console.log(arr);

// 5. Даны два массива
let arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
let arr2 = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];

// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

arr1 = arr1.concat(arr2.slice(arr2.indexOf("Aristarkh")));
console.log(arr1);

// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// const people3 = [];
// for (let  i= 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         people3.push(people1[i]);
//     }    
// }
// console.log(people3);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// const people4 = people1.concat(people2);
// for (let i = 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         let result = people4.indexOf(people1[i]);
//         people4.splice(result, 1); 
//     }    
// }
// console.log(people4);
// 5. Отсортируйте получившийся массив по алфавиту
// console.log(people4.sort());


// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const arr1 = [];
// let name1 = "David";
// let name2 = "Lambert";
// let name3 = "Eddie";
// let result1 = arr.indexOf(name1);
// arr.splice(result1, 1);
// let result2 = arr.indexOf(name2);
// arr.splice(result2,1);
// let result3 = arr.indexOf(name3);
// arr.splice(result3,1);
// arr1.push(name1, name2, name3); 
// console.log(arr);
// console.log(arr1);


// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let name1 = "Janett";
// let name2 = "Franz";
// let result1 = arr.indexOf(name1);
// arr.splice(result1, 1);
// let result2 = arr.indexOf(name2);
// arr.splice(result2, 1);
// arr.unshift(name1, name2);
// console.log(arr);


// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let result1 = arr.indexOf("Eddie");
// arr.splice(result1, 1, "Oleg");
// let result2 = arr.indexOf("Janett");
// arr.splice(result2, 1, "Valerchik");
// console.log(arr);


// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")
// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.reverse();
// arr.fill("Mitrofan", 0, 4);
// console.log(arr);


// 5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]
// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)
// const arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
// const varArr = arr2.slice(arr2.indexOf("Aristarkh"));
// arr1.push(...varArr);
// console.log(arr1);
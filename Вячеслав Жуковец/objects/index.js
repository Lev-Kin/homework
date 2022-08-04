// 1. создать объект subscribers с полями oldSubscribers и newSubscribers
// добавьте в объект поле allSubscribers которое должно
// хранить сумму oldSubscribers + newSubscribers
// если число allSubscribers > 700 вывести you are famous, иначе try harder

// let subscribers ={
//     oldSubscribers: 300,
//     newSubscribers: 450,
//     };

// subscribers['allSubscribers'] = subscribers['oldSubscribers'] + subscribers['newSubscribers'];
    
// if (subscribers['allSubscribers'] > 700){
//     console.log('you are famous');
// } else{
//     console.log('try harder');
// }
    
// console.log(subscribers);
    
// 2. дан массив объектов [
// {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
// ]
// используя методы массивов и циклы
// вывести в консоль 'its valid', если во всех объектах поле a > b
    
// let array = [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
//     ];
// let col = 0;

// for (let i = 0; i < array.length; i++){
//     if (array[i].a > array[i].b){
//         col++;
//     }
// }

// if (col === array.length){
//     console.log('its valid');
// } else {
//     console.log('it isnt valid');
// }
    
// 3. на основе исходного массива создать массив таких же объектов, но поле b
// должно быть возведено в квадрат
// пример: [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}]
    
// let arrOb = [
//     {a: 2, b: 1}, 
//     {a: 5, b: 12}, 
//     {a: 95, b: 7},
// ];
// let arrOb2 = [];
  
// for (let i = 0; i < arrOb.length; i++){
//     arrOb2.push({...arrOb[i] });
//     arrOb2[i].b = Math.pow(arrOb[i].b, 2);
// }

// console.log(arrOb2);
        
// 4. создать массив на основе предыдущего, в котором
// поля a и b будут последовательно помещены в массив
// пример: [ 2, 1, 5, 144, 95, 49]

// let arrOb = [
//     {a: 2, b: 1}, 
//     {a: 5, b: 144}, 
//     {a: 95, b: 49},
// ];
// let arrOb2 = [];

// for (let i = 0; i < arrOb.length; i++){
//     arrOb2.push(arrOb[i].a, arrOb[i].b);
// }

// console.log(arrOb2);




//Задачи из темы function

// 1. написать функцию, которая возращает среднее арифметическое четырёх чисел.

// function average (a,b,c,d){
//     return (a+b+c+d)/4;
// }

// console.log(average(2,4,6,8));

// 2. написать функцию, которая возращает среднее арифметическое n чисел.

// function average (j){

//     sum = 0;
//     let i = 0;

//     for ( ; (j = prompt('Введите число')) !== null ; i++ ){
//         j = +j;
//         sum = (sum + j); 
//     }

//     if (i === 0){
//         alert ('Числа введены не были!');
//     } else {
//         alert (`Среднее арифметическое ${sum/i}`);
//     }
//     return j;
// }

// console.log(average());
// 1. создать объект subscribers с полями oldSubscribers и newSubscribers
// добавьте в объект поле allSubscribers которое должно
//  хранить сумму oldSubscribers + newSubscribers
//  если число allSubscribers > 700 вывести you are famous, иначе try harder

// const subscribers = {
//    oldSubscribers: 234,
//    newSubscribers: 333,
// }

// subscribers.allSubscribers = subscribers['oldSubscribers'] + subscribers['newSubscribers']

// if (subscribers.allSubscribers > 700) {

//    console.log ('you are famous')
// } else if (subscribers.allSubscribers < 700) {

//    console.log('try harder')
// };

// console.log(subscribers);


//  2. дан массив объектов [
//     {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7}
//  ]
//  используя методы массивов и циклы
//  вывести в консоль 'its valid', если во всех объектах поле a > b

// const arrayObj = [ {a:2, b: 1}, {a:5, b:12}, {a: 95, b: 7} ];

// let count = 0;

// for (let i = 0; i < arrayObj.length; i++ ) {
//    if (arrayObj[i].a > arrayObj[i].b ){
//       ++count;
//       console.log(count);
//    }
// };

//  if (count === arrayObj.length){
//        console.log ('its valid');
//  };


//   3. на основе исходного массива создать массив таких же объектов, но поле b
//  должно быть возведено в квадрат
//  пример: [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}]

// const arrObj = [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}];
// let arrSquare = [];
//
//
// for (let i = 0; i < arrObj.length; i++) {
//
//   arrSquare.push({... arrObj[i]});
//   arrSquare[i].b = Math.pow(arrSquare[i].b, 2);
//
// }
// console.log(arrSquare);
//


// 4. создать массив на основе предыдущего, в котором
// поля a и b будут последовательно помещены в массив
// пример: [ 2, 1, 5, 144, 95, 49]

const arrObj = [{a: 2, b: 1}, {a: 5, b: 144}, {a: 95, b: 49}];

let newArr = [];

for (let i = 0; i < arrObj.length; i++) {

    newArr.push(arrObj[i].a, arrObj[i].b);
}


console.log(newArr);
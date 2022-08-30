// === Part I ===

// 1. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// const arrayName = [
//   "Олег",
//   "Игорь",
//   "Семен",
//   "Дмитрий",
//   "Антон",
//   "Семен",
//   "Андрей",
// ];

// let checkName = arrayName.some((element) => element === "Семен");
// console.log(checkName);

// 2. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// const arrNumber = [2, 1, 3, 111, 2, 2, 42, 123];
// let sum = arrNumber.reduce((acc, item) => (item % 2 ? acc : acc + item), 0);
// console.log(sum);

// 3. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// let arrNumber = [];
// for (let i = 0; i < 10; i++) {
//   arrNumber.push(prompt("Pleace enter number"));
// }
// console.log(arrNumber);

// const result = arrNumber.every((item) => !isNaN(item) && item);
// console.log(result);

// 4. Создать объект check с двумя методами:
// .checkNameLength()
// .checkIsAdult()
// создать два объекта person1 и person2 с полями name и age (задать самостоятельно)
// вызвать методы из объекта check и передать в них в качестве контекста
// person1 или person2.
// checkNameLength() должен возвращать true если поле name у объекта больше 4
// checkIsAdult() должен возвращать true если поле объекта age больше или равно 18

// const check = {
//     checkNameLength() {
//         return this.name.length > 4;
//     },
//     checkIsAdult() {
//         return this.age >= 18;
//     }
// };

// const person1 = {
//     name: 'Oleg',
//     age: 32,
// };

// const person2 = {
//     name: 'Vasenlisa',
//     age: 16,
// };

// console.log(check.checkNameLength.call(person1));
// console.log(check.checkNameLength.call(person2));
// console.log(check.checkIsAdult.call(person1));
// console.log(check.checkIsAdult.call(person2));

// 5. Создать объект person с полем name и методом eat.
// Создать массив строк food в котором перечисляется любая еда (не менее 4 наименований)
// Метод eat должен принимать строку food с названием еды и возвращать строку вида
// person.name + " eats " + food
// Используя setTimeout или setInterval запустите метод eat объекта person раз в секунду,
// передавая при этом каждый раз следующее название еды из массива.

const person = {
    name: 'Lena',
    eat(food) {
        return `${person.name} eats ${food}`;
    },
}

let food = ['sushi', 'salad', 'vodka', 'strawberry'];
let count = 0;
let id = setInterval(() => {
    console.log(person.eat(food[count++]));
}, 1000);

setTimeout(() => { clearInterval(id) }, 4000);
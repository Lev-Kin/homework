// 1. пользователь вводит число n 
// написать цикл который выводит все числа от n до 0
// (n может быть отрицательным) 

// let j= +prompt('Введите число');
// let k;

// if (j>0){
//     k = -1;
// } else {
//     k = 1;
// }

// for (j; j !== 0; j=j+k){
//     console.log(j);
// }

// console.log(j);

// let j= +prompt('Введите число');
// let k = j>0?-1:1;

// for ( ; j !== 0; j+=k){
//         console.log(j);
// }
// console.log(j);


// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n 
// (n всегда положительное) + проверить число n на число

// let j= +prompt('Введите число');
// let summ = 0;

// if (!Number.isInteger(j)){
//     alert('Некорректный ввод!');
// } else {
//     for (i=1; i<=j; i++){
//         summ = i + summ;
//     }
//         console.log(summ);
// }


// 3. написать программу воторая определяет количество 
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

// let j= +prompt('Введите количество чисел, которое намерены ввести');
// let polozhitelnyh = 0;
// let otricatelnyh = 0;
// let nuley = 0;

// for (let i = 0; i < j; i++){
//     let numbers= +prompt (`Введите число`);
//     if (numbers > 0){
//         polozhitelnyh++;
//     } else if (numbers < 0){
//         otricatelnyh++;
//     } else {
//         numbers++;
//     }
// }
// alert (`Положительных чисел ${polozhitelnyh}
//         Отрицательных чисел ${otricatelnyh}
//         Нулей ${nuley}`);


// 4. написать программу которая выводит среднее арифметическое 
// n чисел введенных пользователем. Ввод чисел прекращается когда
// нажали "отмена", после чего выводится среднее арифметическое

// sum = 0;
// let j = 0;
// let i = 0;

// for ( ; (j = prompt('Введите число')) !== null ; i++ ){
//     j = +j;
//     sum = (sum + j); 
// }
//     if (i === 0){
//         alert ('Числа введены не были!');
//     } else {
//         alert (`Среднее арифметическое ${sum/i}`);
//     }


// 5. пользователь вводит числа n и m, вывести в консоль 
// квадраты всех чисел от n до m

// let i = +prompt('Введите число n');
// let j = +prompt('Введите число m');
// k = 1;
// if (i > j){
//     k = -1;
// } else {
//     k = 1;
// }
//     for ( ;i !== j ; i = i + k ){
//     console.log(Math.pow(i,2));
// }
// console.log(Math.pow(i,2));
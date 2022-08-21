// 1. пользователь вводит число n 
// написать цикл который выводит все числа от n до 0
// (n может быть отрицательным) 

// let newUser = +prompt ("inter namber");
// for (let i = newUser; i > 0; i--) {
//     console.log (i);
// }

// 2. написать прогамму, которая вычисляет сумму чисел от 1 до n 
// (n всегда положительное) + проверить число n на число

// let newUser = +prompt ("inter namber");
// let NumSumma = 0;
// if (isNaN(newUser)){
//     console.log ("no namber");
// } else if (newUser <= 0){
//     console.log ("no ziro");
// } else if (newUser > 0){
//     for (let i = 1; i <= newUser; i++){
//         NumSumma += i;
//         console.log (NumSumma);
//     }        
// }


// 3. написать программу воторая определяет количество 
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1

// let userNamber = +prompt ("Введите количество чисел которое вы будете вводить");
// let namber =0;
// let namG = 0;
// let namB = 0;
// let namS = 0;

// for ( ; userNamber > 0; userNamber--){
//     namber = +prompt ("Введите число");
//     if (namber > 0){
//         namG++;
//     } else if (namber < 0){
//         namB++;
//     } else if (namber === 0){
//         namS++;
//     }
// }
// console.log (`положительных: ${namG}`);
// console.log (`отрицательных: ${namB}`);
// console.log (`нулей: ${namS}`);

// 4. написать программу которая выводит среднее арифметическое 
// n чисел введенных пользователем. Ввод чисел прекращается когда
// нажали "отмена", после чего выводится среднее арифметическое

// let userNamber = prompt ("введите любые числа и нажмите отмену");
// let namber = 0;
// for (let i = 0 ; ; i++){   
//     namber += +userNamber;
//     if (userNamber === null){
//         namber = namber / i;    
//         console.log (namber);
//         break;
//     }
// }

// 5. пользователь вводит числа n и m, вывести в консоль
// квадраты всех чисел от n до m

// let userStart = +prompt ("введите первое число");
// let userEnd = +prompt ("введите второе число");
// let matPov = 0;

// if (userStart < userEnd){
//     for (let i = userStart; i <= userEnd; i++){
//         matPov = (Math.pow (i, 2));
//         console.log (matPov);
//     }    
// }else if (userStart > userEnd){
//     for (let i = userStart; i >= userEnd; i--){
//         matPov = (Math.pow (i, 2));
//         console.log (matPov);
//     }       
// } 










//ДОПОЛНИТЕЛЬНЫЕ ЗАДАЧИ!

// 0. вывести в консоль числа от 5 до 15 
// for (let i = 5; i <= 15; i++){
//     console.log (i);
// }

// 0.1 вывести в консоль числа от 25 до 7
// for (let i = 25; i >= 7; i--){
//     console.log (i);
// }

// 0.2 пользователь вводит числа 5 раз, вывести в консоль сумму этих чисел

// let newUser = 0;
// for (let i = 0; i < 5; i++){
//     let user = +prompt ("введите число");
//     newUser += +user;
// }
// console.log (newUser);

// 1. пользователь вводит число n (положительное), вывести на экран
// все четные числа от 1 до n
// let user = +prompt ("введите число");
// for (let i = 0; i < user; i += 2){
//     console.log (i);
// }


// 2. создать переменную password = '1234' (правильный пароль)
// просим пользователя ввести пароль, до тех пор пока он не введет правильный  
// если пользователь нажал "отмена" прекратить ввод
// let password = prompt ("inter password");
// for (; ;){
//     let password = prompt ("inter password");
//     if (password === "1234"){
//     alert ("yessssss!");
//     } else if (isNaN (password)){
//     alert ("введи только цифры");
//     } else if (password === null){
//     break;
//     } else if (password != "1234"){
//     alert ("попробуйте еще раз");
//     }
// }

// 3. пользователь вводит свой текущий возраст,
// вывести в консоль сколько лет ему будут каждый год до 2030 года
// пример: пользователь вводит 14
// выводим: в 2023 году будет 15
// в 2024 году будет 16
// в 2025 году будет 17
// ....
// в 2030 году будет 23
// let user = +prompt ("введите свой возраст");
// for (let i = 2023; i <= 2030; i++){
//     console.log (`в ${i} вам будет ${++user}`);
// }


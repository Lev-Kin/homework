// Переписать из if в тернарный оператор «?»
// 1.
// let age = 14; 
// let masege = (age < 6) ? "привет малыш" : (age < 16) ? "привет парень" : "Здравствуйте!";
// alert (masege);
// ---------------------------------------------------------

<<<<<<< HEAD
// let userNamber1 = +prompt('введите число 1');
// let userNamber2 = +prompt('введите число 2');

// if (userNamber1 > userNamber2 ){
//     console.log(userNamber1);
// } else if (userNamber2 > userNamber1){
//     console.log(userNamber2);    
// } else if (userNamber1 === userNamber2){
//     console.log ("числа равны"); 
// }
=======
// Измените эту программу так, чтобы выводилось окно с вопросом «Сколько вам лет?». Пользователь должен ввести свой возраст, после чего получить сообщение с соответствующим приветствием.

// 2.
// let age = +prompt("Сколько вам лет?");
// let masege = (age < 6) ? "привет малыш" : (age < 16) ? "привет парень" : "Здравствуйте!";
// alert (masege); 
// ---------------------------------------------------------
// 3
let youAge = prompt("Сколько вам лет?");
if (youAge === null){
    alert("не ввели возраст"); 
} else if (Number(youAge) < 6){
    alert("привет малыш");
} else if (Number(youAge) < 16){
    alert("привет парень");
} else {
    alert("Здравствуй");
}
>>>>>>> 7807405312d9a5c5397339d9ddb007e0026df0c4

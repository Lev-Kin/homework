//1. пользователь вводит число n (положительное), вывести на экран 
//все четные числа от 1 до n 
 
// let number = +prompt ('Введите положительное число') 
// for (let i = 1 ; i < number; i++ ) { 
//     if (i % 2 === 0 ){ 
//       console.log(i) 
//     } 
// } 
 
 
 
 
// 2. создать переменную password = '1234' (правильный пароль) 
// просим пользователя ввести пароль, до тех пор пока он не введет правильный   
// если пользователь нажал "отмена" прекратить ввод 
 
// let password = 1234 
// do { 
//     password = +prompt('Введите пароль') 
// }while (password !==1234) 
 
 
 
// 3. пользователь вводит свой текущий возраст, 
// вывести в консоль сколько лет ему будут каждый год до 2030 года 
// пример: пользователь вводит 14 
// выводим: в 2023 году будет 15 
// в 2024 году будет 16 
// в 2025 году будет 17 
// .... 
// в 2030 году будет 23 

// let question = +prompt('vvedi vozrast'); 
//     let year = 2022; 
// for(let i =0; i<8 ;i++){  
//     question = question + 1;  
//     year = year + 1;  
//     console.log(question, year)}



let question = +prompt('vvedi vozrast'); 
    let year = 0; 
for(let i =0; question < 2022 ;i++){  
    question = question + 1;  
    year = year + 1;  
    console.log(question, year)}





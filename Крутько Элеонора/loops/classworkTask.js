// 4. Написать игру камень ножницы бумага 
// игра до 10 побед пользователя либо компа ( при победе выводим имя победителя ) 
// пользователь должен вводить "камень" "ножницы" либо "бумага" 
// компьютер должен рандомно генерировать "камень" "ножницы" либо "бумага" 
// после чего выводим сообщение вида 
// "вы выиграли ваш выбор: камень, выбор компа: "ножницы"" 
// и засчитываем очко соответствующему игроку, после чего начинаем следующий раунд 
// при ничьей, очко никому не засчитываем

let userGamer; 
let computer; 
let computerRound; 
let stone = 0; 
let scissors = 1; 
let paper = 2; 
let userWin = 0; 
let computerWin = 0; 
for ( ; userWin !== 10; ){
    if (computerWin === 10){
        break;
    } 
    userGamer = prompt ('Введите камень, ножницы или бумагу'); 
    computer = Math.random()*2; 
    computerRound = Math.round(computer);  
    if(computerRound === stone){ 
        if (userGamer === 'бумага'){ 
            userWin++; 
            alert('Вы выиграли, ваш выбор бумага, а компа - камень'); 
        } else if (userGamer === 'ножницы'){ 
            computerWin++; 
            alert('Комп выиграл');
        } else {
            alert('Ничья');
        }
    } else if(computerRound  === scissors){ 
        if (userGamer === 'камень'){ 
            userWin++; 
            alert('Вы выиграли, ваш выбор камень, а компа - ножницы'); 
        } else if (userGamer === 'бумага'){ 
            computerWin++; 
            alert('Комп выиграл');
        }  else {
            alert('Ничья');
        }
    } else if(computerRound === paper){ 
        if (userGamer === 'камень'){ 
            computerWin++; 
            alert('Комп выиграл');
        } else if (userGamer === 'ножницы'){ 
            userWin++; 
            alert('Вы выиграли, ваш выбор ножницы, а компа - бумага'); 
        } else {
            alert('Ничья');
        }
    } 
}
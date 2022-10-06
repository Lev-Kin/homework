const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

class Button {
    constructor(butn){
        this.name = butn.id;
        this.boom = 'not boom';
    }
}

const btn1 = new Button(button1);
const btn2 = new Button(button2);
const btn3 = new Button(button3);
const arrOfButtons = [btn1, btn2, btn3];

function randomBoom(arr) {
    let randomNum = Math.floor(Math.random() * 3)
    arr[randomNum].boom = 'boom';
    return arr
}
randomBoom(arrOfButtons);

function disableButtons() {
    [button1,button2, button3].forEach(btn => btn.disabled = true)
}

function forEvent(obj) {
    return function() {
        if(obj.boom === 'boom'){
            alert('BOOM!');
            disableButtons();
        }
    }
}

button1.addEventListener('click', forEvent(btn1));
button2.addEventListener('click', forEvent(btn2));
button3.addEventListener('click', forEvent(btn3));




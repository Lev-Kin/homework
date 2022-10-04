
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let boomButton = Math.floor(1 + Math.random()*3);

const clickResult = function (btnNumber, btn) {
    if (boomButton === btnNumber) {
        console.log('BOOM!');
        [btn1, btn2, btn3].forEach(element => {
            element.setAttribute('disabled', 'disabled');            
        });  
    } else {
        console.log('OK');
        btn.setAttribute('disabled', 'disabled');
    }    
};

const clickResult1 = function () {
    clickResult(1, btn1);
};
const clickResult2 = function () {
    clickResult(2, btn2);
};
const clickResult3 = function () {
    clickResult(3, btn3);
};

btn1.addEventListener('click', clickResult1);
btn2.addEventListener('click', clickResult2);
btn3.addEventListener('click', clickResult3);

console.log(boomButton);

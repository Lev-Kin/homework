const buttons = document.getElementById('buttons');

const buttonsArr = [...buttons.getElementsByTagName('button')];

buttonsArr[Math.floor(Math.random() * 3)].bombhere = true;

function onBtnClick (event) {
    
    if (event.target.bombhere) {
        console.log('BOOM');
        buttons.removeEventListener('click', onBtnClick);
    } else {
        console.log('SHARA');
        event.target.disabled = true;
    }

}


buttons.addEventListener('click', onBtnClick);

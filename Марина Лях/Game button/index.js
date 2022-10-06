let okCounter = 0;
const field = document.getElementsByClassName('field')[0];
field.onclick = (event) => {
    if (okCounter < 2) {
        let randomNumber = Math.floor(Math.random() * 2);
        switch (randomNumber) {
            case 0:
                event.target.innerText = 'OK';
                okCounter++;
                break;
            case 1:
                explore(event);
                break;
        }
    }
    else {
        explore(event);
    }
}

function explore (event) {
    event.target.innerText = 'BOOM';
    field.remove();
    alert('GAME OVER');
}
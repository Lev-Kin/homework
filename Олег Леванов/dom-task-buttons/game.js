(function mine() {
    const buttons = [
        document.getElementById('btn1'),
        document.getElementById('btn2'),
        document.getElementById('btn3')
    ];

    function ok() {
        console.log('OK!');
        this.style.backgroundColor = 'green';
        this.removeEventListener('click', ok);
    }

    function boom() {
        console.log('BOOM!');
        this.style.backgroundColor = 'red';
        buttons.forEach((button) => button.setAttribute('disabled', 'disabled'));
    }

    buttons.forEach((button) => button.addEventListener('click', ok));

    const explodeButton = buttons[Math.floor(Math.random() * 3)];
    explodeButton.removeEventListener('click', ok);
    explodeButton.addEventListener('click', boom)

})();

// buttom1 buttom2 buttom3 
// OK - 2раза и BOOM - 1раз
// после BOOM кнопки не работают
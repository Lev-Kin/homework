// const wrapper = document.getElementById('wrapper');
// const list = document.getElementById('list');
// const firstItem = document.getElementById('fitem');
// const pItem = document.getElementById('pitem');

// wrapper.addEventListener('click', () => {
//     console.log('WRAPPER');
// });

// list.addEventListener('click', () => {
//     console.log('LIST');
// }, true);

// const liListener = (event) => {
//     // event.stopPropagation();
//     event.stopImmediatePropagation();

//     console.log('LI');
// };

// const secondLiListener = () => {
//     console.log('LI SECOND');
// };


// firstItem.addEventListener('click', liListener);
// firstItem.addEventListener('click', secondLiListener, true);

// pItem.addEventListener('click', () => {
//     console.log('P');
// });

// const pItem = document.getElementById('pitem');
// const list = document.getElementById('list');

// list.addEventListener('click', () => {
    // const newLi = document.createElement('li');
    // newLi.innerText = 'some text here';

    // const item3 = list.getElementsByTagName('li')[2];

    // list.append(item3.cloneNode(true));

    // list.insertBefore(newLi, bratik );

    // list.append(newLi);
    // list.prepend(newLi);
    // list.insertAdjacentElement('afterbegin', newLi);
    // list.insertAdjacentElement('afterend', newLi);
    // list.insertAdjacentElement('beforebegin', newLi);
    // list.insertAdjacentElement('beforeend', newLi);

    // list.insertAdjacentHTML('afterbegin', '<h1>Hello</h1>');
    // list.insertAdjacentText('afterbegin', '<h1>Hello</h1>');

    // list.parentElement.append();

    // list.after(newLi);
// });


// document.getElementById('pitem').remove();

// pItem.textContent = '<h1>Hello</h1>';

// pItem.addEventListener('click', () => {
    // pItem.setAttribute('wasClicked', 'true');
    // console.log(pItem.getAttribute('wasClicked'));
    // const pItemCopy = pItem.cloneNode(true);
    // console.log(pItemCopy);
    // console.dir(pItem);
    // pItem.dataset.test = 'ppppppp';
    // Object.keys(pItem.dataset).forEach()

    // console.dir();

    // pItem.remove();
    // console.log(pItem);
// });


// const pItem = document.getElementById('pitem');
// const list = document.getElementById('list');

// pItem.addEventListener('click', (event) => {
    // pItem.style.padding = event.clientX + 'px';

    // console.log(pItem.className);

    // pItem.classList.add('active');
    // pItem.classList.remove('two');
    // pItem.classList.contains('one');
    // pItem.classList.replace('one', 'blabla')
    // pItem.classList.toggle('active')

// });
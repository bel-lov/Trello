// const containerInput = document.querySelector('.container-input1');
// containerInput.addEventListener('click', (e) => {
//     console.log(e)
//     fileInput.dispatchEvent(new MouseEvent('click'))
// })

// containerInput.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log('click');
//         fileInput.dispatchEvent(new MouseEvent('click'))
//     })
// })

document.documentElement.addEventListener('click', function addCards(event) {
    let target = event.target;
    const hiddenText = document.querySelector('.addCardText-done');
    const containerInput = document.querySelector('.container-input-done');
    const btnAddCard = document.querySelector('.button-done');
    const init = document.querySelector('.init-done');
    const list = document.querySelector('.done-list');
    const inputText = document.querySelector('.input-done');

    console.log(target.className)
    if (target.className = 'addCardText-done') {
        containerInput.classList.remove('hidden');
        hiddenText.classList.add('hidden');
        btnAddCard.classList.remove('hidden');
        init.classList.add('hidden');

        btnAddCard.addEventListener('click', () => {
            if (inputText.value != ' ') {
                //добавляем элементы списка
                const li = document.createElement('li');
                li.className = 'list-item list-done';
                li.innerHTML = `${inputText.value}<button class="btn-delete" type="button">х</button>`;
                list.appendChild(li);
                //массив элементов списка
                const listItem = document.querySelectorAll('.list-item');
                for (const item of listItem) {
                    item.addEventListener('mouseover', () => {
                        const btnDelete = item.querySelector('.btn-delete');
                        btnDelete.classList.add('active');
                        btnDelete.addEventListener('click', () => {
                            item.remove();
                        })
                    });
                };
            }
            //очищаем форму ввода для текста
            inputText.value = ' ';
        })
    }
});


//вариант с работой кода только на одной на первой карточке
// const fileInput = document.querySelector('input');
// const hiddenText = document.querySelector('.addCardText');
// const addCard = document.querySelector('.addCard');
// const addCardDone = document.querySelector('.addCard')
// const containerInput = document.querySelector('.container-input');
// const btnAddCard = document.querySelector('.button');
// const list = document.querySelector('.todo-list');
// const listDoun = document.querySelector('.done-list');
// const inputText = document.querySelector('.input');
// const init = document.querySelector('.init');
// addCard.addEventListener('click', () => {
//     containerInput.classList.remove('hidden');
//     hiddenText.classList.add('hidden');
//     btnAddCard.classList.remove('hidden');
//     init.classList.add('hidden');
// })

// btnAddCard.addEventListener('click', () => {
//     // console.log(inputText.value)
//     if (inputText.value != ' ') {
//         //добавляем элементы списка
//         const li = document.createElement('li');
//         li.className = 'list-item';
//         li.innerHTML = `${inputText.value}<button class="btn-delete" type="button">х</button>`;
//         list.appendChild(li);
//         //массив элементов списка
//         const listItem = document.querySelectorAll('.list-item');
//         console.log(listItem);

//         for (const item of listItem) {
//             item.addEventListener('mouseover', () => {
//                 const btnDelete = item.querySelector('.btn-delete');
//                 btnDelete.classList.add('active');
//                 btnDelete.addEventListener('click', () => {
//                     item.remove();
//                 })
//             });
//         };
//     }
//     inputText.value = ' ';
// })
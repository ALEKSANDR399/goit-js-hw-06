const controlsBox = document.querySelector('#controls');
const windowEnterCoins = document.querySelector('input');
const btnAddBox = document.querySelector('button[data-create]');
const btnRemoveBox = document.querySelector('button[data-destroy]');
const boxForCreateBoxes = document.querySelector('#boxes');


// controlsBox.addEventListener('input', (number) => {
//     console.log(number.Number(textContent));
//     createBoxes(number.textContent)
//     btnAddBox.addEventListener('click', createBoxes)
// });


btnAddBox.addEventListener('click', () => { 
    createBoxes(windowEnterCoins.value);
   
});
btnRemoveBox.addEventListener('click', clearValueList);

function clearValueList ()  {
    windowEnterCoins.value = '';
    boxForCreateBoxes.innerHTML = '';
};

function createBoxes(amount) {
    
    let sizeBox = 0;
    let groupOfBox = [];
    for (let i = 0; i < amount; i += 1) {
        const createBox = document.createElement('div');
        sizeBox = 30 + i * 10;
        createBox.textContent = 'ubsbvbdknksn'
        createBox.style.width = `${sizeBox}`;
        createBox.style.height = `${sizeBox}`;
        createBox.style.backgroundColor = getRandomHexColor();
        groupOfBox.push(createBox);
    }

    return boxForCreateBoxes.append(...groupOfBox);
   
 };





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
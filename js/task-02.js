 const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomato',
  'Herbs',
  'Condiments',
];

const ourListEl = document.querySelector('#ingredients');
/**-------------------------1 способ ---------------------------------- */
// const itemCreate = ingredients.map((ingredient) => `<li class = item>${ingredient}</li>`).join('');
// console.log(itemCreate);
// ourListEl.innerHTML = itemCreate;
/**---------------------------2 способ---------------------------------------------- */

let colItemCreate = [];
for (let i = 0; i < ingredients.length; i += 1) {

    const itemCreate = document.createElement('li');
    itemCreate.classList.add('item');
  itemCreate.textContent = ingredients[i];
  colItemCreate.push(itemCreate);
}
console.log(colItemCreate);
ourListEl.append(...colItemCreate);

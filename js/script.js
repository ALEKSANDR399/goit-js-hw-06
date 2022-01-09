/**-----------------------------Task№1------------------------------- */

// const allItemInCategoriesEl = document.querySelectorAll(".item").length;
// console.log("Number of categories :", allItemInCategoriesEl);
// const category = document.querySelectorAll('#categories .item');
// for (const element of category) {
// console.log(`Category : ${element.firstElementChild.textContent}
// Elements: ${element.lastElementChild.querySelectorAll('li').length}`);
// };
/**----------------------------------------------------------------------- */
/**-------------------------------Task№2---------------------------------- */
// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomato',
//   'Herbs',
//   'Condiments',
// ];

// const ourListEl = document.querySelector('#ingredients');
// /**-------------------------1 способ ---------------------------------- */
// // const itemCreate = ingredients.map((ingredient) => `<li class = item>${ingredient}</li>`).join('');
// // console.log(itemCreate);
// // ourListEl.innerHTML = itemCreate;
// /**---------------------------2 способ---------------------------------------------- */
// let itemCreate = '';
// for (let i = 0; i < ingredients.length; i += 1) {

//     itemCreate = document.createElement('li');
//     itemCreate.classList.add('item');
//     itemCreate.textContent = ingredients[i];
//     ourListEl.appendChild(itemCreate);
// }
// console.log(ourListEl);
/**------------------------------------------------------------------------- */
/**----------------------------------------------Task№3-------------------------- */
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const listImg = [];
   
    images.map(({url, alt}) => { 
        const itemCreate = document.createElement('li');
        itemCreate.insertAdjacentHTML("afterbegin", `<img src = ${url} alt ='${alt}' width = 640 height = 320>`);
        return listImg.push(itemCreate);
    });

const listWithImg = galleryList.append(...listImg);
console.log(listWithImg);



const allItemInCategoriesEl = document.querySelectorAll(".item").length;
console.log("Number of categories :", allItemInCategoriesEl);
const category = document.querySelectorAll('#categories .item');
for (const element of category) {
console.log(`Category : ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.querySelectorAll('li').length}`);
};


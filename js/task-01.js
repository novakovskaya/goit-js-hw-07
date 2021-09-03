// 1
const totalCategories = document.querySelectorAll('.item');

console.log(`В списке ${totalCategories.length} категории`);

// 2
const arrayCategories = totalCategories.forEach(category =>
  console.log(
    `Категория: ${category.firstElementChild.textContent}, Количество элементов: ${category.lastElementChild.children.length}`,
  ),
);

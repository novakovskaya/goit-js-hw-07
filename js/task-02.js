const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const allListIngredients = document.querySelector('#ingredients');

const addIngredients = ingredients =>
  ingredients.map(ingredient => {
    const itemIngredients = document.createElement('li');
    itemIngredients.textContent = ingredient;

    return itemIngredients;
  });

const elements = addIngredients(ingredients);
allListIngredients.append(...elements);

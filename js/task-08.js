const refs = {
  inputControls: document.querySelector('#controls input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesEl: document.getElementById('boxes'),
};

refs.renderBtn.addEventListener('click', getAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function getAmount() {
  let amount = refs.inputControls.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let widthBox = 30;
  let heightBox = 30;

  const arrayBox = [];
  for (let i = 0; i < amount; i += 1) {
    const boxesContainer = document.createElement('div');

    boxesContainer.style.width = `${widthBox}px`;
    boxesContainer.style.height = `${heightBox}px`;
    boxesContainer.style.backgroundColor = `rgb(${getRGB()}, ${getRGB()},${getRGB()})`;

    arrayBox.push(boxesContainer);
    widthBox += 10;
    heightBox += 10;
  }

  refs.boxesEl.append(...arrayBox);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
  refs.inputControls.value = '';
}

function getRGB() {
  return Math.floor(Math.random() * 256);
}

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

let sizeBox = 30;

function createBoxes(amount) {
  const arrayBox = [];

  for (let i = 0; i < amount; i += 1) {
    const boxesContainer = document.createElement('div');

    boxesContainer.style.width = `${sizeBox}px`;
    boxesContainer.style.height = `${sizeBox}px`;
    boxesContainer.style.backgroundColor = `rgb(${getRGB()}, ${getRGB()},${getRGB()})`;

    arrayBox.push(boxesContainer);
    sizeBox += 10;
  }

  refs.boxesEl.append(...arrayBox);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
  refs.inputControls.value = '';
  sizeBox = 30;
}

function getRGB() {
  return Math.floor(Math.random() * 256);
}

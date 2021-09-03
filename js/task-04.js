const refs = {
  decrBtn: document.querySelector('[data-action="decrement"]'),
  incrBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

refs.decrBtn.addEventListener('click', decrement);
refs.incrBtn.addEventListener('click', increment);

let counterValue = 0;

function decrement() {
  refs.valueEl.textContent = counterValue -= 1;
}

function increment() {
  refs.valueEl.textContent = counterValue += 1;
}

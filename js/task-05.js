const refs = {
  inputEl: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (refs.inputEl.value === '') {
    refs.nameOutput.textContent = 'незнакомец';
  } else {
    refs.nameOutput.textContent = event.currentTarget.value;
  }
}

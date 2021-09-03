const inputEl = document.getElementById('validation-input');
const inputLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputLossBlur);

function updateClassList(class1, class2) {
  inputEl.classList.add(class1);
  inputEl.classList.remove(class2);
}

function onInputLossBlur() {
  if (Number(inputLength) === inputEl.value.length) {
    updateClassList('valid', 'invalid');
  } else {
    updateClassList('invalid', 'valid');
  }
}

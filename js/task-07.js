const refs = {
  inputEl: document.getElementById('font-size-control'),
  textEl: document.getElementById('text'),
};
refs.textEl.style.fontSize = '50px';

refs.inputEl.addEventListener('input', updateSizeText);

function updateSizeText(event) {
  refs.textEl.style.fontSize = event.currentTarget.value + 'px';
}

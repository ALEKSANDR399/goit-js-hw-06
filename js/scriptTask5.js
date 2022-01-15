const rewriteText = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};


const rewriteTextInWindow = (event) => {
  rewriteText.span.textContent = event.currentTarget.value;
};
rewriteText.input.addEventListener('input', rewriteTextInWindow);
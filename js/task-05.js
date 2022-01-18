const rewriteText = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};


const rewriteTextInWindow = (event) => {
  event.preventDefault();
  if (!event.currentTarget.value ) {
    rewriteText.span.textContent = 'Anonymous';
    return;
  };
  
  rewriteText.span.textContent = event.currentTarget.value
  
  
  
};
rewriteText.input.addEventListener('input', rewriteTextInWindow);
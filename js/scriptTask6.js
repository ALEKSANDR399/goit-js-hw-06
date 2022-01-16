const inputWindow = document.querySelector('input');
inputWindow.addEventListener('blur', auditInput);

function auditInput(event) {
  
  return event.currentTarget.value.length === Number(inputWindow.dataset.length)
    ? inputWindow.setAttribute('class', 'valid')
    : inputWindow.setAttribute('class', 'invalid');
 
};


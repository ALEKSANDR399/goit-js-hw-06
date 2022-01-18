const inputText = document.querySelector('#font-size-control');
const mainText = document.querySelector('#text');

inputText.addEventListener('input', changeText);
mainText.style.fontSize = inputText.value + 'px';
function changeText(event) {
  
  mainText.style.fontSize = event.currentTarget.value + "px";
 
};

const ColorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['purple', 'orange', 'green', 'blue'];

ColorBtn.addEventListener('click', changeColor);

function changeColor() {
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}


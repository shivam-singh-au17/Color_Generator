for (let i = 1; i <= 210; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

const btn = document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box');

function RandomHexColorCode() {
    var chars = "0123456789abcdef"
    var colorLength = 6;
    var color = "";

    for (var i = 0; i < colorLength; i++) {
        var randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor + 1);
    }
    return "#" + color;
}

function addColor() {
    randomColorBlock.forEach(item => {
        var newColor = RandomHexColorCode();
        item.style.backgroundColor = newColor;
        item.innerHTML = newColor;
        item.style.border = "3px solid red"
    })
}

function addColor2() {
    randomColorBlock.forEach(item => {
        var newColor = RandomHexColorCode();
        item.style.backgroundColor = newColor;
        item.innerHTML = newColor;
        item.style.border = "3px solid red"
    })
}

addColor2()
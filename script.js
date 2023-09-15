// dynamic divs creation
const container = document.getElementById('grid-box');
const gridSizeInput = document.getElementById('gridSize');
const createGridButton = document.getElementById('createGrid');

createGrid()
createGridButton.addEventListener('click', createGrid);
function createGrid() {
    const gridSize = parseInt(gridSizeInput.value);

    if (!isNaN(gridSize)) {
        container.setAttribute('style', `grid-template-columns:repeat(${gridSize},1fr); grid-template-rows:repeat(${gridSize},1fr)`)
        // Clear existing grid items
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        // Create and append new grid items
        for (let i = 0; i < gridSize * gridSize; i++) {
            const gridItem = document.createElement('div');
            gridItem.setAttribute('style', `height:${49 / gridSize}vw;width:${49 / gridSize}vw`)
            gridItem.classList.add('grid-item');
            container.appendChild(gridItem);
        }
        changeColor()
    }
}
// live value of slider
const span = document.getElementById('value')
gridSizeInput.addEventListener('input', () => {
    span.textContent = gridSizeInput.value
})
// Change the color
function changeColor() {
    const dynamicDivs = document.querySelectorAll('#grid-box > div')
    dynamicDivs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.setAttribute('style', `background:${getRandomColor()}`)
        })
    })
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// erase
function erase(radio){
    if(radio.checked) 
    {
        document.querySelectorAll('#grid-box > div').forEach(div => {
            div.addEventListener('mouseenter', () => {
                div.setAttribute('style', 'background:white')
            })
        })
    }
}
// clear divs
const clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    document.querySelectorAll('#grid-box > div').forEach(div => {
        div.setAttribute('style', 'background:white')
    })
})
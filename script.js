const container = document.querySelector('#container');

let i = 256;
function createGrid () {
    for (; i > 0; i--) {

    const content = document.createElement('div');
    content.setAttribute('id','grid');
    content.textContent = "";
    container.appendChild(content);
    };

    const grids = document.querySelectorAll('#grid');
    grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.classList.add('changedGrid');

    });
});
}

createGrid();

function resetGrid() {
    clearGrid();
    let gridSize = prompt('how many squares do you want? (max 100)');
    if (gridSize <= 100) {
        i = gridSize * gridSize;
    } else {
        alert("try again");
    }
    
    container.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)'
    container.style.gridTemplateRows = 'repeat(' + gridSize + ', 1fr)'
    
    createGrid();
}

function clearGrid() {
    const erase = document.querySelector('#container');
    while (erase.firstChild) {
        erase.removeChild(erase.firstChild);
    }
}

const squareContainer = document.getElementById('squareContainer');
const removeButton = document.getElementById('removeSquare');
let squareCounter = 1;

const addSquare = () => {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    const squareNumber = document.createTextNode(squareCounter);
    newSquare.appendChild(squareNumber);
    newSquare.addEventListener('mousedown', changeSquare);
    squareContainer.appendChild(newSquare);
    if (squareContainer.firstChild) removeButton.disabled = false
    squareCounter++
}

const removeSquare = () => {
    squareContainer.lastChild.innerText === '1' ? squareCounter = 1 : squareCounter--
    if (squareContainer.lastChild) squareContainer.lastChild.remove();
    if (squareContainer.childNodes.length === 0) removeButton.disabled = true;
}


const changeSquare = (event) => {
    const squareStyle = event.target.style;
    const squareEdge = event.target.clientWidth;
    const enlargedSquareDimension = squareEdge + 10 + 'px';
    const reducedSquareDimension = squareEdge - 10 + 'px';

    if (event.button === 0) {
        squareStyle.width = squareStyle.height = enlargedSquareDimension;
    }

    if (event.button === 2 && squareEdge > 100) {
        squareStyle.width = squareStyle.height = reducedSquareDimension;
    }
}



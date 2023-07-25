const modal = document.querySelector('.modal');
const backgroundContent = document.querySelector('.backgroundContent');
const showModalButton = document.querySelector('.showModalButton');
const closeModalButton = document.querySelector('.closeModalButton');
const overlay = document.querySelector('.overlay');
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let divCounter = 0;

const setModalDimensions = () => {
    let modalMarginHorizontal = Math.round(windowWidth * 0.04);
    let modalMarginVertical = Math.round(windowHeight * 0.04);

    modal.style.maxWidth = `${window.innerWidth - 2 * modalMarginHorizontal}px`;
    modal.style.maxHeight = `${window.innerHeight - 2 * modalMarginVertical}px`;
}

const setClosedModalMode = () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

showModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    overlay.style.display = 'block';
})

closeModalButton.addEventListener('click', setClosedModalMode);

overlay.addEventListener('click', setClosedModalMode);

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    setModalDimensions();
})

window.addEventListener('keydown', (event) => {
    if (modal.style.display === 'flex' && event.key === 'Escape') setClosedModalMode();
})

while (divCounter < 8) {
    const singleDiv = document.createElement('div')
    singleDiv.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime animi officia
    atque sequi illo, molestiae quidem quisquam iusto, autem qui tenetur modi sint tempore perspiciatis,
    ea excepturi! Quidem, corporis vel?`;
    singleDiv.classList.add('singleDiv');
    console.log(divCounter)
    backgroundContent.appendChild(singleDiv);
    divCounter++
}

setModalDimensions();




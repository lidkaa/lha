const counterElement = document.getElementById('counterValue');
const buttonMultiply = document.getElementById('multiply');
const buttonDivide = document.getElementById('divide');

let counterValue = parseInt(counterElement.textContent);

const observer = new MutationObserver(function (mutation) {
    let newCounterValue = mutation[0].addedNodes[0]['data'];
    if (newCounterValue <= 50 && newCounterValue % 2) {
        buttonMultiply.disabled = false;
    } else buttonMultiply.disabled = true;

    if (newCounterValue > 1 && newCounterValue % 2 === 0) {
        buttonDivide.disabled = false;
    } else buttonDivide.disabled = true;
});

observer.observe(counterElement, { characterData: true, attributes: false, childList: true, subtree: false });

const increaseNumber = () => {
    counterValue++;
    return counterElement.textContent = counterValue;
}

const decreaseNumber = () => {
    counterValue--;
    return counterElement.textContent = counterValue;
}

const multiplyNumber = () => {
    if (counterValue <= 50 && counterValue % 2) {
        counterValue = counterValue * 2;
        return counterElement.textContent = counterValue;
    }
}

const divideNumber = () => {
    if (counterValue > 1 && counterValue % 2 === 0) {
        counterValue = counterValue / 2;
        return counterElement.textContent = counterValue;
    }
}

const resetNumber = () => {
    counterValue = 0
    return counterElement.textContent = counterValue;
}

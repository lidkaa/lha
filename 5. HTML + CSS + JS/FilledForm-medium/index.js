const inputsArray = document.querySelectorAll('input');
const buttonSubmit = document.querySelector('#submit');
let valuesObject = {};

const getInputValue = (event) => {
    const isInputValueValid = event.target.validity.valid;
    const errorMessageElement = event.target.nextElementSibling;

    isInputValueValid ? valuesObject[event.target.name] = true : valuesObject[event.target.name] = false;
    isInputValueValid ? errorMessageElement.style.display = 'none' : errorMessageElement.style.display = 'block';

    const valuesArray = Object.values(valuesObject);
    valuesArray.includes(false) ? buttonSubmit.disabled = true : buttonSubmit.disabled = false;
}

for (const element of inputsArray) {
    if (element.attributes.required) {
        element.addEventListener('change', getInputValue);
        valuesObject[element.name] = false;
    }
}

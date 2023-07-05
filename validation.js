function validation(...args) {
    let params = [...args];

    for (let param of params) {
        if (param.type === 'Array') {
            const checkType = param.value instanceof Array;
            if (!checkType) throw new Error('Value must be an array');
            if (param.value.length === 0) throw new Error('The array should not be empty')
        }

        if (param.type === 'Number') {
            const checkType = typeof (param.value) === 'number';
            const checkNaN = isNaN(param.value);
            if (!checkType || checkNaN) throw new Error('Value must be a number');
            if (param.value < 0) throw new Error('The value should be equal or bigger than 0')
        }

        if (param.type === 'String') {
            const checkType = typeof (param.value) === 'string';
            if (!checkType) throw new Error('Value must be a string');
            if (param.value.length === 0) throw new Error('The value should not be an empty string')
        }
    }
}

export { validation };
export function isValueStringType(value) {
    const result = typeof value === 'string';
    if (!result) throw new Error('The value must be a string type');
}

export function isValueStringNotEmpty(value) {
    const result = value.length > 0;
    if (!result) throw new Error('The value should not be an empty string');
}

export function isValueNumberType(value) {
    const result = typeof value === 'number';
    if (!result) throw new Error('The value must be a number type');
}

export function isValueNumberIsBiggerThanZero(value) {
    const result = value > 0;
    if (!result) throw new Error('The value should be bigger than 0');
}

export function isValueArrayType(value) {
    const result = Array.isArray(value)
    if (!result) throw new Error('The value must be an array');
}

export function isValueArrayNotEmpty(value) {
    const result = value.length > 0;
    if (!result) throw new Error('The value should not be an empty array');
}

export function isValueObjectType(value) {
    const result = Object.prototype.toString().call(value) === '[object Object]';
    if (!result) throw new Error('The value must be an object');
}

export function isValueObjectNotEmpty(value) {
    const result = Object.keys(value).length > 0;
    if (!result) throw new Error('The value should not be an empty object');
}
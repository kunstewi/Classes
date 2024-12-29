// ES6 Syntax Local Module

// Exporting Functions
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Exporting Object
const user = {
    name: 'John Doe',
    age: 30
};

export default user; // default means this is the single main thing that is being exported
// default can only be used once in a file


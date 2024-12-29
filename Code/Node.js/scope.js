// Global Scope

var globalVar = 'I am global';

function showGlobalVar() {
    console.log(globalVar); // Accessible here
}

showGlobalVar(); // Output: I am global
console.log(globalVar); // Accessible here too

// Local Scope

function showLocalVar() {
    var localVar = 'I am local';
    console.log(localVar); // Accessible here
}

showLocalVar(); // Output: I am local
console.log(localVar); // Error: localVar is not defined
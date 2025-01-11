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

{
    let pussyCat = "I am a pussy cat"; // block scope
}

// console.log(pussyCat); // Error: pussyCat is not defined

showLocalVar(); // Output: I am local
console.log(localVar); // Error: localVar is not defined
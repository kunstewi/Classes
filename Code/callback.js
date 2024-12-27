// Callback

function uuu(umm){
  umm();
}

umm = function(){
  console.log('umm');
}

uuu(umm);

//example synchronous callback

function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Puneet Superstar', sayGoodbye);

//example asynchronous callback

function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 2000);
}

function processData() {
    console.log('Processing data');
}

fetchData(processData);

// Problem 1

function processArray(arr, callback) {
    // Your code here
}

function printElement(element) {
    console.log(element);
}

const numbers = [1, 2, 3, 4, 5];
processArray(numbers, printElement);

// Problem 2

function delayedGreeting(name, callback) {
    // Your code here
}

function greet(name) {
    console.log('Hello ' + name);
}

delayedGreeting('Nalla Berojgar', greet);
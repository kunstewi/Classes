// Synchronous Function

console.log('Start');

function syncFunction() {
    console.log('This is a synchronous function');
}

syncFunction();

console.log('End');

// Asynchronous Function

console.log('Start');

function asyncFunction() {
    setTimeout(() => {
        console.log('This is an asynchronous function');
    }, 2000);
}

asyncFunction();

console.log('End');
let promise = new Promise((resolve, reject) => {
    let success = true; // Simulate success or failure
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});

promise.then((message) => {
    console.log(message); // "Operation was successful!"
}).catch((error) => {
    console.log(error); // "Operation failed."
});

// Promise Chaining

let chainPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); // After 1 second, resolve with value 1
});

promise.then((result) => {
    console.log(result); // 1
    return result * 2;
}).then((result) => {
    console.log(result); // 2
    return result * 2;
}).then((result) => {
    console.log(result); // 4
});

// Need For Promises :

// Callback Hell
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
        doThirdThing(newResult, function(finalResult) {
            console.log(finalResult);
        });
    });
});

// Promises
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => console.log(finalResult))
    .catch(error => console.error(error));

// Problem 1

function fetchData() {
    // Your code here
}

fetchData().then((message) => {
    console.log(message); // "Data fetched"
});

// Problem 2

function delayedDouble(num) {
    // Your code here
}

delayedDouble(2)
    .then((result) => delayedDouble(result))
    .then((result) => delayedDouble(result))
    .then((result) => {
        console.log(result); // 16
    });
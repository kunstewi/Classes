# ASYNCHRONOUS JAVASCRIPT

## Announcements :loudspeaker:

1. Merry Christmas Guys !!
    * Enjoy and Cake Khao
    * Aur Vote karna na bhule Bhaiyo aur Behno
2. Prerequisites:
    * Basic Javascript
    * Functions :
       * Named and Anonymous Function
       * Normal Function and Arrow Function
    * Single Threaded Vs Multi Threaded
       * CPUs are made of cores
       * Cores manages threads
       * 8 cores in the m1 chip each having 1 thread so total 8 threads
    * Javascript Runtime
       * Call Stack Single Threadedly executing code one after another
       * Microtask = Promises, Mutation Observer
       * Microtasks Queue -> Event Loop -> Call Stack (if microtasks availaible)
       * Async Operation -> Web APIs -> Event Queue -> Event Loop -> Call Stack (if no microtasks)

## Upcoming Calendar 📆

* Next Class: GSOC 2025, 30 Dec 2024

## Topics To Be Covered 🧑🏻‍💻

* Asynchronous Vs Synchronous
    * Asynchronous programming enables us to do multiple tasks on a single thread by the help of context switching.
    * Synchronous programming simply executes one task at a time.

* Callbacks
    * Callback means when a function is passed into another function as an arguement and then called.
    * PROBLEMS
       * Problem 1: Write a function processArray that takes an array and a callback function. The function should iterate over the array and apply the callback to each element.
       * Problem 2: Create a function delayedGreeting that takes a name and a callback function. The function should wait for 3 seconds and then call the callback function, passing the name as an argument.
    
* Promises
    * A Promise is an Object representing the eventual completion or failure of an Asynchronous Operation.
    * States Of a Promise : Pending, Fulfilled, Rejected
    * PROBLEMS
       * Problem 1: Write a function fetchData that returns a promise. The promise should resolve with the string "Data fetched" after 2 seconds. Use the .then method to log the resolved value.
       * Problem 2: Create a function delayedDouble that takes a number and returns a promise. The promise should resolve with double the number after 1 second. Chain multiple calls to delayedDouble to double a number three times and log the final result.
    
* Async Await
    * These are keywords.
    * An async Function is a Function that returns a Promise.
    * await keyword makes Javascript wait untill the promise is resolved and returns the result. If the promise is rejected, it throws an error
    * PROBLEMS
       * Problem 1: Write an async function that fetches user data from a mock API endpoint (you can use https://jsonplaceholder.typicode.com/users/1). Log the user data to the console.
       * Problem 2: Write an async function that makes two sequential API calls. First, fetch a post from https://jsonplaceholder.typicode.com/posts/1, then fetch the comments for that post from https://jsonplaceholder.typicode.com/posts/1/comments. Log both the post and its comments to the console.

## Additional Topics

* Will update based on the need

## Notes :book:

* Notes for later
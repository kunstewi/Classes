// Create a function delayedGreeting that takes a name and a callback function.
// The function should wait for 3 seconds and then call the callback function,
// passing the name as an argument.

function delayedGreetings(name, callback){
    return setTimeout(() => {
     callback(name);
    }, 3000)
 }
 
 delayedGreetings("Alice", (name) => {
     console.log("Hello " + name);
 });

 delayedGreetings()
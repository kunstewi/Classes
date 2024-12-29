// ES6 Syntax Local Module

// Importing Functions
import { add, subtract } from "./exportModule.js";

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

// Importing Object
import user from "./exportModule.js";

console.log(user.name); // Output: John Doe
console.log(user.age); // Output: 30

// Core Modules

// Core modules are already exported by Node.js and can be imported using require() function.
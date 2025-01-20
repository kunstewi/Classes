// Primitive Data Types (Immutable)

// Numbers
let num1 = 5;
let num2 = num1; // num2 is a copy of num1

num2 = 10; // This does not change num1

console.log(num1); // Output: 5
console.log(num2); // Output: 10

// Strings
let str1 = "hello";
let str2 = str1; // str2 is a copy of str1

str2 = "world"; // This does not change str1

console.log(str1); // Output: "hello"
console.log(str2); // Output: "world"


// Non-Primitive Data Types (Mutable)

// Arrays
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 is a reference to arr1

arr2[0] = 10; // This changes the first element of arr1 as well

console.log(arr1); // Output: [10, 2, 3]
console.log(arr2); // Output: [10, 2, 3]

// Objects
let obj1 = { name: "John", age: 30 };
let obj2 = obj1; // obj2 is a reference to obj1

obj2.age = 31; // This changes the age property of obj1 as well

console.log(obj1); // Output: { name: "John", age: 31 }
console.log(obj2); // Output: { name: "John", age: 31 }
# TYPESCRIPT

## Announcements :loudspeaker:

1. I am still Learning so i might miss few things.
    * Vaiyo aur beheno Vote karna na bhule.
    * Bikul Na bhule.
    * https://tinyurl.com/ymye97pt (event link)

2. Prerequisites:
    * Javascript
    * Node.js

## Upcoming Calendar 📆

* 22 January Node.js and Express Final Part
* 25 January Typescript Second Part
* Time 9.30 - 11.00 PM

## Topics To Be Covered 🧑🏻‍💻

* What is Typescript
    * It is not a new language, it's just an extension of Javascript with many more features.
    * As Javascript uses .js extension, Typescript uses .ts extension.
    * Developed and Maintained by Microsoft, released in 2012.
    * Javascript is dynamically typed so its hard to catch errors, typescript is statically typed so its efficient for large scale applications.
    * Typescript introduces type safety to javascript.

* How Typescript Runs
    * Typescript is not a new language so it does not run directly.
    * Typescript code gets transpiled into Javascript.
       * Transpile means transforming source code written in one high level language into another high level language.
       * Compile means transforming source code written in one high level language into a low leve language that can be understood by machines.
    * If there is any error in your typescript code, the code won't get transpiled to javascript.
    * Remember typescript only checks type errors or syntactical errors it won't check your logic errors.
    * If there is no errors in the typescript code it gets transpiled to Javascript.
    * Then the javascript code gets executed on Node.js or Browsers.
    
* Setting Up Typescript
    * Make sure you have Node.js installed on your computer.
    * Install typescript globally using command : npm install -g typescript
    * When you install typescript it comes with its own compiler that converts the typescript code to javascript called tsc (typescript compiler)
    * You can check your typescript version by running command : tsc -version
    * Create a folder to write typescript code.
    * initialize node.js in this file by running command : npm init or npm init -y
    * it will create a package.json file in the folder where you can manage your node modules.
    * Initialize Typescript by running tsc --init
    * It will create tsconfig.json file in your folder, where you can manage configurations of your typescript code for the project.
    * When you run typescript it makes a js file to execute, you should keep these files in different folders.
    * Typescript code in src and js code(made from ts) in dist folder.
    * Add this dist folder in .gitignore so it doesn't get pushed to github.

* Basic Types in Typescript
   
   * Primitive Vs Non-Primitive
      * Primitive types are the most basic data types in TypeScript. They are immutable(once created can't be changed by operations, passed by value) and represent a single value.
      * Non-primitive types, also known as reference types, are more complex data types. They can hold multiple values and are mutable.(once created values can be changed using operations, passed by reference)
      

   * Primitive
       * Boolean
       * Number
       * String
       * Null & Undefined

   * Non-Primitive
       * Tuple
       * Enum
       * Any
       * Void
       * Array
       * Never
       * Object

   * Type Inference
      * You can use javascript code in .ts file just fine without specifying the types explicitly, because typescript uses type inference to automatically determine types, so if you try to give different data type to a pre type determined variable it would throw an error. And its always a good practise to explicitly declare types.

* Type Annotations
    * 

* Package Management with npm
   * used in managing third party modules
   * Some commands
      * npm init
      * npm install <package-name>
      * npm uninstall <package-name>
      * npm update <package-name>
      * npm install
      * npm list
   * package.json

* Error Handling
   * Try-catch blocks
   * Handling asynchronous errors

* Streams and Buffers
   * Understanding streams
   * Working with buffers
   
* Environment Variables
   * Using environment variables in Node.js applications
   * Express.js

* Problems
   * How do you create a simple HTTP server in Node.js that responds with "Hello, World!"?
   * How do you read the contents of a file asynchronously in Node.js?
   * How do you create and use a custom module in Node.js?
   * How do you write data to a file in Node.js?
   * How do you handle errors in Node.js using try-catch blocks?
   * How do you use the fs module to list all files in a directory?
   * How do you make an HTTP GET request in Node.js using the http or https module?
   * How do you use the path module to work with file and directory paths?
   * How do you create a simple Express.js application with one route?
   * How do you use environment variables in a Node.js application?
   * How do you set up a basic package.json file for a Node.js project?
   * How do you install and use a third-party module from npm in your Node.js project?
   * How do you use the events module to create and handle custom events in Node.js?
   * How do you use the stream module to read data from a file and write it to another file?
   * How do you use the crypto module to hash a string in Node.js?

## Additional Topics

* {
  let under ="wow";
  console.log(kind);
  console.log(under);
}

block

## Notes :book:

* Theory Problems
   * What is Node.js and how does it differ from traditional JavaScript in the browser?
   * How do you install Node.js on your system?
   * What is npm and how is it used in Node.js projects?
   * How do you create a new Node.js project?
   * What are the core modules in Node.js and how do you use them?
   * How do you create and use custom modules in Node.js?
   * What is the purpose of the package.json file in a Node.js project?
   * How do you handle asynchronous operations in Node.js?
   * What are callbacks, promises, and async/await in Node.js?
   * How do you set up a basic HTTP server using Node.js?
   * What is the event loop in Node.js and how does it work?
   * How do you read and write files in Node.js?
   * What are streams in Node.js and how are they used?
   * How do you handle errors in Node.js?
   * What are some common third-party modules used in Node.js projects?
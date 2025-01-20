// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;

// String
let color: string = "blue";

// Array
let list: number[] = [1, 2, 3];
let list2: string[] = ["cow", "dog", "pig"];
let list3: Array<number> = [1, 2, 3];
let list4: Array<string> = ["cow", "dog", "pig"];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

// Enum
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
    throw new Error(message);
}

// Object
let obj: object = { name: "John", age: 30 };

// Function Annotations

function greet(name: string): void { // return type is void and parameter type is string
    console.log("Hello, " + name);
}

// return type number

function add(a: number, b: number): number {
    return a + b;
}

// Optional Parameters : lastName is optional, so it may be undefined if not provided

function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

// Default Parameters

function buildName2(firstName: string, lastName: string = "Smith"): string {
    return firstName + " " + lastName;
}

// Rest Parameters

function buildName3(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}
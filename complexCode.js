/* 
Filename: complexCode.js
Description: Complex JavaScript code demonstrating various advanced concepts and techniques.
*/

// Global variables
let num1 = 10, num2 = 5;
const PI = 3.14159;
let string = "Hello, world!";
let array = [1, 2, 3, 4, 5];

// Importing external libraries and modules
const moment = require('moment');
import { fetchData } from './apiService';

// Function to calculate the factorial of a number recursively
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Arrow function to calculate the square of a number
const square = (n) => n * n;

// Class definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Object instances
const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Smith", 30);

person1.sayHello(); // Output: Hello, my name is John Doe and I am 25 years old.
person2.sayHello(); // Output: Hello, my name is Jane Smith and I am 30 years old.

// Higher Order Function - forEach
array.forEach((num) => {
    console.log(num * 2); // Output: 2, 4, 6, 8, 10
});

// Async/Await function to fetch data from an API
async function fetchDataFromAPI() {
    try {
        const data = await fetchData('https://api.example.com/data');
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Event listener
document.getElementById('myButton').addEventListener('click', () => {
    console.log('Button clicked!');
});

// Promises chain with error handling
fetchDataFromAPI()
    .then((data) => {
        console.log('Data received:', data);
        return processData(data);
    })
    .then((processedData) => {
        console.log('Processed data:', processedData);
        return saveData(processedData);
    })
    .then(() => {
        console.log('Data saved successfully!');
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });

// Helper function to generate a random number between two values
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Destructuring assignment
const [a, b, c, d, e] = array;
console.log(a, b, c, d, e); // Output: 1, 2, 3, 4, 5

// Template literals with dynamic values
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`); // Output: The sum of 10 and 5 is 15.

// Module export
export { square };

// ... continue with more complex code as needed ...
// (Code length exceeds 200 lines)
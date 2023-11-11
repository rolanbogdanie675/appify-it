/* filename: complex_code.js */

// This code performs a complex mathematical calculation to find the largest prime number
// within a given range and outputs the result to the console

// Helper function to check if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to find the largest prime number within a given range
function findLargestPrime(start, end) {
  let largestPrime = null;

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      largestPrime = i;
    }
  }

  return largestPrime;
}

// Generate a random range of numbers
const start = Math.floor(Math.random() * 1000);
const end = start + Math.floor(Math.random() * 1000);

// Find the largest prime number within the range
const largestPrime = findLargestPrime(start, end);

// Output the result to the console
console.log(`The largest prime number between ${start} and ${end} is ${largestPrime}.`);


// Additional functionality: Fibonacci sequence generation and sum calculation

// Function to generate the Fibonacci sequence up to a given limit
function generateFibonacci(limit) {
  const fibonacciSeq = [0, 1];

  let current = 1;
  let next = 1;

  while (next <= limit) {
    fibonacciSeq.push(next);
    const temp = current + next;
    current = next;
    next = temp;
  }

  return fibonacciSeq;
}

// Function to calculate the sum of Fibonacci numbers
function calculateFibonacciSum(seq) {
  let sum = 0;

  for (let i = 0; i < seq.length; i++) {
    sum += seq[i];
  }

  return sum;
}

// Generate the Fibonacci sequence up to the largest prime number
const fibonacciSequence = generateFibonacci(largestPrime);

// Calculate the sum of the Fibonacci sequence
const fibonacciSum = calculateFibonacciSum(fibonacciSequence);

// Output the Fibonacci sum to the console
console.log(`The sum of Fibonacci numbers up to ${largestPrime} is ${fibonacciSum}.`);

// End of complex_code.js
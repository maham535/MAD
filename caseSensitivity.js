// Case-sensitive variables
let name = "John";   // lowercase 'name'
let Name = "Doe";    // uppercase 'Name'

// Case-sensitive function names
function greet() {
  console.log("Hello, " + name); // using 'name'
}

function Greet() {
  console.log("Hello, " + Name); // using 'Name'
}

// Calling the functions
greet(); // Output: Hello, John
Greet(); // Output: Hello, Doe

// Example with 'typeof' keyword (it's a keyword, not a function)
let age = 25;
console.log(typeof age); 
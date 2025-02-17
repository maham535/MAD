// Valid identifiers
let userName = "Alice";   // Camel case: userName
let _age = 25;             // Starts with an underscore
let $salary = 3000;        // Starts with a dollar sign

// Invalid identifiers
// let 1stName = "Bob";    // Invalid: starts with a number
// let #carModel = "Ford"; // Invalid: starts with a symbol

// Function using camelCase
function greetUser() {
  console.log("Hello, " + userName);
}

greetUser();  // Output: Hello, Alice

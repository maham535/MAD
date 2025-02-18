function exampleFunction() {
    // Function Scope
    var localVar = "I am a local variable";
    console.log(localVar);  // Accessible inside the function
}

exampleFunction();  // Output: "I am a local variable"

// Attempting to access localVar outside the function will result in an error
console.log(localVar);  // Error: localVar is not defined

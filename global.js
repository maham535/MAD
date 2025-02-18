// Global Scope
var globalVar = "I am a global variable";

function displayGlobalVar() {
    console.log(globalVar);  // Accessible within the function
}

displayGlobalVar();  // Output: "I am a global variable"

// Global variable can also be accessed outside the function
console.log(globalVar);  // Output: "I am a global variable"

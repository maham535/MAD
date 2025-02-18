// Block Scope Example with let and const

// Global Scope
let globalVar = "I am a global variable";

console.log("Global Variable:");
console.log(globalVar); // Accessible anywhere

// Block inside a function
function testBlockScope() {
    // Function Scope

    if (true) {
        // Block Scope
        let blockVar = "I am a block-scoped variable";
        const blockConst = "I am a block-scoped constant";

        console.log("Inside if block:");
        console.log(blockVar);  // Accessible here
        console.log(blockConst); // Accessible here
    }

    // Trying to access block-scoped variables outside the if block
    console.log("Outside if block:");
    console.log(blockVar);  // Error: blockVar is not defined
    console.log(blockConst);  // Error: blockConst is not defined
}

testBlockScope();

// Block Scope Example in a loop
console.log("\nLoop Block Scope Example:");

for (let i = 0; i < 3; i++) {
    console.log("Inside loop block, i = " + i); // Accessible here
}

console.log("Outside loop block:");
console.log(i); // Error: i is not defined, because `let` is block-scoped

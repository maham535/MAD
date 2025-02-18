function testConstScope() {
    if (true) {
        const z = 30;  // `const` also has block scope, and `z` can't be reassigned
        console.log(z);  // Output: 30
    }
    console.log(z);  // Error: z is not defined because `z` is block-scoped
}

testConstScope();
function testLetScope() {
    if (true) {
        let y = 20;  // `let` has block scope, so `y` will only be accessible inside this `if` block
        console.log(y);  // Output: 20
    }
    console.log(y);  // Error: y is not defined because `y` is block-scoped
}

testLetScope();
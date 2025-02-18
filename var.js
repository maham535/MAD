function testVarScope() {
    if (true) {
        var x = 10;  // `var` is function-scoped, so it will be accessible outside the `if` block
    }
    console.log(x);  // Output: 10, because `x` is accessible globally within the function
}

testVarScope();

var output = [];
var count = 1;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }

    count++;
}

// Example: Run the function 15 times
for (var i = 0; i < 10; i++) {
    fizzBuzz();
}

// Output array will contain the FizzBuzz sequence
console.log(output);

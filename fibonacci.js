let a=0;
let b=1;
for(let i=0;i<10;i++){
    let c=a+b;
    a=b;
    b=c;
    console.log(c);
}


function generateFibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

let fibonacciSequence = generateFibonacci(10);
console.log(fibonacciSequence);

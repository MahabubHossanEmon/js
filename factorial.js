function factoril(number){
    let sum=0;
for(let i=1;i<=number;i++){
 sum=sum+i;
 console.log(i, sum);
}
return sum;
}

factoril(15);

function multiplicationOfNumbers(numbers){
    let results=1;
    for(let i=1;i<=numbers;i++){
        results =results*i;
    }
    return results;
}
let multiplication = multiplicationOfNumbers(9);
console.log('factrioal 9! '+multiplication);

function revarse(num){
    let results=1;
    for(let i=num;i>=1;i--){
        results=results*i;

    }
    return results;
}
let revarseResult=revarse(9);
console.log(revarseResult);
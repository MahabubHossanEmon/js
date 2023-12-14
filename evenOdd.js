function issEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        console.log('number is even');
    }
    else{
        console.log('number is odd');
    }

}
issEven(45645457);
issEven(679784);
 

function isOdd(number){
    const remainder2=number%2;
    if(remainder2 === 0){
     return true;
    }
    else{
        return false;
    }

}
const type=isOdd(454);
console.log(type);

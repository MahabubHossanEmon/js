function getTotal(assignment1, assignment2, assignment3){
    const total=assignment1+assignment2+assignment3;
    return total;
}

const person1=getTotal(33,55,65);
const person2=getTotal(23,44,45);
console.log(person1);
console.log(person2);
const totalAdd=(person1+person2);
console.log(totalAdd);
console.log('1st and 2nd difference :',person1-person2);
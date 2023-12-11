

// bmi cal
// function bmiCalculator (weight, height) {
//     var bmi = weight/Math.pow(height,2);
    
//     return Math.round( bmi);
// }
// var bmi = bmiCalculator(55,1.8);
// console.log(bmi);
function bmiCalculator(weight, height){
    var bmi=weight / Math.pow(height,2);
    return Math.round(bmi);
}

var bmi= bmiCalculator(85, 1);
console.log(bmi);
if(bmi<18.5){
    console.log("Your BMI is "+ bmi + " so you are underweight");
}
else if(bmi>18.5 && bmi<24.9){
    console.log("Your BMI is "+ bmi + " so you are normal weight");
}
else{
   console.log("Your BMI is "+ bmi + " so you are overweight"); 
}
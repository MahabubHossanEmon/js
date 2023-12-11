console.log(123);

// bmi cal
function bmiCalculator (weight, height) {
    var bmi = weight/Math.pow(height,2);
    
    return Math.round( bmi);
}
var bmi = bmiCalculator(55,1.8);
console.log(bmi);
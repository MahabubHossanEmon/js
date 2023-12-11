

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    
    return get(bmi);
}

function get(bmi) {
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}

// Example usage:
var bmiResult = bmiCalculator(70, 2);
console.log(bmiResult);
  

// used toFixed before . show how decimal value

function getBmi(weight,height){
    var bmi = weight/Math.pow(height,2);
    return gett(bmi);
}

function gett(bmi){
    if(bmi<18.5){
        return "Your BMI is " +  bmi.toFixed(3) + ", so you are underweight.";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        return "Your BMI is " + bmi.toFixed(2) + ", so you have a normal weight.";
    }
    else{
        return "Your BMI is " + bmi.toFixed(2) + ", so you are overweight.";
    }

}

var result =getBmi(55,1.8);
console.log(result);
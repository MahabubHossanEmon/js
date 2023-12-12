// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.


var names =["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function who(names){
    var numberOfPeople=names.length;
    var randomPosition=Math.floor(Math.random() * numberOfPeople);
    var randomPerson=names[randomPosition];
    return randomPerson + " is going to buy lunch today!";

}


console.log(who(names));
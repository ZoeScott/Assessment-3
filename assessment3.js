//1. Create two variables, num1 and num2, and assign a numerical value to each. Finally, create a third variable, sum, and assign it as a value the sum of num1 and num2.
var num1;
num1 = 10;
console.log(num1);


var num2;
num2 = 20;
console.log(num2);

console.log(num1 + num2);

//2. Create two variables, firstName and lastName, and assign them the appropriate values from your name. Using string concatenation, log the following phrase to the console: “Hello, my name is firstName lastName”, where firstName and lastName are replaced with the values from the variables.
var firstName = "Zoe";
var lastName = "Scott";
var res = firstName.concat(lastName);
console.log("Hello, my name is " + res);

//3. Using the slice, substring, or substr methods, pull the last four characters from the following string:

var string = "123-45-6789";
var res = string.substr(7);
console.log(res);

//4. Create an array called suits that contains the four different suits from a standard deck of cards.
var suits = ["Diamond", "Spade", "Club", "Heart"];
console.log(suits[2]);

var bool = true;

if (bool === true) {
    console.log("The Boolean is true");
}
console.log(bool)



//5. Print out the third suit from your suits array.


//6. Create a variable, bool. Using an if statement, if bool is true, print out “The Boolean is true”.

//BONUS

//7. Create two Boolean variables, speed and noticedByCop.  Using an if statement, check to see if speed is above 80 AND noticedByCop is equal to true. If both of these are met, print out “You got caught!” to the console. Add an else block to the if statement and print out “You’re safe…for now” in the case both of those conditions aren’t met.
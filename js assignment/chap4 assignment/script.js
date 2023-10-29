// EXERCISE 4.1
// Point 1: Create a variable with a Boolean value
let myVariable = true;

// Point 2: Output the value of the variable to the console
console.log("The value of myVariable is: " + myVariable);

// Point 3: Check whether the variable is true and output a message
if (myVariable) {
  console.log("myVariable is true, performing action...");
}

// Point 4: Check whether the variable is not true and output a message
if (!myVariable) {
  console.log("myVariable is not true, performing alternative action...");
} else {
  console.log("myVariable is true (using an else statement)...");
}

// Point 5: Change the variable to the opposite
myVariable = !myVariable;

// Recheck and display messages based on the new value
if (myVariable) {
  console.log("myVariable is now true, performing action...");
} else {
  console.log("myVariable is now not true, performing alternative action...");
}





// EXERCISE 4.2
// Point 1: Create a prompt to ask the user's age
let userAgeInput = prompt("Please enter your age:");

// Point 2: Convert the response from the prompt to a number
let userAge = parseInt(userAgeInput);

// Point 3: Declare a message variable to hold the console message
let message;

// Point 4: Check if the input age is equal to or greater than 21
if (userAge >= 21) {
  message = "You can enter the venue and purchase alcohol.";
}
// Point 5: Check if the input age is equal to or greater than 19 (but less than 21)
else if (userAge >= 19) {
  message = "You can enter the venue but cannot purchase alcohol.";
}
// Point 6: Default else statement if neither of the above conditions is true
else {
  message = "You are denied entry to the venue.";
}

// Point 7: Output the response message variable to the console
console.log(message);







// EXERCISE 4.3

// Point 1: Create a Boolean value for the ID variable
let isIDValid = true; // You can change this value to false to test both scenarios

// Point 2: Use a ternary operator to create the message variable
let message1 = isIDValid ? "You are allowed to enter the venue." : "You are not allowed to enter the venue.";

// Point 3: Output the response to the console
console.log(message1);







// EXERCISE 4.4
// Point 1: Generate a random number between 0 and 5 (6 possible results)
var randomNumber = Math.floor(Math.random() * 6);
console.log(randomNumber);

// Point 2: Create a prompt to get a user's question
var userQuestion = prompt("Ask the Magic 8-Ball a question:");

// Point 3: Create 6 responses using a switch statement
var response;
switch (randomNumber) {
  case 0:
    response = "It is certain.";
    break;
  case 1:
    response = "Reply hazy, try again.";
    break;
  case 2:
    response = "Don't count on it.";
    break;
  case 3:
    response = "Signs point to yes.";
    break;
  case 4:
    response = "Outlook not so good.";
    break;
  case 5:
    response = "Cannot predict now.";
    break;
  default:
    response = "Sorry, I can't answer that right now.";
}

// Point 4: Create a variable to hold the end response
var finalResponse = "You asked: " + userQuestion + "\nMagic 8-Ball says: " + response;

// Point 5: Output the user's question and the randomly selected response
console.log(finalResponse);






// EXERCISE 4.5
// Point 1: Prompt the user to set the prize value
var prize = prompt("Select a number between 0 and 10 to reveal your prize:");
console.log(prize);

// Point 2: Convert the prompt response to a number
prize = parseInt(prize);

// Point 3: Create a variable for the output message
var message2 = "My Selection: ";

// Point 4: Use a switch statement to provide responses for different numbers
var response;
switch (prize) {
  case 0:
    response = "Congratulations! You've won a trip to a tropical paradise!";
    break;
  case 1:
  case 2:
  case 3:
    response = "You've won a $50 gift card to your favorite store.";
    break;
  case 4:
  case 5:
  case 6:
    response = "You'll receive a free meal at a fancy restaurant.";
    break;
  case 7:
  case 8:
  case 9:
    response = "You've won a weekend getaway package.";
    break;
  case 10:
    response = "Sorry, you didn't win anything this time. Try again!";
    break;
  default:
    response = "Invalid selection. Please choose a number between 0 and 10.";
}

// Point 5: Use the switch break to combine results for prizes

// Point 6: Output the message back to the user by concatenating strings
console.log(message2 + response);





// CHAPTER PROJECT
// EVALUATING A NUMBER GAME

// Point 1: Define a dynamic number value
var dynamicNumber = 42; // You can change this to any number you like

// Point 2: Ask the user to enter a number
var userNumber = prompt("Enter a number:");

// Point 3: Convert the user's input to a number data type
userNumber = parseFloat(userNumber);

// Point 4: Compare the user's number with the dynamic number
if (userNumber > dynamicNumber) {
  console.log("Your number is greater than the dynamic number.");
} else if (userNumber === dynamicNumber) {
  console.log("Your number is equal to the dynamic number.");
} else if (userNumber < dynamicNumber) {
  console.log("Your number is less than the dynamic number.");
} else {
  console.log("Invalid input. Please enter a valid number.");
}





//FRIEND CHECKER GAME

// Point 1: Ask the user to enter a name
var userName = prompt("Enter your name:");

// Point 2: Use a switch statement to check the name
switch (userName) {
  case "Alice":
    console.log("Hello, Alice! You are a friend.");
    break;
  case "Bob":
    console.log("Hello, Bob! You are a friend.");
    break;
  case "Charlie":
    console.log("Hello, Charlie! You are a friend.");
    break;
  default:
    console.log("Sorry, I don't know you, " + userName + ". You are not a recognized friend.");
}




// ROCK PAPER SCISSORS GAME
// Step 1: Create an array for Rock, Paper, and Scissors
var choices = ["Rock", "Paper", "Scissors"];

// Step 2: Generate random numbers for player and computer selections
var playerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2
var computerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2

// Step 3: Create a variable to hold the response message
var message4 = "Player chose " + choices[playerIndex] + ".\nComputer chose " + choices[computerIndex] + ".\n";

// Step 4: Handle a tie condition
if (playerIndex === computerIndex) {
  message4 += "It's a tie!";
}
// Step 5: Apply game logic to determine the winner
else if (
  (playerIndex === 0 && computerIndex === 2) ||
  (playerIndex === 1 && computerIndex === 0) ||
  (playerIndex === 2 && computerIndex === 1)
) {
  message4 += "Player wins!";
} else {
  message4 += "Computer wins!";
}

// Step 6: Output the player's selection, computer's selection, and game result
console.log(message4);

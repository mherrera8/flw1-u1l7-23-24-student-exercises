// html div
let greeting = document.querySelector(".greeting");

// 1. Create a variable called `firstName` and set the value to your name.
let firstName = "Melania"

// 2. Create a variable called `lastName` and set the value to your last name.
let lastName = "Herrera"


// 3. Create a variable called `greetingMessage`.
// - Using string interpolation, create a messga that say "Hi, (your first name) (your last name)!"
let greetingMessage = `Hi, ${firstName} ${lastName}!`;

console.log(greetingMessage);

  
// 4. Set the innerHTML of the greeting div to the greeting message.
greeting.innerHTML = greetingMessage;
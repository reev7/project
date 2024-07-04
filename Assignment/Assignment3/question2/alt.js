/*
Question: Write a program that takes a user's first name and last name as inputs and prints a greeting message using template literals. For example, if the input is `John` and `Doe`, the output should be `Hello, John Doe!`.
Hint:Use backticks (`) to create the template literal and` ${}` to embed expressions.
*/
// Prompting the user for input
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

// Creating the greeting message using template literals
let greeting = `Hello, ${firstName} ${lastName}!`;

// Displaying the greeting message
console.log(greeting);

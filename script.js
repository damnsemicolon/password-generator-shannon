// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = [
  '0', 
  '1', 
  '2', 
  '3', 
  '4', 
  '5', 
  '6', 
  '7', 
  '8', 
  '9'
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//set up
var pwLength = 0;
var pwLowerCase = 0;
var pwUpperCase = 0;
var pwNumeric = 0;
var pwSpecial = 0;
// var userchoices = {
//   pwLowerCase: lowerCasedCharacters,
//   pwUpperCase: upperCasedCharacters,
//   pwNumeric: numericCharacters,
//   pwSpecial: specialCharacters
// }

// Function to prompt user for password options
function getPasswordOptions() {

  // Prompt for Length of Password 
  var pwLength = (prompt("Please enter the length of password:\nBetween 10 and 64"));

while(pwLength < 10 || pwLength > 64) {
    alert("The password length must be at least 10 characters but no more than 64 characters.");
    var pwLength = (prompt("Please reenter the length of your password:\nBetween 10 and 64"));
}

  // Confirm for Lowercase
  var pwLowerCase = confirm("Does your password needs lowercase characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");


  // Confirm for Uppercase
  var pwUpperCase = confirm("Does your password needs UPPERCASE characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");

  // Confirm for Numeric
  var pwNumeric = confirm("Does your password needs numbers?\n[OK] = Yes please.\n[Cancel] = No thanks.");

  // Confirm for Special Characters
  var pwSpecial = confirm("Does your password needs special characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");

  // In case user clicks Cancell for all
  while(pwLowerCase === false && pwUpperCase === false && pwNumeric === false && pwSpecial === false) {
    alert("Your password must need at least one criteria from below:\nLowercase Characters\nUppercase Characters\nNumeric Characters\nSpecial Characters");
    var pwLowerCase = confirm("Does your password needs lowercase characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");
    var pwUpperCase = confirm("Does your password needs UPPERCASE characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");
    var pwNumeric = confirm("Does your password needs numbers?\n[OK] = Yes please.\n[Cancel] = No thanks.");
    var pwSpecial = confirm("Does your password needs special characters?\n[OK] = Yes please.\n[Cancel] = No thanks.");
  }

// console.log(boolean(pwLowerCase));



// Function for getting a random element from an array
// function getRandom(arr) {

// }

// Function to generate password with user input
// function generatePassword() {

// }

// Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;


// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
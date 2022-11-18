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


// Function to prompt user for password options
function getPasswordOptions() {

  // Length of Password (Shortest 11, Longest 64)
  function lengthOfPWQ () {
    var lengthOfPWA = prompt("How many characters would you like your password to contain", "Your Number (≥ 10, <65");
    if (lengthOfPWA >= 10 && lengthOfPWA > 64) {
      console.log("Good Job");
    }
    
    else if (lengthOfPWA < 10 || lengthOfPWA> 64) {
      prompt("Please enter number at least or larger than 10 but no more than 64");
  }
  }

  getPasswordOptions();
  // Prompt for Lowercase

  // Prompt for Uppercase

  // Prompt for Numeric

  // Prompt for Special Characters


  // getPasswordOptions();

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
}

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
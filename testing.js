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
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
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
  
  // Use composition to make object we can traverse to determine user preferences
  var characterTypeChoices = {
    lowercase: lowerCasedCharacters,
    uppercase: upperCasedCharacters,
    numeric: numericCharacters,
    special: specialCharacters
  }
  
  var MIN_PW_LENGTH = 10;
  var MAX_PW_LENGTH = 64;
  
  // Function to prompt user for password options
  function getPasswordOptions() {
  
    var options = {
      pwLength: 0,
      characterTypes: []
    }
    
    options.pwLength = prompt("How long would you like your password to be? Must be between " + MIN_PW_LENGTH + " and " + MAX_PW_LENGTH + " characters.");
  
    if (options.pwLength < MIN_PW_LENGTH || options.pwLength > MAX_PW_LENGTH) {
      alert ("Password must be between " + MIN_PW_LENGTH + " and " + MAX_PW_LENGTH);
      getPasswordOptions();
    } 
  
    // Keep prompting for characterTypes if none have been chosen
    while (options.characterTypes.length < 1) {
  
      // Iterate through choices and prompt user to determine whether each should be included 
      for (var charType in characterTypeChoices) {
          if (prompt("Include " + charType + " characters?") !== null) {
          options.characterTypes.push(characterTypeChoices[charType]);
        }
      }
      if (options.characterTypes.length === 0) {
        alert("You must include at least one set of characters - please OK an option.")
      }
    }
    return options;
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Function to generate password with user input
  function generatePassword() {
  
    // Get user's preferences - length and character types
    var options = getPasswordOptions();
    var password = "";
      
    for (var i = 0; i < options.pwLength; i++) {
  
      var charSet = getRandom(options.characterTypes);
      password = password.concat(getRandom(charSet));
    }
    return password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
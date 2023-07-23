// Generate button - this is the first thing people will need to click on
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// State all of elements that the password needs to include, and all the returns that are available
var passwordRequirements = {
  passLength: 0,
  passNumber: numericCharacters,
  passLower: lowerCasedCharacters,
  passUpper: upperCasedCharacters,
  passSpecial: specialCharacters,
};
console.log(passwordRequirements);

//What does this bit do?
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password with user input
function generatePassword() {
  var userLength = 0;
  var userSpecial;
  var userUpper;
  var userLower;
  var userNumber;

  userLength = 0;
  passwordRequirements.passLength = 0;
  output = "";

  // Rules for what happens with the user input
  while (userLength < 8 || userLength > 128) {
    userLength = prompt(
      "The fun is about to start! Please choose how many characters you'd like your password to be by selecting a number between 8 and 128. "
    );
    // Define what happens if the user doesn't proceed any further by clicking 'Cancel'
    if (userLength === null) {
      prompt(
        "Are you sure we can't tempt you? Enter a number between 8 and 128 to receive your secure password."
      );
    } else {
      ///////////
    }
  }
}

// Function to prompt user for password options - between 8 + 128 characters.
//Do they want numbers/lowercase/uppercase/special characters?
//Input needs to be validated
//Random password needs to display in box

//What is this bit doing?

function getPasswordOptions() {}
getPasswordOptions();

// Function for getting a random element from an array

//let randomElement =
//everyCharacter[Math.floor(Math.random() * everyCharacter.length)];
//console.log(randomElement);

//Or do I need to do it for every item? i.e. numeric, uppercase, lowercase, special

//function getRandom() {
//let randomElement =
//everyCharacter[Math.floor(Math.random() * everyCharacter.length)];
//}
//getRandom();
//console.log(randomElement);

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

//Leave this bit?
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Stating the criteria that the password must meet
passCriteria = {
  passLength: 0,
  specialCharacters,
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters,
};

var userLength = 0;
var userSpecial;
var userUpper;
var userLower;
var userNumber;
output = "";
passCriteria.passLength = 0;

// Function to generate password with user input - THE VARIABLES ARE WHAT THE USER HAS ENTERED
function generatePassword() {
  var userLength = 0;
  var userSpecial;
  var userUpper;
  var userLower;
  var userNumber;

  userLength = 0;
  output = "";
  passCriteria.passLength = 0;

  //Start prompts for user to select password
  if (
    confirm(
      "The fun is about to start! In order to create your password, we'll need you to choose how many characters you'd like it to be. Click 'OK' to continue."
    ) === false
  ) {
    alert("We're sad to see you leave, but you're welcome back anytime!");
    return "Click below to generate your password";
  } else {
    userLength = prompt("Great. Now please enter a number between 8 and 128.");
  }

  // Make sure the number the user enters is a) between 8 and 128 and b) a number and not anything else
  // If user enters correctly, let them proceed to the next options.
  if (userLength >= 8 && userLength <= 128) {
    passwordOptions();
    } else if (userLength < 8 && userLength > 128) {
    alert(
      "Close! But the number needs to be between 8 and 128. Please try again by clicking the 'Generate Password' button."
    );
    confirm ("The fun is about to start! In order to create your password, we'll need you to choose how many characters you'd like it to be. Click 'OK' to continue.");

    //If user doesn't enter correctly, prompt them to try again
  } else if ((userLength === false)) {
    alert("We're sad to see you leave, but you're welcome back anytime!");
    return "Click below to generate your password";
  } else if (typeof userLength !== "number") {
    alert(
      "Close, but we're looking for a number (e.g. 11, 45, 63) between 8 and 128. Please try again by reclicking the red 'Generate Password'button."
    );
    confirm ("The fun is about to start! In order to create your password, we'll need you to choose how many characters you'd like it to be. Click 'OK' to continue.");
  }
  // Give the users password prompts
  function passwordOptions() {
    userSpecial = confirm(
      "Excellent work. Now, since you're so special, would you like to include a special character? E.g. $*%."
    );
    userUpper = confirm(
      "Next up(per)...capital letters! Would you like to include one?"
    );
    userLower = confirm(
      "How about a lowercase letter? We hear they're all the rage..."
    );
    userNumber = confirm("What about a number? 😉");
  }

  //Continue the prompt box journey based on users' responses
  //First of all, need to sort out the password length, making sure the password generator has at least one variable to choose from.
  while (passCriteria.passLength < userLength) {
    if (
      userSpecial === false &&
      userUpper === false &&
      userLower === false &&
      userNumber === false
    ) {
      alert(
        "Your password is depending on you! To go any further, you must select at least one type of character out of numbers, lowercase, uppercase and special characters."
      );
      passwordOptions();
    }
    //To ensure that the password has at least one of the characters the user has specifically selected, make sure the loop grabs at least one special character/ uppercase/ lowercase / number from the  and adds it to the end
    else {
    while (passCriteria.passLength < userLength) {
      if (userSpecial === true && passCriteria.passLength < userLength) {
        var spec =
          passCriteria.specialCharacters[Math.floor(Math.random() * 23)];
        output = output + spec;
        passCriteria.passLength++;
      }
      if (userUpper === true && passCriteria.passLength < userLength) {
        var up =
          passCriteria.upperCasedCharacters[Math.floor(Math.random() * 26)];
        output = output + up;
        passCriteria.passLength++;
      }
      if (userLower === true && passCriteria.passLength < userLength) {
        var low =
          passCriteria.lowerCasedCharacters[Math.floor(Math.random() * 26)];
        output = output + low;
        passCriteria.passLength++;
      }
      if (userNumber === true && passCriteria.passLength < userLength) {
        var num =
          passCriteria.numericCharacters[Math.floor(Math.random() * 10)];
        output = output + num;
        passCriteria.passLength++;
      }
    }
    }
    return output;
}
}

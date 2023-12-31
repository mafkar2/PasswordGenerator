// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Function for obtaining user input for password options
function getPasswordOptions() {
  // 3)
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must be less than 128 characters');
    return null;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  // if (hasSpecialCharacters) {
  // }else if (hasNumericCharacters) {
  // }else if (hasLowercaseCharacters) {
  // }else if (hasUppercaseCharacters) {
  // }else {
    if (hasSpecialCharacters === false && hasNumericCharacters === false  && hasLowercaseCharacters === false && hasUppercaseCharacters === false ) {
      alert('Password must include at least one character type.')
      return null;
    }
 
  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowercaseCharacters: hasLowercaseCharacters,
    hasUppercaseCharacters: hasUppercaseCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
console.log(randElement);
  return randElement;
}

// Function for generating a password with given inputs
function generatePassword() {
  var options = getPasswordOptions();
  // Create an empty array/purpose to put final password characters in
  // var currentArr = new Array()
  var currentArr = []
  //guarantee of user choice array
  var guarantee = []
//remaining spaces open for random characters chosen by app
  var possibles = []
  // Conditional Statement that concatinates a new array
  if (options.hasSpecialCharacters) {
    possibles= possibles.concat(specialCharacters)
    guarantee.push(getRandom(specialCharacters))
  }
  if (options.hasNumericCharacters) {
    possibles= possibles.concat(numericCharacters)
    guarantee.push(getRandom(numericCharacters))
  }
  if (options.hasLowercaseCharacters) {
    possibles= possibles.concat(lowerCasedCharacters)
    guarantee.push(getRandom(lowerCasedCharacters))
  }
  if(options.hasUppercaseCharacters) {
    possibles= possibles.concat(upperCasedCharacters)
    guarantee.push(getRandom(upperCasedCharacters))
  }
  console.log(possibles)
  console.log(guarantee);
  // Generate random string password from new array
  // let pass = ""
  // let i = 0
  // while (i < options.length) {
  //   pass += getRandom(currentArr);
  //   i++
  // } 
  // return pass
//to randomize the array of possibles which includes all the arrays, based on the length, randomizing for 
for (let i = 0; i < options.length; i++) {
 var possibleCharacter = getRandom(possibles)
 currentArr.push(possibleCharacter)
 
 console.log(currentArr);
}

for (let i = 0; i < guarantee.length; i++) {
 currentArr[i] = guarantee[i]
  
}
console.log(currentArr);
return currentArr.join('')


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
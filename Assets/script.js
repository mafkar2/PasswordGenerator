// Assignment Code

var characterLength = 8;
var choiceArr = [];

 

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  function generatePassword() {
    // Define the characters that can be used in the password
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    var length = 8;

    function generatePassword() {
      // Define the characters that can be used in the password
      var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    
      // Define the length of the password
      var length = 8;
    
      // Initialize an empty string to store the generated password
      var password = "";
    
      // Generate the password by randomly selecting characters from the characters string
      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }

    
  return password;
    
      // Return the generated password
      return password;
  
    // Define the length of the password
    var length = 8;
  
    // Initialize an empty string to store the generated password
    var password = "";
  
    // Generate the password by randomly selecting characters from the characters string
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    // Return the generated password
    return password;
  
}
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 function generatePassword() {

 }

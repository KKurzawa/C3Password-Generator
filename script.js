// Assignment Code-original document
var generateBtn = document.querySelector("#generate");

// Write password to the #password input-original document next 3 lines
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var characterLengthInput = window.prompt("Enter length of your password. Password must be between 8-128 characters.");
  var characterLengthInteger = parseInt(characterLengthInput);
  while (isNaN(characterLengthInteger) || characterLengthInteger < 8 || characterLengthInteger > 128) {
    characterLengthInput = window.prompt("Enter length of your password. Password must be between 8-128 characters.");
    characterLengthInteger = parseInt(characterLengthInput);  
  }
  var includeLowercase = window.prompt("Would you like to include lower case letters in your password?  Reply yes if you would.");
  var includeLowercaseResponse = includeLowercase.includes("yes");
  while (includeLowercaseResponse !== "yes" || includeLowercaseResponse !== "no") {
    includeLowercase = window.prompt("Would you like to include lower case letters in your password?  Reply yes or no.");
    includeLowercaseResponse = includeLowercase.includes("yes");
  }
  // var includeUppercase = window.prompt("Would you like to include upper case letters in your password?  Reply yes if you would.");
  // var includeUppercaseResponse = includeUppercase.includes("yes");
  // var includeLowercaseYes = true;
  // var includeLowercaseRespnse = 
  // var includeUppercase 
  // get input from user w prompt
  // validate that its yes or no
  // for example for includeLowerCase if yes its true, else its false
  console.log(characterLengthInteger);
  console.log(includeLowercaseResponse);
  console.log(includeUppercaseResponse);

// original document
  passwordText.value = password;

}

// Add event listener to generate button-original ducument
generateBtn.addEventListener("click", writePassword);


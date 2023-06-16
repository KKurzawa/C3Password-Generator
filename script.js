var generateBtn = document.querySelector("#generate");

function writePassword() {
  
   // Prompt for password length
  var characterLengthInput = window.prompt("Enter length of your password. Password must be between 8-128 characters.");
  if (characterLengthInput === null) { 
    return;
  }
  var characterLengthInteger = parseInt(characterLengthInput);
  while (isNaN(characterLengthInteger) || characterLengthInteger < 8 || characterLengthInteger > 128) {
    characterLengthInput = window.prompt("Enter length of your password. Password must be between 8-128 characters.");
    if (characterLengthInput === null) { 
      return;
    }  
    characterLengthInteger = parseInt(characterLengthInput);  
  }
  
  // Prompt wether or not to include lower case letters
  var includeLowerCaseInput = window.prompt("Would you like to include lower case letters in your password?  Reply yes or no.");
  if (includeLowerCaseInput === null) { 
    return;
  }
  var lowerCaseInputIsValid = isLowerCaseYesOrNo(includeLowerCaseInput);
  while (!lowerCaseInputIsValid) {
    includeLowerCaseInput = window.prompt("Would you like to include lower case letters in your password?  Reply yes or no.");
    if (includeLowerCaseInput === null) { 
      return;
    }
    lowerCaseInputIsValid = isLowerCaseYesOrNo(includeLowerCaseInput);
  }
  if (includeLowerCaseInput == "yes") {
    includeLowerCaseInput = true
  }  else {
    includeLowerCaseInput = false
  }

  // Prompt wether or not to include upper case letters
  var includeUpperCaseInput = window.prompt("Would you like to include upper case letters in your password?  Reply yes or no.");
  if (includeUpperCaseInput === null) { 
    return;
  }
  var upperCaseInputIsValid = isUpperCaseYesOrNo(includeUpperCaseInput);
  while (!upperCaseInputIsValid) {
    includeUpperCaseInput = window.prompt("Would you like to include upper case letters in your password?  Reply yes or no.");
    if (includeUpperCaseInput === null) { 
      return;
    }
    upperCaseInputIsValid = isUpperCaseYesOrNo(includeUpperCaseInput);
  }
  if (includeUpperCaseInput == "yes") {
    includeUpperCaseInput = true
  }  else {
    includeUpperCaseInput = false
  }

  // Prompt wether or not to include numbers
  var includeNumberInput = window.prompt("Would you like to include numbers in your password?  Reply yes or no.");
  if (includeNumberInput === null) { 
    return;
  }
  var numberInputIsValid = isNumberYesOrNo(includeNumberInput);
  while (!numberInputIsValid) {
    includeNumberInput = window.prompt("Would you like to include numbers in your password?  Reply yes or no.");
    if (includeNumberInput === null) { 
      return;
    }
    numberInputIsValid = isNumberYesOrNo(includeNumberInput);
  }
  if (includeNumberInput == "yes") {
    includeNumberInput = true
  }  else {
    includeNumberInput = false
  }
  
  // Prompt wether or not to include special characters
  var includeSpecialCharactersInput = window.prompt("Would you like to include special characters in your password?  Reply yes or no.");
  if (includeSpecialCharactersInput === null) { 
    return;
  }
  var specialCharactersInputIsValid = isSpecialCharactersYesOrNo(includeSpecialCharactersInput);
  while (!specialCharactersInputIsValid) {
    includeSpecialCharactersInput = window.prompt("Would you like to include special characters in your password?  Reply yes or no.");
    if (includeSpecialCharactersInput === null) { 
      return;
    }
    specialCharactersInputIsValid = isSpecialCharactersYesOrNo(includeSpecialCharactersInput);
  }
  if (includeSpecialCharactersInput == "yes") {
    includeSpecialCharactersInput = true
  }  else {
    includeSpecialCharactersInput = false
  }
  
  //Alert if user responded no to including all character types 
  if (includeLowerCaseInput === false && includeUpperCaseInput === false && includeNumberInput === false && includeSpecialCharactersInput === false) {
    window.alert("You need to reply yes in including at least one of the following: lower case letters, upper case letters, numbers, special charcters.");
    return
  }



  console.log(characterLengthInteger);
  console.log(includeLowerCaseInput);
  console.log(includeUpperCaseInput);
  console.log(includeNumberInput);
  console.log(includeSpecialCharactersInput);

//Password generation
var passwordText = document.querySelector("#password");
var length = characterLengthInteger
let lowerCase 
  if (includeLowerCaseInput === true) {
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
  } else if (includeLowerCaseInput === false) {
    lowerCase = "";
  }
let upperCase 
  if (includeUpperCaseInput === true) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (includeUpperCaseInput === false) {
    upperCase = "";
  }  
let numbers 
  if (includeNumberInput === true) {
    numbers = "1234567890";
  } else if (includeNumberInput === false) {
    numbers = "";
  }  
let specialCharacters 
  if (includeSpecialCharactersInput === true) { 
    specialCharacters = "!@#$%^&*()_+";
  } else if (includeSpecialCharactersInput === false) {
    specialCharacters = "";
  }  

var allCharactars = upperCase + lowerCase + numbers + specialCharacters;

  let password = "";
  if (lowerCase.length > 0) {
    password += lowerCase [Math.floor(Math.random() * lowerCase.length)];
  }
  if (upperCase.length > 0) {
    password += upperCase [Math.floor(Math.random() * upperCase.length)];
  }
  if (numbers.length > 0) {
    password += numbers [Math.floor(Math.random() * numbers.length)];
  }  
  if (specialCharacters.length > 0) {
    password += specialCharacters [Math.floor(Math.random() * specialCharacters.length)];
  }  
  while (length > password.length){
    password += allCharactars [Math.floor(Math.random() * allCharactars.length)];
  }

  passwordText.value = password; 
}

// Confirms the presence of a yes or no answer in prompts
function isLowerCaseYesOrNo(input) {
  if (input == "yes" || input == "no") {
    return true
  } else {
    return false
  }
}

function isUpperCaseYesOrNo(input) {
  if (input == "yes" || input == "no") {
    return true
  } else {
    return false
  }
}

function isNumberYesOrNo(input) {
  if (input == "yes" || input == "no") {
    return true
  } else {
    return false
  }
}

function isSpecialCharactersYesOrNo(input) {
  if (input == "yes" || input == "no") {
    return true
  } else {
    return false
  }
}

generateBtn.addEventListener("click", writePassword);


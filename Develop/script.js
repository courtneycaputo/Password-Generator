//Array of numbers, letters, and special characters that password generator can use

var specialCharacters = ["!","#","$","%","&"]
var numericCharacters = ["0","1", "2", "3","4", "5", "6", "7", "8","9"]
var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//USE SPLIT INSTEAD OF ABOVE WITH EACH IN QUOTES. FIRST BUILD EVERYTHING ELSE THEN TRY THE SPLIT
// var upperCaseCharacters = text.split (" ");
// var specialCharacters = text.split (" ");
// var numbericCharacters = text.split (" ");
// var lowerCaseCharacters = text.split (" ");

function getPasswordOptions(){
 var length = parseInt(prompt("How many characters do you want your password to be?"),10);

  if(Number.isNaN(length)){
    alert("Password length must be provided as a number")
    return null;
  }

  if (length < 8){
    alert("Password legnth must be at least 8 characters")
    return null;
  }

  if(length > 128){
    alert("Password must be less than 129 chracters");
    return null;
  }

  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  var hasNumericCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  var hasLowerCasedCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  var hasUpperCasedCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false)
    {
      alert("Must select at least one character type");
      return null
    }

    var passwordOptions = {
      length: length, 
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    }
    
    return passwordOptions;

}

function getRandom(arr){
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Assignment code here

// Function for generating password
function generatePassword(){
  var options = getPasswordOptions();
  var results = []

  var possibleCharacters = []
  var guaranteedCharacters = [];

  if(!options) return null;

  if(options.hasSpecialCharacters){
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if(options.hasNumericCharacters){
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if(options.hasLowerCasedCharacters){
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if(options.hasUpperCasedCharacters){
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for(var index=0; index < options.length; index++){
    var possibleCharacters = getRandom(possibleCharacters);
    
    results.push(possibleCharacters);
  }

  for(var index=0; index < guaranteedCharacters.length; index++){
    results[index]= guaranteedCharacters[index];
  }

  return results.join("")

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Use this to keep page from reseting when password is generated (from student activity day 4 activity 6)
event.preventDefault();
//Array of numbers, letters, and special characters that password generator can use

var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","`","{","|","}","~"]
// var numericCharacters = ['0 1 2 3 4 5 6 7 8 9']
var numbers = ["0","1", "2", "3","4", "5", "6", "7", "8","9"]
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// //Split out numbers seperately
// var numChar = numericCharacters.split(" ");

// Function for password options of choosing which type of characters and password length
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

  var hasSpecial = confirm(
    "Click OK to use special characters in your password"
  )

  var hasNumbers = confirm(
    "Click OK to use numers in your password"
  )

  var hasLowerCaseLetters = confirm(
    "Click OK to use lower cased letters in your password"
  )

  var hasUpperCaseLetters = confirm(
    "Click OK to use upper cased letters in your password"
  )

  if(hasSpecial === false &&
    hasNumbers === false &&
    hasLowerCaseLetters === false &&
    hasUpperCaseLetters === false)
    {
      alert("Must select at least one character type");
      return null
    }

    var passwordOptions = {
      length: length, 
      hasSpecial: hasSpecial,
      hasNumbers: hasNumbers,
      hasLowerCaseLetters: hasLowerCaseLetters,
      hasUpperCaseLetters: hasUpperCaseLetters
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

  if(options.hasSpecial){
    possibleCharacters = possibleCharacters.concat(special)
    guaranteedCharacters.push(getRandom(special));
  }

  if(options.hasNumbers){
    possibleCharacters = possibleCharacters.concat(numbers)
    guaranteedCharacters.push(getRandom(numbers));
  }

  if(options.hasLowerCaseLetters){
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters)
    guaranteedCharacters.push(getRandom(lowerCaseLetters));
  }

  if(options.hasUpperCaseLetters){
    possibleCharacters = possibleCharacters.concat(upperCaseLetters)
    guaranteedCharacters.push(getRandom(upperCaseLetters));
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


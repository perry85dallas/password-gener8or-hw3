// Assignment Code
var generateBtn = document.querySelector("#generate");


  // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
};
//GIVEN I need a new, secure password

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
function generatePassword() {


//Create the characters for option prompts
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numericalChar = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","]","{","}","<",">","|","?","`","~",];
var getLowercase;
var getUppercase;
var getNumerical
var getSpecial;
var pwLength;
var options;
var makePw;
var confirmedTrues = [];
var enter = [];

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password 
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
  var pwLength = window.prompt ("Please choose how many characters you want between 8-128");
    if (pwLength < 8 || pwLength > 128) {
      pwLength = parseInt(alert ("Sorry, please choose a number between 8-128."));
      generatePassword();
    }    
      else if (pwLength >= 8 || pwLength <= 128) {
        console.log(pwLength);
      };
  
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 
  getLowercase =  confirm("Would you like lower case letters in your password?");
  console.log(getLowercase);
  if (getLowercase) {
      confirmedTrues = confirmedTrues.concat(lowercaseChar);
      console.log(confirmedTrues);
  }
               
  
  getUppercase = confirm("Would you like upper case letters in your password?");
  console.log(getUppercase);
  if (getUppercase) {
      confirmedTrues = confirmedTrues.concat(uppercaseChar);
      console.log(confirmedTrues);
  };

      
  getNumerical = confirm("Would you like numbers in your password?");
  console.log(getNumerical);
  if (getNumerical) {
      confirmedTrues = (confirmedTrues.concat(numericalChar));
      console.log(confirmedTrues);
  };

  getSpecial = confirm("Would you like special characters in your password?");
  console.log(getSpecial);
  if (getSpecial) {
      confirmedTrues = (confirmedTrues.concat(specialChar));
      console.log(confirmedTrues);
  };

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
  for (i = 0; i < pwLength; i++) {
    enter += confirmedTrues[Math.floor(Math.random() * confirmedTrues.length)]; 
    console.log(enter);
  };

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteri
  if (!getLowercase && !getUppercase && !getNumerical && !getSpecial) {
    choices = alert("Sorry, please try again.");
  };   


return enter
};
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


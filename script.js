// Assignment Code
var generateBtn = document.querySelector("#generate");

//Sets global variables for the functions to access and change
var pwdLength = "";
var includeLowercase = "";
var includeUppercase = "";
var includeNumber = "";
var includeSymbol = "";


//Prompts user to enter a number between 8 and 128. Loops function if criteria isn't met
function passwordLength() {
  pwdLength = Number(prompt("Set Password Length. Min: 8, Max: 128 Characters"));
  while (pwdLength < 8 || pwdLength > 128) {
    alert("Please enter a valid number. Min: 8, Max: 128 Characters");
    pwdLength = Number(prompt("Set Password Length. Min: 8, Max: 128 Characters"));
  }
}


// Prompts the user to confirm if they want each type of character set. Confirm makes it a boolean value
function passwordCharset() {
  includeLowercase = confirm("Include Lowercase Characters?");
  includeUppercase = confirm("Include Uppercase Characters?");
  includeNumber = confirm("Include Numbers?");
  includeSymbol = confirm("Include Special Characters?");
// If no criteria above is true, this loops the function until at least one value is true
  if (!includeLowercase && !includeUppercase && !includeNumber && !includeSymbol) {
    alert("You must select at least one character option!!");
    return passwordCharset();
  }
}

//Generates function using character list and numbers selected
function generatePassword() {
  lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numberChars = "0123456789";
  symbolChars = "!@#$%^&*()-_=+";
  var pass = "";
  var charSet = "";
  
  //Adds each option to a variable to draw from

  if (includeLowercase) charSet += lowercaseChars;
  if (includeUppercase) charSet += uppercaseChars;
  if (includeNumber) charSet += numberChars;
  if (includeSymbol) charSet += symbolChars;

  console.log(charSet);
  console.log(charSet.length);

  //Generates a random string of characters from the chosen charSet variable
  for (var i = 0; i < pwdLength; i++ ) {
    const randomChars = Math.floor(Math.random() * charSet.length);
    pass += charSet[randomChars];
  }
  console.log(pass);
  return pass;
  
}

// Write password to the #password input
function writePassword() {
  passwordLength()
  passwordCharset()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


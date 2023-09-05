// Assignment Code
var generateBtn = document.querySelector("#generate");



//Prompts user to enter a number between 8 and 128. Loops function if criteria isn't met
function passwordLength() {
  var pwdLength = Number(prompt("Set Password Length. Min: 8, Max: 128 Characters"));
  while (pwdLength < 8 || pwdLength > 128) {
    alert("Please enter a valid number. Min: 8, Max: 128 Characters");
    pwdLength = Number(prompt("Set Password Length. Min: 8, Max: 128 Characters"));
  }
}


// Prompts the user to confirm if they want each type of character set. Confirm makes it a boolean value
function passwordCharset() {
  const includeLowercase = confirm("Include Lowercase Characters?");
  const includeUppercase = confirm("Include Uppercase Characters?");
  const includeNumber = confirm("Include Numbers?");
  const includeSymbol = confirm("Include Special Characters?");
// If no criteria above is true, this loops the function until at least one value is true
  if (!includeLowercase && !includeUppercase && !includeNumber && !includeSymbol) {
    alert("You must select at least one character option!!");
    return passwordCharset();
  }
}

//Generates function using character list and numbers selected
function generatePassword(); {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_=+";

  var charSet = "";
  if (includeLowercase === true) charSet += lowercaseChars;
  if (includeUppercase === true) charSet += uppercaseChars;
  if (includeNumber === true) charSet += numberChars;
  if (includeSymbol === true) charSet += symbolChars;

  var password = "";

  // for (var i, i < pwdLength, )
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordLength()
passwordCharset()


// const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
// const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numberChars = "0123456789";
// const symbolChars = "!@#$%^&*()-_=+";

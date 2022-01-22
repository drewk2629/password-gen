// Assignment code here
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "!@#$%^&*()";
// Welcome
window.alert('Welcome! To get started please click "OK" to continue then click the red "Generate Password" button below.');
// Function that generates password
function generatePassword() {
  var passwordChar = "";
  var password = "";
// Determine password length based on criteria
  var length = prompt('How many characters would you like your password to have? Must be between 8 characters and 128 characters');
  while (length < 8 || length > 128) {
    length =  prompt('Password must be between 8 and 128 characters');
  }
// If you click ok
  var confirmLower = confirm('Do you want to include lowercase characters?');
  var confirmUpper = confirm('Do you want to include uppercase characters?');
  var confirmNum = confirm('Do you want to include numbers?');
  var confirmSpecial = confirm('Do you want to include any special characters?');
// Add var char to password random
  if (confirmLower) {
    passwordChar += lower;
  }

  if (confirmUpper) {
    passwordChar += upper;
  }

  if (confirmNum) {
    passwordChar += num;
  }

  if (confirmSpecial) {
    passwordChar += special;
  }
  // You have to pick one
  if (
    !confirmLower &&
    !confirmUpper &&
    !confirmNum &&
    !confirmSpecial)
    { alert("You must select at least one of the options. Try again and confirm at least 1 character set");
    generatePassword();
  }

  for (var i = 0; i < length; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
  console.log(password)
  return password;
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
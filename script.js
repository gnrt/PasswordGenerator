// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Initalize variables for length of password, character set and password
  var pass = '';
  var chars = '';
  var length = window.prompt('How many characters should the password be?');
  //give error if the desired length is too short or long
  if (length < 8 || length > 128) {
    window.alert('error: character length');
    return;
  };
  //build character set
  var uppercase = window.confirm('should include uppercase');
  if (uppercase) {
    chars = chars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  };
  var lowercase = window.confirm('should include lowercase');
  if (lowercase) {
    chars = chars + 'abcdefghijklmnopqrstuvwxyz'
  };
  var symbols = window.confirm('should include symbols');
  if (symbols) {
    chars = chars + '~`!@#$%^&*()_+-={}[]\|:;,./?><'
  };
  var numbers = window.confirm('should include numbers');
  if (numbers) {
    chars = chars + '0123456789'
  };

  //build password from character set
  function generatePassword() {
    for (var i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)]
    };
    console.log(pass);
    return pass
  };

  console.log(chars);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

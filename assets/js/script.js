var generateBtn = document.querySelector("#generate-pass");

var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";
var specialChar = ",./;'[]`!@#$%^&*()_+=-|}:?><";

function writePassword () {
    var passwordGen = generatePassword();
    var passwordText = document.querySelector("#password");

    
    passwordText.value = passwordGen;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword () {
    /* While loop to re-prompt user is input is invalid or the number chosen is not between 8-12 */
    while (true) {
        /* Prompts user to choose number between 8-12 to include in password */
     var passwordLength = prompt ("How many characters do you want to add? (please choose between 8-128 characters)");
        if(passwordLength >= 8 && passwordLength <= 128) {
            if(window.confirm("Please confirm the amount inputed:" + " " + passwordLength + " " + "characters")){
                alert(passwordLength + " " +"characters added!");
                break;
            } else {
                alert("Please choose a number between 8-128");
                break;
            }
        } else if (passwordLength <= 8 || passwordLength >= 128){
            alert("Characters must be a minimum of 8 and no more than 128");
        } else {
            alert("Invalid Input. Please Try Again.");
        }
    }

    /* Prompts user to add or dont add LOWERCASE to password */
    var firstEntry = confirm ("Would you like to include LOWERCASE letters to your password? (press 'OK' to add or press 'Cancel' to not add)");
        if(firstEntry == true ) {
                alert ("LOWERCASE will be Added!");
                lowerChar;
            } else {
                alert("LOWERCASE will NOT be added!");
                lowerChar = " ";
            } 

    /* Prompts user to add or dont add UPPERCASE to password */
   var secondEntry = confirm ("Would you like to include UPPERCASE letters to your password? (press 'OK' to add or press 'Cancel' to not add)");
        if(secondEntry == true ) {
                alert ("UPPERCASE will be Added!");
                upperChar;
            } else {
                alert("UPPERCASE will NOT be added!");
                upperChar = " ";
            } 

    /* Prompts user to add or dont add NUMBERS to password */
    var thirdEntry = confirm ("Would you like to include NUMBERS to your password? (press 'OK' to add or press 'Cancel' to not add)");
        if(thirdEntry == true ) {
                alert ("NUMBERS will be Added!");
                numberChar;
            } else {
                alert("NUMBERS will NOT be added!");
                numberChar = " ";
            } 

    /* Prompts user to add or dont add SPECIAL CHARACTERS to password */
    var fourthEntry = confirm ("Would you like to include SPECIAL CHARACTERS to your password? (press 'OK' to add or press 'Cancel' to not add)");
        if(fourthEntry == true ) {
                alert ("SPECIAL CHARACTERS will be Added!");
                specialChar;
            } else {
                alert("SPECIAL CHARACTERS will NOT be added!");
                specialChar = " ";
            } 

    /* re-prompts user to the first question if no criteria is chosen by the user */
    if (firstEntry == false && secondEntry == false && thirdEntry == false && fourthEntry == false) {
        alert ("Must include at least one criteria. Click 'Generate Password' button to try again.");
        window.location.reload();
    } 

     

    /* variable that includes all the lowercase, uppercase, numbers and special characters */
    var userChoiceCharacter =''.concat (lowerChar, upperChar, numberChar, specialChar);

    /* This section chooses random characters that was chosen by the user and display to the website */
    var generatedPass = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomPin = Math.floor(Math.random() * userChoiceCharacter.length);
      generatedPass += userChoiceCharacter.substring(randomPin, randomPin+1);
    }
  /* returns the value base on criteria chosen randomly */
  return generatedPass;
}
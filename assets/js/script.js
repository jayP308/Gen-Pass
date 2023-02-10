var generateBtn = document.querySelector("#generate-pass");

var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";
var specialChar = ",./;'[]`!@#$%^&*()_+=-|}:?><";

function writePassword () {
    var passwordLength;
    var firstEntry;
    var secondEntry;
    var thirdEntry;
    var fourthEntry;
    var passwordGen = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = passwordGen;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword () {
    /* While loop to re-prompt user is input is invalid or the number chosen is not between 8-12 */
    while (true) {
        /* Prompts user to choose number between 8-12 to include in password */
        passwordLength = prompt ("How many characters do you want to add? (please choose between 8-12 charaacters)");
        if(passwordLength >= 8 && passwordLength <=12) {
            if(window.confirm("Please confirm the amount inputted:" + " " + passwordLength + " " + "characters")){
                alert(passwordLength + " " +"characters added!");
                break;
            } else {
                alert("Please choose a number between 8-12");
                break;
            }
        } else if (passwordLength <= 8 || passwordLength >= 12){
            alert("Characters must be a minimum of 8 and no more than 12");
        } else {
            alert("Invalid Input. Please Try Again. ");
        }
    }

    /* While loop to re-prompt if input is invalid */
    while (true) {
        /* Prompts user to add or dont add LOWERCASE to password */
        firstEntry = prompt ("Would you like to include LOWERCASE characters? ('Y' or 'N')");
        if(firstEntry == "y" || firstEntry == "Y" || firstEntry == "yes" || firstEntry == "YES") {
            if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
                alert ("LOWERCASE will be Added!");
                lowerChar;
                break;
            } else {
                alert("LOWERCASE will NOT be added!");
                lowerChar = " ";
                break;
            } 
            } else if (firstEntry == "n" || firstEntry == "N" || firstEntry == "no" || firstEntry == "NO") {
                if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
                    alert ("LOWERCASE will NOT be Added!");
                    lowerChar = " ";
                    break;
                } else {
                    alert ("LOWERCASE will be Added!");
                    lowerChar;
                    break;
                }
        } else {
            alert("Invalid Input. Please Try Again. ");
        }
    }

    /* While loop to re-prompt if input is invalid */
    while (true) {
        /* Prompts user to add or dont add UPPERCASE to password */
        secondEntry = prompt ("Would you like to include UPPERCASE characters? ('Y' or 'N')");
        if(secondEntry == "y" || secondEntry == "Y" || secondEntry == "yes" || secondEntry == "YES"){
            if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
                alert ("UPPERCASE will be Added!");
                upperChar;
                break
            } else {
                alert("UPPERCASE will NOT be added!");
                upperChar = " ";
                break;
            } 
            } else if (secondEntry == "n" || secondEntry == "N" || secondEntry == "no" || secondEntry == "NO") {
                if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
                    alert ("UPPERCASE will NOT be Added!");
                    upperChar = " ";
                    break;
                } else {
                    alert ("UPPERCASE will be Added!");
                    upperChar;
                    break;
                }
        } else {
                alert("Invalid Input. Please Try Again. ");
        }
    }

    /* While loop to re-prompt if input is invalid */
    while (true) {
        /* Prompts user to add or dont add NUMBERS to password */
        thirdEntry = prompt ("Would you like to include NUMBERS? ('Y' or 'N')");
        if(thirdEntry == "y" || thirdEntry  == "Y" || thirdEntry  == "yes" || thirdEntry  == "YES"){
            if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
                alert ("NUMBERS will be Added!");
                numberChar;
                break;
            } else {
                alert("NUMBERS will NOT be added!");
                numberChar = " ";
                break;
            }   
            } else if (thirdEntry  == "n" || thirdEntry  == "N" || thirdEntry  == "no" || thirdEntry  == "NO") {
                if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
                    alert ("NUMBERS will NOT be Added!");
                    numberChar = " ";
                    break;
                } else {
                    alert ("NUMBERS will be Added!");
                    numberChar;
                    break;
                }
        } else {
                alert("Invalid Input. Please Try Again. ");
        }
    }

    /* While loop to re-prompt if input is invalid */
    while (true) {
        /* Prompts user to add or dont add SPECIAL CHARACTERS to password */
        fourthEntry = prompt ("Would you like to include SPECIAL CHARACTERS? ('Y' or 'N')");
        if(fourthEntry == "y" || fourthEntry  == "Y" || fourthEntry == "yes" || fourthEntry  == "YES"){
            if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
                alert ("SPECIAL CHARACTERS will be Added!");
                specialChar;
                break;
            } else {
                alert("SPECIAL CHARACTERS will NOT be added!");
                specialChar = " ";
                break;
            } 
            } else if (fourthEntry  == "n" || fourthEntry  == "N" || fourthEntry  == "no" || fourthEntry  == "NO") {
                if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
                    alert ("SPECIAL CHARACTERS will NOT be Added!");
                    specialChar = " ";
                    break;
                } else {
                    alert ("SPECIAL CHARACTERS will be Added!");
                    specialChar;
                    break;
                }
        } else {
                alert("Invalid Input. Please Try Again. ");
        }
    }

        /* re-prompts user to the first question if no criteria is chosen by the user */
        if (firstEntry + secondEntry + thirdEntry + fourthEntry == "n") {
            alert (" Must include at least one criteria. Please try again.")
            generatePassword();
        } 
     

    /* variable that includes all the lowercase, uppercase, numbers and special characters */
    var userChoiceCharacter =''.concat (lowerChar, upperChar, numberChar, specialChar);

    /* This section chooses random characters that was chosen by the user and display to the website */
    var generatedPass = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomPin = Math.floor(Math.random() * userChoiceCharacter.length);
      generatedPass += userChoiceCharacter.substring(randomPin, randomPin+1);
    }
  /* returns the value */
  return generatedPass;
}
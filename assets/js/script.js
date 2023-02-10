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
    passwordLength = prompt ("How many characters do you want to add? (please choose between 8-12 charaacters)");
    if(passwordLength >= 8 && passwordLength <=12) {
        if(window.confirm("Please confirm the amount inputted:" + " " + passwordLength + " " + "characters")){
            alert(passwordLength + " " +"characters added!");
        } else {
            alert("Please choose a number between 8-12");
        }
    } else if (passwordLength <= 8 && passwordLength >= 12){
        alert("Characters must be a minimum of 8 and no more than 12");
    } else {
        alert("Invalid input. Please Try Again. ");
    }

    /* Prompts user to add or dont add LOWERCASE to password */
    firstEntry = prompt ("Would you like to include lowercase characters? ('Y' or 'N')");
    if(firstEntry == "y" || firstEntry == "Y" || firstEntry == "yes" || firstEntry == "YES") {
        if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
            alert ("Lower Case will be Added!");
        } else {
            alert("Lower Case will NOT be added!");
        } 
        } else if (firstEntry == "n" || firstEntry == "N" || firstEntry == "no" || firstEntry == "NO") {
            if (window.confirm("Please press 'OK' to confirm, otherwise hit 'CANCEL'")) {
                alert ("Lower Case will NOT be Added!");
            } else {
                alert ("Lower Case will be Added!");
            }
    } else {
        alert("Invalid input. Please Try Again. ");
    }
}
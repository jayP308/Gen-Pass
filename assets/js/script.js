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
    if(passwordLength >= 8 || passwordLength <=12) {
        if(window.confirm("Please confirm the amount inputed:" + " " + passwordLength + " " + "characters")){
            alert(passwordLength + " " +"characters added!");
        }
    }
}
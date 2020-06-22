function passGen () {
    var numberPool = "0123456789";
    var lowerCaseLettersPool = "abcdefghijklmnopqrstuvwxyz";
    var specialCharPool = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var pwdObj = new Object();
    pwdObj.upperCase = document.getElementById("uppercase-checkbox-1").checked;
    pwdObj.lowerCase = document.getElementById("lowercase-checkbox-2").checked;
    pwdObj.numbers = document.getElementById("numbers-checkbox-3").checked;
    pwdObj.specialChar = document.getElementById("specialchar-checkbox-4").checked;
    pwdObj.passPoolArray = [];
    pwdObj.generatePassword = function() {
        var passLen = document.getElementById("password-length").value;
        var passWord = "";
        if (this.upperCase == true) {
            // upperCasePwdPool = lowerCaseLettersPool.toUpperCase();
            this.passPoolArray.push(lowerCaseLettersPool.toUpperCase());
        }
        if (this.lowerCase == true) {
            // lowerCasePwdPool = lowerCaseLettersPool;
            this.passPoolArray.push(lowerCaseLettersPool);

        }
        if (this.numbers == true) {
            // numberPwdPool = numberPool;
            this.passPoolArray.push(numberPool);

        }
        if (this.specialChar == true) {
            // specialCharPwdPool = specialCharPool;
            this.passPoolArray.push(specialCharPool);
        }
        else if (this.upperCase == false && this.lowerCase == false && this.numbers == false) {
            alert("Please check at least one of the checkboxes");
            return;
        }
        var i = 0;
        while (i<passLen) {       
            var pwdPool = this.passPoolArray[Math.floor(Math.random()*(this.passPoolArray.length - 1))];
            if (pwdPool.length !== 0) {
                passWord += pwdPool[Math.floor(Math.random()*(pwdPool.length - 1))];
                i++;
            }
        }
        return passWord;
    }
    var passwordField = document.getElementById("password-generated");
    passWordGenerated = pwdObj.generatePassword();
    if (passWordGenerated) {
        passwordField.innerText = pwdObj.generatePassword();
    }

}

function copyPassword () {
    /* Get the text field */
    var copyText = document.getElementById("password-generated").value;
    
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    
    /* Copy the text inside the text field */
    document.execCommand("copy");
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText);
      
}
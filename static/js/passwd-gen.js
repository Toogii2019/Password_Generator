// Function to generate a password

function passGen () {

    // Defining pools to be used

    var numberPool = "0123456789";
    var lowerCaseLettersPool = "abcdefghijklmnopqrstuvwxyz";
    var specialCharPool = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var pwdObj = new Object();

    // Creating password object

    pwdObj.upperCase = document.getElementById("uppercase-checkbox-1").checked;
    pwdObj.lowerCase = document.getElementById("lowercase-checkbox-2").checked;
    pwdObj.numbers = document.getElementById("numbers-checkbox-3").checked;
    pwdObj.specialChar = document.getElementById("specialchar-checkbox-4").checked;
    pwdObj.passPoolArray = [];
    pwdObj.generatePassword = function() {
        var passLen = document.getElementById("password-length").value;
        if (passLen < 8) {
            alert("Password length must be 8 or longer!");
            return;
        }
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

    // Generate password and display

    var passwordField = document.getElementById("password-generated");
    var passWordGenerated = pwdObj.generatePassword();
    if (passWordGenerated) {
        passwordField.innerText = pwdObj.generatePassword();
    }

}

// Copy password

function copyPassword() {
    if (document.getElementById("password-generated").innerHTML) {
        var range = document.createRange();
        range.selectNode(document.getElementById("password-generated"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        displayAlert();
    }
    else {
        alert("No password to copy!");
        return;
    }
}


// Display "copied" alert when copy button is clicked

function displayAlert() {
    var copiedAlert = document.getElementById("copyAlert");
    copiedAlert.setAttribute("class", "alert alert-success alert-dismissible show fade");
    hideAlert(copiedAlert);
}

// Hide "copied" alert after 3 seconds

function hideAlert(copiedAlert) {
    var alertInterval = setTimeout(function() {
        copiedAlert.setAttribute("class", "alert alert-success alert-dismissible fade")
        clearInterval(alertInterval);
        
    }, 1500);
}

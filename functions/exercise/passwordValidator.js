function passwordValidator(pass) {

    let length = passLength(pass);
    let checkForLettersAndDigits = lettersAndDigit(pass);
    let digits = checkForDigits(pass);
    if (length && checkForLettersAndDigits && digits) {
        console.log('Password is valid');
    }
    //console.log(passLength(pass), lettersAndDigit(pass), checkForDigits(pass));


    function passLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function lettersAndDigit(pass) {

        for (num of pass) {
            let charCode = num.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57 ||
                charCode >= 65 && charCode <= 90 ||
                charCode >= 97 && charCode <= 122)) {
                console.log("Password must consist only of letters and digits");
                return false;
            }

        }
        return true;
    }

    function checkForDigits(pass) {

        let count = 0;
        for (num of pass) {
            let curChar = num.charCodeAt(0);
            if (curChar >= 48 && curChar <= 57) {
                count++;
            }
        }
        if (count < 2) {
            console.log("Password must have at least 2 digits");
            return false;
        } else {
            return true;
        }
    }

}
passwordValidator('MyPass123');
//passwordValidator('Pa$s$s')
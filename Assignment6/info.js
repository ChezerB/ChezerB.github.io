signup="
function formValidation() {
    return validatefname() && validatelastName() && validatePassword() && validatelUsername();

}

function validatefname() {
    var allAlpha = true;
    var elem = document.querySelector("#first_name");
    var fname = elem.value.trim();

    if (fname.charAt(0) < "A" || fname.charAt(0) > "Z") {
        allAlpha = false;

    }
    fname = fname.toUpperCase();

    for (var i = 0; i < fname.length; i++) {
        // check all character are letters
        if (fname.charAt(i) < "A" || fname.charAt(i) > "Z") {
            allAlpha = false;
        }
    }

    if (!allAlpha) {
        alert("Please enter a first name starting with a capital letter and only alphabet allowed.");
        elem.focus();
        return false;
    }
    return true;
}


function validatelastName() {
    var allAlpha = true;
    var elem = document.querySelector("#last_name");
    var lastName = elem.value.trim();


    if (lastName.charAt(0) < "A" || lastName.charAt(0) > "Z") {
        allAlpha = false;

    }
    lastName = lastName.toUpperCase();

    for (var i = 0; i < lastName.length; i++) {
        // check all character are letters
        if (lastName.charAt(i) < "A" || lastName.charAt(i) > "Z") {
            allAlpha = false;
        }
    }

    if (!allAlpha) {
        alert("Please enter a last name starting with a capital letter and only alphabet allowed.");
        elem.focus();
        return false;
    }
    return true;
}


function validatePassword() {

    var elem = document.querySelector("#password_name");
    var elem2 = document.querySelector("#confirm_password_name");
    var password = elem.value;
    var confirm = elem2.value;
    var countUP = 0;
    var countdig = 0;

    if (password.length != 6) {      /* check the length */
        alert("Password must be 6 characters long");
        elem.focus();
        return false;
    }


    for (var i = 0; i < password.length; i++) {

        if (password.charAt(i) >= "A" && password.charAt(i) <= "Z") {
            countUP++;

        } else if (password.charAt(i) >= "0" && password.charAt(i) <= "9") {
            countdig++;
        }

    }
    if (countUP == 0) {
        alert("Password must have 1 uppercase letter")
        elem.focus();
        return false;

    }
    if (countdig == 0) {
        alert("Password must have 1 digit")
        elem.focus();
        return false;

    }

    if (confirm != password) {
        alert("Passwords do not match!")
        elem2.focus();
        return false;
    }
    return true;
}

function validatelUsername() {

    var elem = document.querySelector("#username");
    var username = elem.value;

    if (username.length < 6) {      /* check the length */
        alert("Username must be 6 characters long");
        elem.focus();
        return false;
    }
    username = username.toUpperCase();
    if (username.charAt(0) < "A" || username.charAt(0) > "Z") {
        alert("Username must start with a letter!");
        elem.focus();
        return false;

    }

    return true;
}"
document.write(signup)
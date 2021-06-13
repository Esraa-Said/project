function checkForm() {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var pass = document.getElementById("pass");
    var confpass = document.getElementById("confpass");
    var genderSelector = document.getElementById("gender");
    var email = document.getElementById("mail");
    var phoneNum = document.getElementById("phone");
    if (allLetter_fname(fname)) {
        if (allLetter_lname(lname)) {
            if (phonenumber(phoneNum)) {
                if (ValidateEmail(email)) {
                    if (pass_validation(pass)) {
                        if (matchpass(pass, confpass)) {
                            if (genderSelect(genderSelector,fname)) {}
                        }
                    }
                }
            }
        }
    }
    return false;
}
function allLetter_fname(fname) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value == null || fname.value == "") {
        ("error! First Name can't be blank!");
        fname.focus();
        return false;
    }
    if (fname.value.match(letters)) {
        return true;
    } else {
       alert('your name must have alphabet characters only');
        fname.focus();
        return false;
    }

}

function allLetter_lname(lname) {
    var letters = /^[A-Za-z]+$/;
    if (lname.value == null || fname.value == "") {
        alert("error! Last Name can't be blank!");
        lname.focus();
        return false;
    }

    if (lname.value.match(letters)) {
        return true;
    } else {
       alert("error! last name must have alphabet characters only!");
        lname.focus();
        return false;
    }
}
function pass_validation(pass) {
    var pass_len = pass.value.length;
    if (pass_len == 0 || pass_len > 8 || pass_len < 8) {
        alert("Password should not be empty! length must be 8");
        pass.focus();
        return false;
    } else {
        var checker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
        if (pass.value.match(checker)) {
            if (pass.value.charAt(0).toUpperCase()) {
                return true;
            }
            if (pass.value.indexOf(' ') >= 0) {
                alert("Password can't contain whitespace!");
                pass.focus();
                return false;
            }
        } else {
           alert("Password must contain one digit and one special character at least and starts with uppercase character!");
            pass.focus();
            return false;
        }
    }
}

function matchpass(pass, confpass) {
    if (pass.value == confpass.value) {
        return true;
    } else {
       alert("password must be same!");
        confpass.focus();
        return false;
    }
}
function genderSelect(genderSelector,fname) {
    if (genderSelector.value == "Default") {
        alert("Select your Gender from the list");
        genderSelector.focus();
        return false;
    } else {
       alert("success");
        return true;
    }
}

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address! as info@mail.com");
        email.focus();
        return false;
    }
}

function phonenumber(phoneNum) {
    var ph_lenght = phoneNum.value.length
    if (ph_lenght == 11) {
        return true;
    } else {
       alert("Enter correct Phone Number!");
        phoneNum.focus();
        return false;
    }
}

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".rev_form").offset().top},
        1800);
});

$("input.button").click(function() {
    $('html,body').animate({
        scrollTop: $(".smotop").offset().top},
        1800);
});
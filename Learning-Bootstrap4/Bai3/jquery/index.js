function isEmail(inputEmail) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(inputEmail);
}

function validataPassword(inputPassword) {
    return inputPassword.length > 4;
}



$(document).ready(function() {
    $('#email').change(function() {
        var email = $(this).val().trim();
        if (!isEmail(email)) {
            $(".emailError").html("Email is not valid format");
        } else {
            $(".emailError").html("");
        }
    });
    $('#password').change(function() {
        var password = $(this).val();
        if (!validataPassword(password)) {
            $(".passwordError").html("Password must be at least 5 characters");
        } else {
            $(".passwordError").html("");
        }
    });
});
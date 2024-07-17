function validateform(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var confirmpassword = document.getElementById("confirmpassword").value;


    var emailRegex = /^\S+@\S+\.\S+$/;

    if (username.length < 5) {
        alert("username must be at least 5 characters long.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("invalid email format. please enter a valid email address.");
        return false;
    }

    if (password.length < 8
    ) {
        alert("password must be atleast 8 characters long.");
        return false;
    }

    if (password !== confirmpassword) {
        alert("passwords do not match. please enter matching passwords.");
        return false;
    }

    alert("Registration successful");
    document.getElementById("registrationform").requestFullscreen();
    }




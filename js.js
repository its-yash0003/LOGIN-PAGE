function validateForm() {
    // Get form elements
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pinCode = document.getElementById("pin-code").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("Country").value;

    // Validate fields
    if (firstName === "") {
        alert("Please enter your first name.");
        return false;
    }

    if (lastName === "") {
        alert("Please enter your last name.");
        return false;
    }

    if (dob === "") {
        alert("Please select your date of birth.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (mobile === "" || isNaN(mobile) || mobile.length !== 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    if (city === "") {
        alert("Please enter your city.");
        return false;
    }

    if (pinCode === "" || isNaN(pinCode) || pinCode.length !== 6) {
        alert("Please enter a valid 6-digit pin code.");
        return false;
    }

    if (state === "") {
        alert("Please enter your state.");
        return false;
    }

    if (country === "") {
        alert("Please select your country.");
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
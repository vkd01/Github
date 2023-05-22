const form = document.getElementById('usernameForm');
const usernameInput = document.getElementById('usernameInput');
const validationResult = document.getElementById('validationResult');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameInput.value;
    if (validateUsername(username)) {
        validationResult.textContent = `Username "${username}" is valid!`;
    } else {
        validationResult.textContent = `Username "${username}" is invalid!`;
    }
});

function validateUsername(username) {

    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(username)) {
        return false;
    }

    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(username)) {
        return false;
    }


    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    if (!specialCharRegex.test(username)) {
        return false;
    }

    const digitRegex = /[0-9]/;
    if (!digitRegex.test(username)) {
        return false;
    }


    return true;
}
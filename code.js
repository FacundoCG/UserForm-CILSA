function showError(id, message) {
    errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.visibility = 'visible';
}

function hideError(id) {
    errorElement = document.getElementById(id);
    errorElement.style.visibility = 'hidden';
}

function isEmailValid(anEmail) {
    res = true;
    if (anEmail === null || anEmail.length === 0) {
        res = false;
        showError('emailError', "El correo electrónico no puede estar vacío");
    } else {
        hideError('emailError');
    }
    return res;
}

function isUsernameValid(anUsername) {
    res = true;
    if (anUsername === null || anUsername.length == 0 || /^\s+$/.test(anUsername)) {
        res = false;
        showError('usernameError', "El nombre de usuario no puede estar vacío");
    } else {
        hideError('usernameError');
    }
    return res;
}

function isPasswordValid(aPassword, anotherPassword) {
    res = true;
    if (aPassword === null || aPassword.length == 0) {
        res = false;
        showError('passwordError', "La contraseña no puede estar vacía");
    } else if (aPassword !== anotherPassword) {
        res = false;
        showError('passwordRepeatedError', "Las contraseñas no son iguales");
    } else {
        hideError('passwordError');
        hideError('passwordRepeatedError');
    }
    return res;
}

function isDateValid(aDate) {
    res = true;
    if (aDate === null || aDate.length === 0) {
        res = false;
        showError('dateOfBirthError', "La fecha de nacimiento no puede estar vacía");
    } else {
        hideError('dateOfBirthError');
    }
    return res;
}

function validacion() {
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    dateOfBirth = document.getElementById('dateOfBirth').value;
    password = document.getElementById('password').value;
    passwordRepeated = document.getElementById('passwordRepeated').value;

    isValid = true;

    if (!isUsernameValid(username)){
        isValid = false;
    }

    if (!isEmailValid(email)){
        isValid = false;
    }

    if (!isDateValid(dateOfBirth)){
        isValid = false;
    }

    if (!isPasswordValid(password, passwordRepeated)){
        isValid = false;
    }
    
    return isValid;
}

document.getElementById('contrastToggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

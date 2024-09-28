function isEmailValid(anEmail){
    res = true;

    if(anEmail === null){
        res = false;
        alert("El correo electrónico no es válido");
    }

    return res;
}

function isUsernameValid(anUsername){
    res = true;

    if (anUsername === null || anUsername.length == 0 || /^\s+$/.test(anUsername)){
        res = false;
        alert("El nombre de usuario no puede estar vacío");
    }

    return res;
}

function isPasswordValid(aPassword, anotherPassword){
    res = true;
    
    if (aPassword === null || aPassword.length == 0){
        res = false;
        alert("La contraseña no puede estar vacía");
    } else if (aPassword !== anotherPassword){
        res = false;
        alert("Las contraseñas no son iguales");
    }

    return res;
}

function isValidDate(aDate){
    res = true;
    if (aDate === null){
        res = false;
        alert("La fecha de nacimiento no puede estar vacía");
    }

    return res;
}

function validacion(){
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    dateOfBirth = document.getElementById('dateOfBirth').value;
    password = document.getElementById('password').value;
    passwordRepeated = document.getElementById('passwordRepeated').value;
    res = isUsernameValid(username) && isEmailValid(email) && isValidDate(dateOfBirth) && isPasswordValid(password, passwordRepeated);

    return res;
}

document.getElementById('contrastToggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

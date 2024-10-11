function validateImail(email){
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email)
}


function validateForm() {
    const email = document.getElementById('email').value;
    const userName = document.getElementById('email').value;
    const passwrd = document.getElementById('email').value;
    let IsValid= true;
    //validar correo electronico
    if (!validateImail(email)){
        document.getElementById('emailError').innerText='Correo Invalido';
        document.getElementById('emailError').style.display= 'block';
        IsValid= false;
    } else{
        document.getElementById('imailError').style.display='none';
    }
    return IsValid;
    //validar el usuario

    if (username.length<3) {
        document.getElementById("usernameError").innerText='El usuario debe tener almenos tres caracteres';
        document.getElementById("usernameError").style.display= 'block';
        IsValid= false;
    } else{
        document.getElementById("usernameError").style.display='none';
    }
    return IsValid;

    //Validar contraseña

    if (password.length<6) {
        document.getElementById('passwordError').innerText='Lacontraseña debe tener al menos seis caracteres';
        document.getElementById('passwordError').style.display= 'block';
        IsValid= false;
    } else{
        document.getElementById('passwordError').style.display='none';
    }
    return IsValid;

}
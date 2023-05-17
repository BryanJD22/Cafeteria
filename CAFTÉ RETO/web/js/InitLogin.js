import {login, register}
from "./service_usuario.js"

        document.body.addEventListener("load", initComponents());

function initComponents() {
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let emailr = document.getElementById("emailr");
    let passr = document.getElementById("passr");
    let username = document.getElementById("username");

    document.querySelector("#login_btn").addEventListener("click", function () {
        console.log(email.value);
        console.log(pass.value);
        login(email.value, pass.value);
    });
    document.querySelector("#register_btn").addEventListener("click", function () {

        let resultdivr = document.getElementById("resultr");

        if (!emailr.value.endsWith('@gmail.com') && !emailr.value.endsWith('@svalero.com')) {
            resultdivr.style.color = "red"
            resultdivr.innerHTML = "Email is not valid"

        } else if (passr.value.length < 5) {
            resultdivr.style.display = "inline"
            resultdivr.style.color = "red"
            resultdivr.innerHTML = "Password is too short"
        } else {
            register(username.value, emailr.value, passr.value);
        }

        if (email.value === "admin1@svalero.com" || email.value === "admin2@svalero.com" || email.value === "admin3@svalero.com") {
            document.location = "comite.html";
        }
        


    }

    );
}

function mensajeLogin(responseText) {
    let resultdiv = document.getElementById("result");
    let email = document.getElementById("email");

    if (responseText["mensaje"] == "Correcto") {

        sessionStorage.setItem('username', email.value);

        document.location = "inicio.html";
    } else {
        resultdiv.innerHTML = "This user does not exists";
        resultdiv.style.color = "red";
        console.log("  PUTA");
    }


}

function mensajeRegister(responseText) {
    let resultdivr = document.getElementById("resultr");
    if (responseText["mensaje"] == "Sign up correcto") {
    } else {
        resultdivr.innerHTML = "This user already exists. Try another, please.";
        resultdivr.style.color = "red";
    }


}

export {mensajeLogin, mensajeRegister}


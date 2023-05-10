import {login} from './service_usuario.js'

document.body.addEventListener("load", initComponents());

function initComponents(){
    
    let login = document.getElementById("login");
    
    login.addEventListener("click" , login());
}
export {login}


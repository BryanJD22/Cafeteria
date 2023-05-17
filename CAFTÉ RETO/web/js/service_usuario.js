import { controllerResponse } from "./controller.js"

function login(email, pass) {
    $.ajax({
        url: 'Controller',
        data: {
            ACTION: "USER.LOGIN",
            EMAIL: email,
            PASS: pass
        },
        dataType: 'json',
        success: function (responseText) {
            controllerResponse("USER.LOGIN", responseText);        
        }
    });

}

function register(username,emailr, passr) {
    $.ajax({
        url: 'Controller',
        data: {
            ACTION: "USER.REGISTER",
            USERNAME: username,
            EMAILR: emailr,
            PASSR: passr
        },
        dataType: 'json',
        success: function (responseText) {
            controllerResponse("USER.REGISTER", responseText);        
        }
    });

}
export {login, register}
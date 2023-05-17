import{ mensajeLogin, mensajeRegister } from "./InitLogin.js"

        function controllerResponse(action, responseText) {
            switch (action) {
                case "USER.LOGIN":
                    mensajeLogin(responseText);
                    break;
                case "USER.REGISTER":
                    mensajeRegister(responseText);
                    break;
                case "USER.INFO":
                    sessionStorage.setItem("",responseText)
                    break;
            }
        }


export{ controllerResponse }
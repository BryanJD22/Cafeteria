// Reemplaza con tu ID de aplicación de Facebook
var appId = "185749001066147";

window.fbAsyncInit = function () {
  FB.init({
    appId: appId,
    cookie: true,
    xfbml: true,
    version: "v12.0",
  });

  FB.AppEvents.logPageView();
};

// Cargar el SDK de Facebook de forma asíncrona
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

// Función para manejar el inicio de sesión de Facebook
function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

// Función de callback para el estado de inicio de sesión
function statusChangeCallback(response) {
  if (response.status === "connected") {
    // Usuario conectado
    getUserInfo();
  } else {
    // Usuario no conectado
    console.log("No se pudo iniciar sesión con Facebook.");
  }
}

// Función para obtener la información del usuario
function getUserInfo() {
  FB.api("/me", { fields: "id,name,email,picture" }, function (response) {
    console.log("ID: " + response.id);
    console.log("Nombre: " + response.name);
    console.log("Correo electrónico: " + response.email);
    console.log("Imagen URL: " + response.picture.data.url);
  });
}

// Añadir el evento de clic al botón de inicio de sesión de Facebook
document.getElementById("fbLoginBtn").addEventListener("click", function () {
  FB.login(checkLoginState, { scope: "public_profile,email" });
});
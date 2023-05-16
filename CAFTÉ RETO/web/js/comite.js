// Recuperar el nombre de usuario almacenado en sessionStorage
var username = sessionStorage.getItem('username');

// Mostrar el nombre de usuario en tu página web
document.getElementById('usernameElement').textContent = username;



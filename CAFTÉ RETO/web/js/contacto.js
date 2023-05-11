
// Configuración de EmailJS
emailjs.init("CorKeuwTYmBprATvu");

// Manejador de envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe por defecto

  // Enviar el correo electrónico
  emailjs.send("service_4bkfpvf","bj20223014",{
    to_name: document.getElementById("name").value,
    from_name: document.getElementById("email").value,
    subject: "Nuevo mensaje de " + document.getElementById("name").value,
    message_html: document.getElementById("message").value}
    )
    .then(function(response) {
      console.log("Correo electrónico enviado correctamente", response);
      alert("Correo electrónico enviado correctamente");
    }, function(error) {
      console.log("Error al enviar el correo electrónico", error);
      alert("Error al enviar el correo electrónico");
    });
});
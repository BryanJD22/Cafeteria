
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bryandavila520@gmail.com",
        Password : "07A3A232565B480C13E0A72FADA22DF01E83",
        To : 'a26959@svalero.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "Name: " + document.getElementById("name").value
            +"<br> Email: " + document.getElementById("email").value
            +"<br> Phone: " + document.getElementById("phone").value
            +"<br> Message: " + document.getElementById("message").value

    }).then(
      message => alert("Message Sent Succesfully")
    );
}
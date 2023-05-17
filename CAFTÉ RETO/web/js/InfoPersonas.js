

var personas = [
    {
        nombre: "Alejandro",
        apellidos: "Cerqueira Navarro",
        nacimiento: "24/09/2003",
        correo: "admin1@svalero.com",
        identificador: "1234",
        puesto: "Secretary"
    },
    {
        nombre: "Israel",
        apellidos: "Colta Bujalance",
        nacimiento: "24/09/2003",
        correo: "admin2@svalero.com",
        identificador: "1234",
        puesto: "Chairman"
    },
    {
        nombre: "Bryan",
        apellidos: "Dávila Cianca",
        nacimiento: "24/09/2003",
        correo: "admin3@svalero.com",
        identificador: "1234",

        puesto: "Syndicate"

    }
];


var nameInput = document.getElementById("name");
var surnameInput = document.getElementById("surname");
var dateInput = document.getElementById("date");
var jobInput = document.getElementById("job");
var idInput = document.getElementById("id");

if (sessionStorage.getItem('username') === "admin1@svalero.com"||"admin2@svalero.com"||"admin3@svalero.com" ) {
    
    var informacionAlejandro = personas.find(function (persona) {
        return persona.correo === sessionStorage.getItem('username');
    });

    // Mostrar la información en los campos de texto
    if (informacionAlejandro) {
        nameInput.value = informacionAlejandro.nombre;
        surnameInput.value = informacionAlejandro.apellidos;
        dateInput.value = informacionAlejandro.nacimiento;
        jobInput.value = informacionAlejandro.puesto;
        idInput.value = informacionAlejandro.identificador;
    } else {
        console.log("No se encontró información para el usuario.");
    }
}

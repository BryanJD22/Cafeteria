function getPeliculas() {
    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FIND_ALL'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.querySelector(".netflix .swiper-container .swiper-wrapper");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.ACCION'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("accion");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.AVENTURAS'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("aventuras");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.COMEDIA'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("comedia");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.DRAMA'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("drama");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.TERROR'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("terror");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.MUSICAL'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("musical");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.FICCION'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("ficcion");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.BELICA'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("belica");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.SUSPENSE'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("suspense");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });

    $.ajax({
        url: 'Controller',
        data: {
            ACTION: 'PELICULA.FILTER.ROMANTICA'
        },
        dataType: 'json',
        success: function (responseText) {
            var divPeliculas = document.getElementById("romantica");
            var cad = "";
            for (var contador in responseText) {
                var imagenPeli = responseText[contador].url;
                var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
                var idP = responseText[contador].id;
                cad += "<div class='swiper-slide'><img onclick='pelicula(" + idP + ");' src='" + cadenaBienFormada + "'/>";
                cad += "<div class='descripcion'><h3 class='tituloPeli'>" + responseText[contador].titulo + "<p class='duracion'>Duracion: " + responseText[contador].duracion + "</p><p class='nVotos'>Votos: " + responseText[contador].nVotos + "</p></div> </div>";
            }
            divPeliculas.innerHTML = cad;
        }
    });
}
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
            alert("SIUUUU")
        }
    });

}
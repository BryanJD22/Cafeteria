let tiempoRef = Date.now()
let cronometrar = false
let acumulado = 0
const botonStart = document.getElementById("start-button")
const botonEnd = document.getElementById("end-button")


setInterval(() => {
    let tiempo = document.getElementById("tiempo")
    if (cronometrar) {
        acumulado += Date.now() - tiempoRef
    }
    tiempoRef = Date.now()
    tiempo.innerHTML = formatearMS(acumulado)
}, 1000 / 60);

function formatearMS(tiempo_ms) {
    let milisegundos = tiempo_ms % 1000
    
    
    let estado = Math.floor(((tiempo_ms - milisegundos) / 1000))
    
    let segundos = estado%60
    let minutos = Math.floor((estado / 60) % 60)
    let horas = Math.floor((estado/60 / 60))
    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0)
    }

    return horas.ceros(2) + ":" + minutos.ceros(2) + ":" + segundos.ceros(2)
        + "." + milisegundos.ceros(3)
}

botonStart.addEventListener('click',inicio)
botonEnd.addEventListener('click',terminar)

function inicio(){
    cronometrar = true
}

function terminar(){
    acumulado = 0
    cronometrar = false
}


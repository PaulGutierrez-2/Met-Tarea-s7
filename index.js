'use strict'

//Sin parámetros, sin valor de retorno

function showM1() {
    alert("Mensage 1")
}

showM1()

//Con parámetros, sin valor retorno

function showM2(message) {
    alert(message)
}

showM2("Mensaje 2")

//Sin parámetros, con valor retorno

function showM3() {
    return "Mensaje 3"
}

alert( showM3() )

//Con parámetros, con retorno

function showM4(message) {
    return message
}

alert( showM4("Mensaje 4") )
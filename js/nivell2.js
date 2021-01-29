// Capturo el valor del LCD
let result = document.getElementById('resultado').innerHTML;

// Defino variables de números
let num1 = "1";
let num2 = "2";
let num3 = "3";
let num4 = "4";
let num5 = "5";
let num6 = "6";
let num7 = "7";
let num8 = "8";
let num9 = "9";
let num0 = "0";
let resultadoFinal = "0";
let valorSumaA = "0";
let valorRestaA = "0";
let valorMultiplicA = "0";
let valorDivisionA = "0";
let operacion = false;

// Funciones de pulsación de teclas
function teclaUno() {

    // Si LCD es 0, escribo 1 en LCD y asigno 1 a la variable num1a
    if (result == 0) {
        document.getElementById('resultado').innerHTML = "1";
        result = "1";
    } else {
        result = result.concat(num1);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}

function teclaDos() {

    if (result == 0) {
        document.getElementById('resultado').innerHTML = "2";
        result = "2";
    } else {
        result = result.concat(num2);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}

function teclaTres() {

    if (result == 0) {
        document.getElementById('resultado').innerHTML = "3";
        result = "3";
    } else {
        result = result.concat(num3);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}

function teclaCuatro() {

    if (result == 0) {
        document.getElementById('resultado').innerHTML = "4";
        result = "4";
    } else {
        result = result.concat(num4);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}

function teclaCinco() {

    if (result == 0) {
        document.getElementById('resultado').innerHTML = "5";
        result = "5";
    } else {
        result = result.concat(num5);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}

function teclaSeis() {

    if (result == 0) {
        document.getElementById('resultado').innerHTML = "6";
        result = "6";
    } else {
        result = result.concat(num6);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}

function teclaSiete() {

    if (result == 0) {
        document.getElementById('resultado').innerHTML = "7";
        result = "7";
    } else {
        result = result.concat(num7);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}

function teclaOcho() {

    if (result == 0) {
        document.getElementById('resultado').innerHTML = "8";
        result = "8";
    } else {
        result = result.concat(num8);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}

function teclaNueve() {

    if (result == 0) {
        document.getElementById('resultado').innerHTML = "9";
        result = "9";
    } else {
        result = result.concat(num9);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}

function teclaCero() {

    if (result == 0) {
        document.getElementById('resultado').innerHTML = "0";
        result = "0";
    } else {
        result = result.concat(num0);
        document.getElementById('resultado').innerHTML = result;
    }
    return result;
}


// Funciones de teclas aritméticas
function teclaMas() {
    valorSumaA = document.getElementById('resultado').innerHTML;
    result = "0"; // resetea el valor de LCD
    return valorSumaA;
}

function teclaMenos() {
    valorRestaA = document.getElementById('resultado').innerHTML;
    result = "0";
    return valorRestaA;
}

function teclaPor() {
    valorMultiplicA = document.getElementById('resultado').innerHTML;
    result = "0";
    return valorMultiplicA;
}

function teclaEntre() {
    valorDivisionA = document.getElementById('resultado').innerHTML;
    result = "0";
    return valorDivisionA;
}

function teclaIgual() {

    // Comprobando qué valor contiene una cifra
    if (valorSumaA != "0") {
        operacion = "valorSumaA";
    } else if (valorRestaA != "0") {
        operacion = "valorRestaA";
    } else if (valorMultiplicA != "0") {
        operacion = "valorMultiplicA";
    } else {
        operacion = "valorDivisionA";
    }

    // si el valor no está vacío para a operacion como string
    switch (operacion) {
        // suma
        case "valorSumaA":
            resultadoFinal = parseInt(valorSumaA) + parseInt(result);
            valorSumaA = "0";
            break;
        // resta
        case "valorRestaA":
            resultadoFinal = valorRestaA - result;
            valorRestaA = "0";
            break;
        // multiplicació
        case "valorMultiplicA":
            resultadoFinal = valorMultiplicA * result;
            valorMultiplicA = "0";
            break;
        // divisió
        case "valorDivisionA":
            resultadoFinal = valorDivisionA / result;
            valorDivisionA = "0";
    }

    document.getElementById('resultado').innerHTML = resultadoFinal;
}

function teclaCe() {
    document.getElementById('resultado').innerHTML = "0";
    result = "0";
    return result;
}

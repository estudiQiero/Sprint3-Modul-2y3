// Capturo el valor del LCD
let result = document.getElementById('resultado').innerHTML;

let resultadoFinal = "0";
let valorSumaA = "0";
let valorRestaA = "0";
let valorMultiplicA = "0";
let valorDivisionA = "0";
let operacion = false;

// Funcion de pulsación de teclas
function tecla(e) {
    const n = e.target.textContent;
    result = result == 0 ? n : result.concat(n);
    document.getElementById('resultado').innerHTML = result;
}

// Funciones de teclas aritméticas
function teclaMas() {
    valorSumaA = document.getElementById('resultado').innerHTML;
    result = "0"; // resetea el valor de LCD
}

function teclaMenos() {
    valorRestaA = document.getElementById('resultado').innerHTML;
    result = "0";
}

function teclaPor() {
    valorMultiplicA = document.getElementById('resultado').innerHTML;
    result = "0";
}

function teclaEntre() {
    valorDivisionA = document.getElementById('resultado').innerHTML;
    result = "0";
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
}
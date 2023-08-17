/*
Luis Alexander Sánchez Castillo
1. Realizar u b programa quye permita capturar n cantidad de numeros enteros y mostrar en DOM numero mayor y numero menor. 
*/

'use strict';

function crearInputs() {
    let cantidad = parseInt(document.getElementById("cantidadNumeros").value);
    let inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";

    for (let i = 0; i < cantidad; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Ingrese el número #" + (i + 1);
        inputContainer.appendChild(input);
    }

    document.getElementById("resultados");
}

function calcularNumeros() {
    let inputs = document.querySelectorAll("#inputContainer input");
    let numeros = [];

    inputs.forEach(function(input) {
        let numero = parseInt(input.value);
        numeros.push(numero);
    });

    let numeroMayor = Math.max(...numeros);
    let numeroMenor = Math.min(...numeros);

    document.getElementById("numerosIngresados").textContent = numeros.join(", ");
    document.getElementById("numeroMayor").textContent = numeroMayor;
    document.getElementById("numeroMenor").textContent = numeroMenor;

    document.getElementById("resultados").style.display = "block";
}
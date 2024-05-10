// reset js 
"use strict";

// controllo collegamento 

console.log('ciao mondo');

// variabile per tenere traccia del numero attualmente visualizzato
let currentNumber = ""; 

// variabile per memorizzare l'operatore selezionato
let operatore = "";

// variabile per memorizzare il primo operando
let primoOperando = "";


// seleziona tutti i pulsanti numerici 
const numbers = document.querySelectorAll(".numbers button");

// seleziona l'elemento risultato
const result = document.getElementById("result");

// aggiunta delll'event listener a tutti i numeri utilizzando un ciclo for
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", selectNumber);
}

// funzione per gestire la selezione di un numero
function selectNumber() {
    const numberValue = this.innerText;

    // concateniamo il numero cliccato a quello attuale
    currentNumber += numberValue; 

    // aggiornamento del risultato risultato visualizzato
    result.innerText = currentNumber; 
}


// seleziono tutti i pulsanti degli operatori tranne c
const operatori = document.querySelectorAll(".operators button:not(.orange)");

// aggiungo un event listener a ogni pulsante operatore
for(let i = 0; i < operatori.length; i++){
    operatori[i].addEventListener("click", function(){
        const operatoreSelezionato = this.innerText;

        operatore = operatoreSelezionato;
        primoOperando = currentNumber;

        currentNumber = "";
        result.innerText = "0";

    })
}



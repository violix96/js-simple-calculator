// reset js 
"use strict";

// controllo collegamento 

console.log('ciao mondo');

// variabile per tenere traccia del numero attualmente visualizzato
let currentNumber = ""; 

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

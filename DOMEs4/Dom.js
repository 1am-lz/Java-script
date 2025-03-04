// 1. Seleziona gli elementi dal DOM

const titolo = document.getElementById("titolo");

const testo = document.getElementById("testo");

const inputTesto = document.getElementById("inputTesto");

const btnCambia = document.getElementById("btnCambia");

// 2. Aggiungi un listener per il click sul bottone

btnCambia.addEventListener("click", function() {

    // Prendi il testo dall'input
  
    const nuovoContenuto = inputTesto.value;
  
  
    // Se il testo non è vuoto, cambia il paragrafo
  
    if (nuovoContenuto.trim() !== "") {
  
      testo.textContent = nuovoContenuto;
  
    } else {
  
      alert("Inserisci del testo prima di cambiare il contenuto!");
  
    }
  
  });


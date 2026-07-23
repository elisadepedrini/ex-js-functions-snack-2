// Crea una funzione stampaOgniSecondo con setInterval:
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(message) {
    setInterval(() => {
        console.log(message);
    }, 1000)
}

const stampa = stampaOgniSecondo('È passato 1 sec!')
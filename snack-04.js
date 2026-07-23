// Crea un generatore di funzioni creaTimer:
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".


function creaTimer(time_ms) {
    console.log('Pronti...');
    
    return function() {
        setTimeout(() => {
            console.log('Tempo scaduto!'); 
        }, time_ms)
    }
}

const timer = (creaTimer(3000))
timer()
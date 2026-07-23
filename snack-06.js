// Crea un contatore automatico con setInterval:
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.


function creaContatoreAutomatico(time_ms) {

    let count = 0

    return function() {
        setInterval(() => {
            count++;
            console.log(count);
        }, time_ms)
    }
}

const countFunction = creaContatoreAutomatico(2000);
countFunction()

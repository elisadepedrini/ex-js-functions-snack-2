// Crea una funzione che ferma un timer dopo un certo tempo:
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(message, time_start, time_stop) {
    return function() {
        const id = setInterval(() => {
            console.log(message);
        }, time_start);

        setTimeout(() => {
            clearInterval(id)
        }, time_stop)
    }
}

const esegui = eseguiEferma('Sono partito!', 1000, 5000)
esegui ()
// Crea una funzione eseguiOperazione:
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

// Esempio d’uso:

// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a * b;

// const eseguiOperazione = (a, b, operazione) => operazione(a, b);

// console.log(eseguiOperazione(3, 4, somma)); // 7
// console.log(eseguiOperazione(3, 4, moltiplica)); // 12


function eseguiOperazione(num1, num2, callback) {
    return callback(num1, num2)
}

const dividi = (num1, num2) => num1 / num2

console.log(eseguiOperazione(6, 2, dividi))
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// dati che mi servono: 

// ARRAY BOMBE 
// 1 - mi servono 16 numeri casuali tra 1 e 100 (i numeri corrispondono ai numeri bomba). Salvo questi numeri in un array inizialmente vuoto.
var arrayBombe = [];

// 2 - utilizzo un ciclo while per generare i 16 numeri bomba.
// I numeri entreranno nell'array soltanto se non si ripetono. Utilizzo funzione includes che genererà un risultato booleano.

while (arrayBombe.length < 16) {
    var numeroCasuale = Math.floor(Math.random() * (100-1) + 1);

    if (arrayBombe.includes(numeroCasuale) == false) {
        arrayBombe.push(numeroCasuale);
    }
    
}
console.log(arrayBombe);
// END ARRAY BOMBE 

// UTENTE 
// chiedo all'utente di inserire un numero (compreso tra 1 e 100) alla volta per 84 volte.


// salvo in una variabile vuota l'array di numeri generati dall'utente 
var arrayNumeriUtente = [];

// salvo in una variabile booleana la bomba trovata 
var bombaTrovata = false;

// Utilizzo un ciclo while che proseguirà finchè il numero utente non sarà uguale a un numero presente nell arrayBombe (in quel caso avrà perso) o l'array numeri utente arriverà a 84.
while (arrayNumeriUtente.length < 84 && bombaTrovata == false) {

    var numeroUtente = parseInt(prompt("Inserisci un numero"));


}



// se l'utente riesce a inserire tutti gli 84 numeri vince 

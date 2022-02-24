// Creo l'array i cui elementi sono le e-mail degli studenti della classe 56 di Boolean
// DISCLAIMER: LE EMAIL INSERITE SONO FITTIZIE!!!

let mailStudentiClasse56 = ['adelindumitru@classe56.com', 'aldo@classe56.com', 'alessandro_1@classe56.com', 'alessandro_2@classe56.com', 'alessandro_3@classe56.com', 'alessio@classe56.com', 'anthony@classe56.com', 'antonio@classe56.com', 'camilla@classe56.com', 'cristian@classe56.com', 'daniele@classe56.com', 'erika@classe56.com', 'federico@classe56.com', 'giacomo@classe56.com', 'giovanni@classe56.com', 'giuseppe@classe56.com', 'khongor@classe56.com', 'kristian@classe56.com', 'laura@classe56.com', 'luca_1@classe56.com', 'luca_2@classe56.com', 'luigi@classe56.com', 'mariagiuliana@classe56.com', 'mario@classe56.com', 'marzio@classe56.com', 'massimo@classe56.com', 'matteo@classe56.com', 'mattia@classe56.com', 'michela@classe56.com', 'mirko@classe56.com', 'paolo@classe56.com', 'piergiorgio@classe56.com', 'salvatore@classe56.com', 'samuele@classe56.com', 'simone@classe56.com', 'stefano@classe56.com']

/*

// INIZIO Versione 1.0
// Chiedo all'utente di inserire la sua e-mail tramite comando prompt.
// Se l'email è presente, la console restituisce il messaggio "E-mail valida".
// Altrimenti la console restituisce il messaggio "E-mail non valida".


// All'interno del browser genero un popup per chiedere all'utente la propria e-mail
const insertEmail = prompt('Inserisci la tua e-mail di appartenenza alla classe 56 di Boolean:')

// Definisco una variabile esterna con valore FALSE (email non presente) e la userò all'interno di un ciclo for.
let emailPresent = false

// Genero un ciclo FOR con un indice di esecuzione che va da 0 (primo elemento dell'array) al numero precedente la lunghezza dell'array (che coincide con l'ultimo elemento dell'array).
for (let i = 0; i < mailStudentiClasse56.length; i++) {
    // Se l'email (dato NON case-sensitive) inserita dall'utente è uguale ad uno degli elementi dell'array...
    if (mailStudentiClasse56[i].toLowerCase() == insertEmail.toLowerCase()) {
    // La variabile esterna precedentemente creata si trasforma in VERA
    emailPresent = true;
    }
}

// Al termine del ciclo FOR la variabile esterna emailPresent avrà un valore TRUE (email inserita presente nell'array) o un valore FALSE (email inserita non presente)

// Genero un IF che mi visualizza in console il messaggio di validità o meno dell'email inserita
if (emailPresent == true) {
    console.log(`L'email inserita è valida`);
} else {
    console.log(`L'email inserita non è valida`);
};

// FINE Versione 1.0

*/





// INIZIO Versione 2.0
// All'interno della pagina HTML l'utente inserisce la propria E-mail e clicca sul bottone di verifica.
// Se l'email è presente riceverà una schermata di conferma.
// Se l'email non è presente riceverà una schermata di errore.

// Definisco una variabile per l'indirizzo email inserito dall'utente
let insertEmail = document.getElementById('email');

// Seleziono l'elemento HTML con id=validate (il bottone per verificare l'e-mail inserita)
let buttonValidation = document.getElementById('validation');

// Aggiungo un evento al click sul bottone che esegue una funzione con lo stesso ciclo FOR e l'IF della Versione 1.0
buttonValidation.addEventListener('click', function() {

    // Faccio leggere alla funzione il valore dell'email inserita
    let userEmail = insertEmail.value;

    // Definisco una variabile esterna con valore FALSE (email non presente) e la userò all'interno di un ciclo for.
    let emailPresent = false

    // Definisco una variabile per selezionare l'elemento HTML dove verrà visualizzato il risultato
    let outputArea = document.querySelector('.validation-result');

    for (let indexList = 0; indexList < mailStudentiClasse56.length; indexList++) {
        // Se l'email (dato NON case-sensitive) inserita dall'utente è uguale ad uno degli elementi dell'array...
        if (mailStudentiClasse56[indexList].toLowerCase() == userEmail.toLowerCase()) {
        // La variabile esterna precedentemente creata si trasforma in VERA
        emailPresent = true;
        }
    }
    
    // Al termine del ciclo FOR la variabile esterna emailPresent avrà un valore TRUE (email inserita presente nell'array) o un valore FALSE (email inserita non presente)
    
    // Genero un IF che mi visualizza in console il messaggio di validità o meno dell'email inserita
    if (emailPresent == true) {
        outputArea.innerHTML = `L'email inserita è valida`;
    } else {
        outputArea.innerHTML = `L'email inserita non è valida`;
    }
}
);

// FINE Versione 2.0
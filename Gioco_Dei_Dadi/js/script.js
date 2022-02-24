// Definisco le costanti
const minScore = 1;    // Punteggio minimo realizzabile
const maxScore = 6;    // Punteggio massimo realizzabile con un dado classico a 6 facce

// Seleziono l'elemento bottone a cui applicherò la funzione per lanciare il dado
let playButton = document.getElementById('play-button');

// Genero la funzione per giocare al click sul bottone
playButton.addEventListener('click', function playFunction() {

    // Genero un punteggio casuale (in questo caso un intero da 1 a 6) per l'utente
    let userScore = Math.floor(Math.random() * (maxScore - minScore + 1)) + minScore;

    // Genero un punteggio casuale per il computer
    let computerScore = Math.floor(Math.random() * (maxScore - minScore + 1)) + minScore;

    // Stampo nella pagina il punteggio del giocatore e il punteggio del computer
    document.getElementById('user-score').innerHTML = `Il tuo punteggio è ${userScore}.`
    document.getElementById('computer-score').innerHTML = `Il punteggio del computer è ${computerScore}.`

    // Seleziono l'elemento HTML dove inserirò il risultato finale
    let resultContainer = document.getElementById('final-result')

    // Genero un IF per confrontare i punteggi e stabilire chi ha vinto (o se il risultato è di parità) e chiedo all'utente se vuole provare a giocare di nuovo
    if (userScore == computerScore) {
        resultContainer. innerHTML = `Il risultato è di parità. <button id="play-again-button">Prova ancora!</button>`
    } else if (userScore > computerScore) {
        resultContainer. innerHTML = `HAI VINTO! Ti senti fortunato? <button id="play-again-button">Prova ancora!</button>`
    } else {
        resultContainer. innerHTML = `HAI PERSO :( Vuoi la rivincita? <button id="play-again-button">Prova ancora!</button>`
    }

    // Seleziono l'elemento bottone a cui applicherò la funzione per giocare di nuovo
    let playAgainButton = document.getElementById('play-again-button');

    // Genero la funzione per giocare di nuovo al click sul bottone tramite il nome già assegnato precedentemente alla funzione stessa
    playAgainButton.addEventListener('click', playFunction)

}
)
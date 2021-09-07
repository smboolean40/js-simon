// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/**
 * FUNZIONI
 */
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// 1. generare 5 numeri casuali (no duplicati) e li inserisco in un array
var numeriCasuali = [];

while(numeriCasuali.length < 5) {
	var num = getRndInteger(1, 100);

	if ( numeriCasuali.includes(num) == false ) {
		numeriCasuali.push(num);
	}
}
alert(numeriCasuali);

// 2. dopo 30 secondi
// 3. chiedo per 5 volte all'utente di inserire un numero e lo salvo in un array
// 4. controllo i due array, quali numeri l'utente ha indovinato e stampo il punteggio
setTimeout(function() {

	var numeriUtente = [];

	for ( var i = 1; i <= 5; i++ ) {
		var numero = parseInt(prompt("Inserisci un numero"));
		numeriUtente.push(numero);
	}

	var numeriIndovinati = [];

	for ( var i = 0; i < numeriUtente.length; i++ ) {
		if ( numeriCasuali.includes(numeriUtente[i]) == true && numeriIndovinati.includes(numeriUtente[i]) == false ) {
			numeriIndovinati.push(numeriUtente[i]);
		}
	}

	if ( numeriUtente.length > 0 ) {
		alert(`Hai indovinato ${numeriIndovinati.length} numeri (${numeriIndovinati})`);
	} else {
		alert("ritenta!");
	}

}, 3000);
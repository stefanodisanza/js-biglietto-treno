console.log('prendo elemento html con id first-title')
const titleElement = document.getElementById('first-title')



// Prezzo per km in euro
const pricePerKm = 0.21;

// Chiedere numero di km e età del passeggero
const km = parseFloat(prompt("Quanti km vuoi percorrere?"));
const age = parseInt(prompt("Qual è la tua età?"));
const nameSurname = (prompt("Inserisci nome e cognome"));

// Calcolare il prezzo base del biglietto
const basePrice = km * pricePerKm;

// Calcolare lo sconto in base all'età del passeggero
let discount = 0;
if (age < 18) {
  discount = basePrice * 0.2;
} else if (age >= 65) {
  discount = basePrice * 0.4;
}

// Calcolare il prezzo finale
const finalPrice = basePrice - discount;

// Stampare il biglietto del treno
console.log("BIGLIETTO DEL TRENO");
console.log("Numero km: " + km);
console.log("Nome e cognome del passeggero: " + nameSurname);
console.log("Prezzo base: €" + basePrice.toFixed(2));
console.log("Sconto: €" + discount.toFixed(2));
console.log("Prezzo finale: €" + finalPrice.toFixed(2));


titleElement.innerHTML = "BIGLIETTO DEL TRENO"

var spanElement = document.getElementById("numero-km");
spanElement.innerHTML = "Numero di km: " + km;

var spanElement = document.getElementById("nome-passeggero");
spanElement.innerHTML = "Nome e cognome passeggero: " + nameSurname;

var spanElement = document.getElementById("prezzo-base");
spanElement.innerHTML = "Prezzo base: € " + basePrice;

var spanElement = document.getElementById("sconto");
spanElement.innerHTML = "Sconto: € " + discount;

var spanElement = document.getElementById("prezzo-finale");
spanElement.innerHTML = "Prezzo finale: € " + finalPrice;
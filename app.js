let distance
let age


// Chiedi all’utente il suo nome,
distance =parseFloat(prompt('Quanti km devi perccorrere?'))
console.log('la variante km è = ', distance)

// poi chiedi il suo cognome,
age = parseInt(prompt('Quanti anni hai?'))
console.log('la variante age è = ', age)



let basePrice = distance * 0.21;
console.log('la variante prezzo base é ', basePrice)

function calculatePrice(distance, age) {
    if (age < 18){
        return (basePrice * 0.8).toFixed(2);
    }   else if (age >= 65) {
        return (basePrice * 0.6).toFixed(2);
    }   else {
        return basePrice.toFixed(2);
    }
}

let price = calculatePrice(distance, age);
console.log ('la variante prezzo finale é', price)

alert("Il prezzo totale del viaggio é di €" + price)

/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

let nome = prompt('Dimmi il tuo nome');
let surname = prompt("dimmi il tuo cognome")
let color = prompt("dimmi il tuo colore preferito")
const numero = 21

document.getElementById('testo').innerHTML = `<h2>
Ciao ${nome} ${surname} il tuo colore preferito è il ${color}${numero}
<h2>`;
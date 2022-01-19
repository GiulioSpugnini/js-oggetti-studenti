console.log('OK JS');
/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
    BONUS:
        Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/
const result = document.getElementById('result');
const student = {
    nome: 'Giulio',
    cognome: 'Spugnini',
    età: 25,
}
for (let key in student) {

    console.log(`${key}: ${student[key]}`);
}
const students = {
    studenti: [
        { nome: 'Raimondo', cognome: 'Soffici', età: 17, },

        { nome: 'Susanna', cognome: 'Becchi', età: 16, },

        { nome: 'Arturo', cognome: 'Freno', età: 18, },

    ],
}
console.log('STUDENTI');

function printClass() {
    for (let i = 0; i < students.studenti.length; i++) {
        const name = students['studenti'][i];
        for (let key in name) {
            console.log(`${key}: ${name[key]}`);
        }

    }
}
printClass();

const userName = prompt('Digita un nome');
const userSurname = prompt('Digita un cognome');
const userAge = prompt("Digita un' età");

console.log(`Nome: ${userName} Cognome: ${userSurname} Età: ${userAge}`);
const userStudent = {
    nome: userName,
    cognome: userSurname,
    età: userAge,
}
students.studenti.push(userStudent);
console.log('NUOVO ARRAY CON INSERITO LO STUDENTE SCELTO DALL UTENTE');
printClass();
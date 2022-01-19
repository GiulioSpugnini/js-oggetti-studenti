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
    result.innerText = `${student['nome']}  ${student['cognome']}  ${student['età']}`;
}
const students = [];


const firstStudent = {
    nome: 'Raimondo',
    cognome: 'Soffici',
    età: 17,
}

const secondStudent = {
    nome: 'Susanna',
    cognome: 'Becchi',
    età: 16,
}
const thirdStudent = {
    nome: 'Arturo',
    cognome: 'Freno',
    età: 18,
}
students.push(firstStudent);
students.push(secondStudent);
students.push(thirdStudent);


console.log('STUDENTI');
console.log(students);

function printClass() {
    for (let i = 0; i < students.length; i++) {
        const name = students[i];
        for (let key in name) {
            console.log(`${key}: ${name[key]}`);
        }

    }
    return students['studenti'];
}
printClass();

// const userName = prompt('Digita un nome');
const userName = document.getElementById('name');
// const userSurname = prompt('Digita un cognome');
const userSurname = document.getElementById('surname');
// const userAge = prompt("Digita un' età");
const userAge = document.getElementById('age');

const finalStudents = document.getElementById('finalStudents');

const generate = document.getElementById('generate');

generate.addEventListener('click', function() {
    console.log(`Nome: ${userName} Cognome: ${userSurname} Età: ${userAge}`);
    const userStudent = {
        nome: userName.value,
        cognome: userSurname.value,
        età: userAge.value,
    }
    students.studenti.push(userStudent);

    console.log('NUOVO ARRAY CON INSERITO LO STUDENTE SCELTO DALL UTENTE');
    finalStudents.innerHTML = `${printClass(students.studenti)}`;

})
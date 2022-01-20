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
const result2 = document.getElementById('result2');
const student = {
    nome: 'Giulio',
    cognome: 'Spugnini',
    età: 25,
}
for (let key in student) {

    console.log(`${key}: ${student[key]}`);
    result.innerText = `${student['nome']}  ${student['cognome']}  ${student['età']}`;
}
const students = [{
        nome: 'Raimondo',
        cognome: 'Soffici',
        età: 17,
    },
    {
        nome: 'Susanna',
        cognome: 'Becchi',
        età: 16,
    },
    {
        nome: 'Arturo',
        cognome: 'Freno',
        età: 18,
    }
];

console.log('STUDENTI');
console.table(students);

function printClass() {
    for (let i = 0; i < students.length; i++) {
        const name = students[i];
        for (let key in name) {
            // console.log(`${key}: ${name[key]}`);
        }

    }
    return students;
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
    console.log(`Nome: ${userName.value} Cognome: ${userSurname.value} Età: ${userAge.value}`);
    const userStudent = {
        nome: userName.value,
        cognome: userSurname.value,
        età: userAge.value,
    }
    console.log(userStudent);
    students.push(userStudent);
    for (let i = 0; i < students.length; i++) {
        // Prendo ogni valore nell'array 
        for (let key in students[i]) {
            if (!(key === 'eta')) {
                // Ad ogni ciclo viene creato un p
                let info = document.createElement('p');
                // Stampa il valore della key nell array (i)
                let valore = students[i][key];

                info.innerText = key + ': ' + valore;
                finalStudents.appendChild(info);
            }
        }
    }

})
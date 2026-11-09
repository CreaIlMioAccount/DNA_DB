const DNA = require('./core/DNA');

DNA.connect();

DNA.find('clienti', {
    id: 1
});

DNA.insert('clienti', {
    nome: 'Mario Rossi',
    email: 'mario@email.it'
});
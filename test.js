const DNA = require('./core/DNA');

async function test() {

    const cliente = await DNA.insert(
        'clienti',
        {
            nome: 'Mario Rossi',
            email: 'mario@email.it',
            telefono: '3331234567',
            azienda: 'Cliente Test'
        }
    );

    console.log(cliente);

}

test();
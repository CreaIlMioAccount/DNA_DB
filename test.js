const DNA = require('./core/DNA');

async function test() {

    const cliente = await DNA.delete(
        'clienti',
        3
    );

    console.log(cliente);

}

test();
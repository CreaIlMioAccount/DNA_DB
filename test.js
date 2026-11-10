const pool = require('./services/postgres');

async function test() {
    try {

        const result = await pool.query('SELECT NOW()');

        console.log('✅ Connessione PostgreSQL riuscita');
        console.log(result.rows[0]);

    } catch (error) {

        console.error('❌ Errore PostgreSQL');
        console.error(error);

    } finally {

        await pool.end();

    }
}

test();
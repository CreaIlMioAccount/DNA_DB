const pool = require('./services/postgres');

async function test() {

    try {

        const result = await pool.query(
            'SELECT * FROM clienti'
        );

        console.log(result.rows);

    } catch (error) {

        console.error(error);

    } finally {

        await pool.end();

    }

}

test();
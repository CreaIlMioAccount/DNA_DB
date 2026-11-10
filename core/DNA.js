const pool = require('../services/postgres');

class DNA {

    async find(table) {

        try {

            const result = await pool.query(
                `SELECT * FROM ${table}`
            );

            return result.rows;

        } catch (error) {

            console.error(error);

            return [];

        }

    }

}

module.exports = new DNA();
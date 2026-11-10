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

    async insert(table, data) {

        try {

            const columns = Object.keys(data);

            const values = Object.values(data);

            const placeholders = values.map(
                (_, index) => `$${index + 1}`
            );

            const query = `
                INSERT INTO ${table}
                (${columns.join(', ')})
                VALUES
                (${placeholders.join(', ')})
                RETURNING *
            `;

            const result = await pool.query(
                query,
                values
            );

            return result.rows[0];

        } catch (error) {

            console.error(error);

            return null;

        }

    }

}

module.exports = new DNA();
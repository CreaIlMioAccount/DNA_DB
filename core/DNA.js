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

    async update(table, id, data) {

        try {

            const columns = Object.keys(data);
            const values = Object.values(data);

            const setClause = columns.map(
                (column, index) => `${column} = $${index + 1}`
            );

            const query = `
                UPDATE ${table}
                SET ${setClause.join(', ')}
                WHERE id = $${columns.length + 1}
                RETURNING *
            `;

            const result = await pool.query(
                query,
                [...values, id]
            );

            return result.rows[0];

        } catch (error) {

            console.error(error);

            return null;

        }

    }

    async delete(table, id) {

        try {

            const query = `
                DELETE FROM ${table}
                WHERE id = $1
                RETURNING *
            `;

            const result = await pool.query(
                query,
                [id]
            );

            return result.rows[0];

        } catch (error) {

            console.error(error);

            return null;

        }

    }

}

module.exports = new DNA();
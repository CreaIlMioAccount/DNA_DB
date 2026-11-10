const { Pool } = require('pg');
const dbConfig = require('../config/database');

const pool = new Pool({
    host: dbConfig.host,
    port: dbConfig.port,
    database: dbConfig.database,
    user: dbConfig.user,
    password: dbConfig.password
});

module.exports = pool;

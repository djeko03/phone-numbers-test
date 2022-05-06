const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: '3872438',
    host: 'localhost',
    port: 5432,
    database: 'phone-numbers-test'
})

module.exports = pool
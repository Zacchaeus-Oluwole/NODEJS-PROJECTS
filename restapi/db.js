const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"students",
    password:"01UW01E01u71m1",
    port:5432,
});

module.exports = pool;
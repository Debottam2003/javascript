let {Pool} = require('pg');

let pg_obj = new Pool({
    host: "localhost",
    user: "postgres",
    database: "student",
    password: 'okudera2003',
    port: 3000
});

module.exports = pg_obj;

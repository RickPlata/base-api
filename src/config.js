const dotenv = require('dotenv');
dotenv.config();

var config = {
    port: process.env.PORT,
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    pass: process.env.DBPASS,
    database: process.env.DBDATABASE
}

module.exports = config;
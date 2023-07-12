const mysql = require('mysql');
const config = require('../config');

const db_settings = {
    host: config.db_host,
    user: config.db_user,
    password: config.db_pass,
    database: config.db_database
}

const conn = mysql.createConnection(db_settings);

module.exports = conn;
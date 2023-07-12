const conn = require('../database/conn');
const queries = require('../database/queries');

const getAllUsers = (req, res) => {
    conn.query(queries.getAllUsers, function (err, result, fields){
        if (err) throw err;
        res.json(result);
        console.log(result);
    });
    
}

module.exports = {
    getAllUsers
}
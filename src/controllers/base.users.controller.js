const conn = require('../database/conn');
const queries = require('../database/queries');

const getAllUsers = (req, res) => {
    conn.query(queries.getAllUsers, function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const getOneUser = (req, res) => {
    var nick = req.params.nick;
    conn.query(queries.getOneUser,[nick], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const newUser = (req, res) => {
    var {name, nickname, email, password, type} = req.body;
    conn.query(queries.newUser,[name, nickname, email, password, type], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const updateUser = (req, res) => {
    var {email, password, nick} = req.body;
    conn.query(queries.updateUser,[email, password, nick], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const deleteUser = (req, res) => {
    var {nick} = req.body;
    conn.query(queries.deleteUser,[nick], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}

module.exports = {
    getAllUsers,
    getOneUser,
    newUser,
    updateUser,
    deleteUser
}
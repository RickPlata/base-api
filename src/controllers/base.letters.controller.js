const conn = require('../database/conn');
const queries = require('../database/queries');

const getAllLetters = (req, res) => {
    conn.query(queries.getAllLetters, function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const getUserletters = (req, res) => {
    var nick = req.params.nick;
    conn.query(queries.getUserLetters,[nick], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const newLetter = (req, res) => {
    var {user_id, autor, desc, content} = req.body;
    conn.query(queries.newLetter,[user_id, autor, desc, content], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const updateLetter = (req, res) => {
    var {id, content, desc} = req.body;
    conn.query(queries.updateLetter,[id, content, desc], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const deleteLetter = (req, res) => {
    var {id} = req.body;
    conn.query(queries.deleteLetter,[id], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}

module.exports = {
    getAllLetters,
    getUserletters,
    newLetter,
    updateLetter,
    deleteLetter
}
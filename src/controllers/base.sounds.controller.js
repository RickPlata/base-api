const conn = require('../database/conn');
const queries = require('../database/queries');

const getAllSounds = (req, res) => {
    conn.query(queries.getAllSounds, function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const getUserSounds = (req, res) => {
    var nick = req.params.nick;
    conn.query(queries.getUserSounds,[nick], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const newSounds = (req, res) => {
    var {user_id, autor, desc, content, type} = req.body;
    conn.query(queries.newSounds,[user_id, autor, desc, content, type], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const updateSounds = (req, res) => {
    var {id, content, desc, type} = req.body;
    conn.query(queries.updateSounds,[id, content, desc, type], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const deleteSounds = (req, res) => {
    var {id} = req.body;
    conn.query(queries.deleteSounds,[id], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}

module.exports = {
    getAllSounds,
    getUserSounds,
    newSounds,
    updateSounds,
    deleteSounds
}
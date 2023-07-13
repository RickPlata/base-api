const conn = require('../database/conn');
const queries = require('../database/queries');

const getAllGallery = (req, res) => {
    conn.query(queries.getAllGallery, function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const getUserGallery = (req, res) => {
    var nick = req.params.nick;
    conn.query(queries.getUserGallery,[nick], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const newGallery = (req, res) => {
    var {user_id, autor, desc, content, type} = req.body;
    conn.query(queries.newGallery,[user_id, autor, desc, content, type], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const updateGallery = (req, res) => {
    var {id, content, desc, type} = req.body;
    conn.query(queries.updateGallery,[id, content, desc, type], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const deleteGallery = (req, res) => {
    var {id} = req.body;
    conn.query(queries.deleteGallery,[id], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}

module.exports = {
    getAllGallery,
    getUserGallery,
    newGallery,
    updateGallery,
    deleteGallery
}
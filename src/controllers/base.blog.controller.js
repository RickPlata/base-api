const conn = require('../database/conn');
const queries = require('../database/queries');

const getAllBlogs = (req, res) => {
    conn.query(queries.getAllBlogs, function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const getUserBlog = (req, res) => {
    var nick = req.params.nick;
    conn.query(queries.getUserBlog,[nick], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const newBlog = (req, res) => {
    var {user_id, autor, desc, content, type} = req.body;
    conn.query(queries.newBlog,[user_id, autor, desc, content, type], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const updateBlog = (req, res) => {
    var {id, content, desc, type} = req.body;
    conn.query(queries.updateBlog,[id, content, desc, type], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}
const deleteBlog = (req, res) => {
    var {id} = req.body;
    conn.query(queries.deleteBlog,[id], function (err, result, fields){
        if (err) throw err;
        res.json(result);
    });    
}

module.exports = {
    getAllBlogs,
    getUserBlog,
    newBlog,
    updateBlog,
    deleteBlog
}
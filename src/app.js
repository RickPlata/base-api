const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const {getAllUsers, getOneUser, newUser, updateUser, deleteUser} = require('./controllers/base.users.controller')

const app = express();
//Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Routes
//Users
app.get('/users', getAllUsers);
app.get('/users/:nick', getOneUser);
app.post('/users', newUser);
app.put('/users', updateUser);
app.delete('/users', deleteUser);

//Blog
app.get('/blog', getAllUsers);
app.get('/blog/:nick', getAllUsers);
app.post('/blog', getAllUsers);
app.put('/blog', getAllUsers);
app.delete('/blog', getAllUsers);

//sounds
app.get('/sounds', getAllUsers);
app.get('/sounds/:nick', getAllUsers);
app.post('/sounds', getAllUsers);
app.put('/sounds', getAllUsers);
app.delete('/sounds', getAllUsers);

//letters
app.get('/letters', getAllUsers);
app.get('/letters/:nick', getAllUsers);
app.post('/letters', getAllUsers);
app.put('/letters', getAllUsers);
app.delete('/letters', getAllUsers);

//gallery
app.get('/gallery', getAllUsers);
app.get('/gallery/:nick', getAllUsers);
app.post('/gallery', getAllUsers);
app.put('/gallery', getAllUsers);
app.delete('/gallery', getAllUsers);

//Sever initialization
app.listen(config.port, () => {
    console.log(`Server is runing on port ${config.port}`);
});
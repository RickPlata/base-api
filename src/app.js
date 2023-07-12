const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const {getAllUsers} = require('./controllers/base.controller')

const app = express();
//Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Routes
app.get('/users', getAllUsers);

//Sever initialization
app.listen(config.port, () => {
    console.log(`Server is runing on port ${config.port}`);
});
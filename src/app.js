const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const {getAllUsers} = require('./controllers/base.controller');

const app = express();

//Middleware
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.get('/users', getAllUsers);

//Server initialization
app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
});
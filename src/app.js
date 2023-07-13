const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const {getAllUsers, getOneUser, newUser, updateUser, deleteUser} = require('./controllers/base.users.controller');
const {getAllBlogs, getUserBlog, newBlog, updateBlog, deleteBlog} = require('./controllers/base.blog.controller');
const {getAllSounds, getUserSounds, newSounds, updateSounds, deleteSounds} = require('./controllers/base.sounds.controller');
const {getAllLetters, getUserletters, newLetter, updateLetter, deleteLetter} = require('./controllers/base.letters.controller');
const {getAllGallery, getUserGallery, newGallery, updateGallery, deleteGallery} = require('./controllers/base.gallery.controller');

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
app.get('/blog', getAllBlogs);
app.get('/blog/:nick', getUserBlog);
app.post('/blog', newBlog);
app.put('/blog', updateBlog);
app.delete('/blog', deleteBlog);

//sounds
app.get('/sounds', getAllSounds);
app.get('/sounds/:nick', getUserSounds);
app.post('/sounds', newSounds);
app.put('/sounds', updateSounds);
app.delete('/sounds', deleteSounds);

//letters
app.get('/letters', getAllLetters);
app.get('/letters/:nick', getUserletters);
app.post('/letters', newLetter);
app.put('/letters', updateLetter);
app.delete('/letters', deleteLetter);

//gallery
app.get('/gallery', getAllGallery);
app.get('/gallery/:nick', getUserGallery);
app.post('/gallery', newGallery);
app.put('/gallery', updateGallery);
app.delete('/gallery', deleteGallery);

//Sever initialization
app.listen(config.port, () => {
    console.log(`Server is runing on port ${config.port}`);
});
const queries = {
    getAllUsers: 'SELECT * FROM users',
    getOneUser: 'SELECT * FROM users WHERE nickname = ?',
    newUser: 'INSERT INTO users VALUES (NULL, ?, ?, ?, ?, ?)',
    updateUser: 'UPDATE users SET email = ?, password = ? WEHRE nickname = ?',
    DeleteUser: 'DELETE FROM users WHERE nickname = ?',

    getAllBlogs: 'SELECT * FROM blog',
    getUserBlog: 'SELECT b.* FROM blog b JOIN users u ON b.user_id = u.id WHERE u.nickname = ?',
    newBlog: 'INSERT INTO blog VALUES (NULL, ?, ?, ?, ?, ?)',
    deleteBlog: 'DELETE FROM blog WHERE id = ?',
    updateBlog: 'UPDATE blog SET content = ?, description = ?, type = ?  WEHRE id = ?',

    getAllLetters: 'SELECT * FROM letters',
    getUserLetters: 'SELECT l.* FROM letters l JOIN users u ON l.user_id = u.id WHERE u.nickname = ?',
    newLetter: 'INSERT INTO letters VALUES (NULL, ?, ?, ?, ?)',
    deleteLetter: 'DELETE FROM letters WHERE id = ?',
    updateLetter: 'UPDATE letters SET content = ?, description = ? WEHRE id = ?',

    getAllGallery: 'SELECT * FROM gallery',
    getUserGallery: 'SELECT g.* FROM gallery g JOIN users u ON g.user_id = u.id WHERE u.nickname = ?',
    newGallery: 'INSERT INTO gallery VALUES (NULL, ?, ?, ?, ?, ?)',
    deleteGallery: 'DELETE FROM gallery WHERE id = ?',
    updateGallery: 'UPDATE gallery SET content = ?, description = ?, type = ? WEHRE id = ?',

    getAllSounds: 'SELECT * FROM sounds',
    getUserSounds: 'SELECT s.* FROM sounds s JOIN users u ON g.user_id = u.id WHERE u.nickname = ?',
    newSounds: 'INSERT INTO sounds VALUES (NULL, ?, ?, ?, ?, ?)',
    deleteSounds: 'DELETE FROM sounds WHERE id = ?',
    updateSounds: 'UPDATE sounds SET content = ?, description = ?, type = ? WEHRE id = ?'
}

module.exports = queries;

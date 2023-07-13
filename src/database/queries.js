const queries = {
    getAllUsers: 'SELECT * FROM users',
    getOneUser: 'SELECT * FROM users where nickname = ?',
    newUser: 'INSERT INTO users values (NULL, ?, ?, ?, ?, ?)',
    updateUser: 'UPDATE users SET email = ?, password = ? WEHRE nickname = ?',
    DeleteUser: 'DELETE FROM users WHERE nickname = ?'
}

module.exports = queries;

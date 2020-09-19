const db = require("./db")



function createAccount(data) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(data.password, 10, function(err, hash) {
            if(err) {throw err}
            db.query({sql: 'INSERT INTO USER (firstName, lastName, email, dob, passwordHash, tac, createdTime) VALUES ?, ?, ?, ?, ?, ?, ?', values: [data.firstName, data.lastName, data.email, data.dob, hash, data.tac, time]}, function(err, row) {
                if (err) {
                    console.log(err)
                    return;
                } else {
                    db.query({sql: 'SELECT * FROM user WHERE userID = ?', values: [row.insertId]}, function(err, row) {
                        row.passwordHash = null
                        err ? reject(err) : resolve(row)
                    })
                }
            })
        })
        
    })
}

module.exports = {createAccount}
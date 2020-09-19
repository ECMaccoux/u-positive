const express = require('express')
const db = require('./db')
const bcrypt = require('bcrypt')

function findUserByEmail(email) {
    return new Promise((resolve, reject) => {
        db.query({sql: 'SELECT * FROM user WHERE email = ?', values: [email]}, function(err, row) {
            err ? reject(err) : resolve(row)
        })
    })
}

function validateUser(email, password) {
    return new Promise((resolve, reject) => {
        db.query({sql: 'SELECT passwordHash FROM user WHERE email = ?', values: [email]}, function(err, row) {
            if(err) {
                reject(err)
                return
            } else {
                if (row[0]) {
                    bcrypt.compare(password, row[0].passwordHash, function(err, result) {
                        err ? reject(err) : resolve(result)
                    })
                }
            }
        })
    })
}

const loginRouter = express.Router()

module.exports = loginRouter
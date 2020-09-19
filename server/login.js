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

function findUserByID(id) {
    return new Promise((resolve, reject) => {
        db.query({sql: 'SELECT * FROM user WHERE userID = ?', values: [id]}, function(err, row) {
            err ? reject(err) : resolve(row)
        })
    })
}

function validateUser(email, password) {
    return new Promise((resolve, reject) => {
        db.query({sql: 'SELECT passwordHash FROM user WHERE email = ?', values: [email]}, function(err, row) {
            if(err) {
                reject(err)
            } else {
                if (row[0]) {
                    console.log('comparing')
                    bcrypt.compare(password, row[0].passwordHash, function(err, result) {
                        err ? reject(err) : resolve(result)
                    })
                } else {
                    reject('did not find user')
                }
            }
        })
    })
}

const loginRouter = express.Router()

module.exports = {findUserByEmail, validateUser, findUserByID}
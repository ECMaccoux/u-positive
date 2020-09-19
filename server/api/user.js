const express = require('express')

const db = require('../db')

const userRouter = express.Router()

function getUserInfo(id) {
    return new Promise((resolve, reject) => {
        db.query({sql: "SELECT * FROM user WHERE userID = ?", values: [id]}, function(err, row) {
            err ? reject(err) : resolve(row)
        })
    })
}

userRouter.get('/', (req, res) => {
    getUserInfo(req.user.userID)
    .then(row => {
        res.json(row).status(200)
    })
    .catch(err => {
        res.status(500)
    })
})

userRouter.put('/', (req, res) => {

})

module.exports = userRouter
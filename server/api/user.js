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
    if (req.user) {
        getUserInfo(req.user.userID)
    .then(row => {
        res.json(row).status(200)
    })
    .catch(err => {
        console.log(err)
        res.status(500)
    })
    } else {
        res.json({err: 'Not currently logged in'})
    }
    
})

userRouter.put('/', (req, res) => {

})

module.exports = userRouter
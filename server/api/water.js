const express = require('express')
const db = require('../db')

const waterRouter = express.Router()

function getWaterByUserID(id) {
    return new Promise((resolve, reject) => {
        db.query({
            sql: 'SELECT * FROM userWater WHERE userID = ?',
            values: [id]
        }, function(err, row) {
            if (err) reject(err);
            else {
                resolve(row)
            }
        })
    })
}

function createWater(id, data) {
    return new Promise((resolve, reject) => {
        var yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        db.query({
            sql: 'INSERT INTO userWater (waterQuantity, dateSubmitted, surveyID, userID) VALUES (?, ?, ?, ?)',
            values: [data.waterQuantity, yesterday, 3, id]
        }, function(err, row) {
            if (err) reject(err);
            else {
                resolve(row)
            }
        })
    })
}

waterRouter.get('/', (req, res) => {
    getWaterByUserID(req.user.userID)
    .then(res => {
        res.json(res)
    })
    .catch(err => {
        console.log(err)
        res.json({err: err})
    })
})

waterRouter.post('/', (res, res) => {
    createWater(req.user.userID, req.body)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err)
        res.json({err: err})
    })
})

module.exports = waterRouter
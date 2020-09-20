const express = require('express')
const db = require('../db')

function getDepressionScoresByUserID(id) {
    return new Promise((resolve, reject) => {
        db.query({sql: 'SELECT * FROM userDepression WHERE userID = ?', values: [id]}, function(err, row) {
            err ? reject(err) : resolve(row)
        })
    })
}

function setOrModifyDepressionScores(id, data) {
    return new Promise((resolve, reject) => {
        var today = new Date();
    today.toISOString().slice(0, 19).replace("T", " ");
    db.query({sql: 'SELECT * FROM userDepression WHERE userID = ? AND dateSubmitted = ?', values: [id, today]}, function(err, rows) {
        if (err) reject(err);
        else if (rows[0]) {
            db.query({sql: 'UPDATE userDepression SET q1Answer = ?, q2Answer = ?, q3Answer = ? WHERE userID = ? AND dateSubmitted = ?', values: [data.q1Answer, data.q2Answer, data.q3Answer, id, today]}, function(err, rows) {
                if (err) reject(err);
                else {
                    resolve(rows)
                }
            })
        } else {
            db.query({sql: 'INSERT INTO userDepression (q1Answer, q2Answer, q3Answer, dateSubmitted, userID, surveyID) VALUES (?, ?, ?, ?, ?, ?)', values: [data.q1Answer, data.q2Answer, data.q3Answer, today, id, 2]}, function(err, rows) {
                if (err) reject(err);
                else {
                    resolve(rows)
                }
            })
        }
    })
    })
    
}

const depressionRouter = express.Router()

depressionRouter.get('/', (req, res) => {
    getDepressionScoresByUserID(req.user.userID)
    .then(results => {
        res.json(results)
    })
    .catch(err => {
        console.log(err)
        res.json({err: err}).status(500)
    })
})

depressionRouter.post('/', (req, res) => {
    const data = req.body;
    setOrModifyDepressionScores(req.user.userID, data)
    .then(results => {
        res.json(results).status(200)
    })
    .catch(err => {
        console.log(err)
        res.json({err: err}).status(500)
    })
})

module.exports = depressionRouter
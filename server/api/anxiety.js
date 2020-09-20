const express = require('express')
const db = require('../db')

function getAnxietyScoresByUserID(id) {
    return new Promise((resolve, reject) => {
        db.query({sql: 'SELECT * FROM userAnxiety WHERE userID = ?', values: [id]}, function(err, row) {
            err ? reject(err) : resolve(row)
        })
    })
}

function setOrModifyAnxietyScores(id, data) {
    return new Promise((resolve, reject) => {
        var today = new Date();
    today.toISOString().slice(0, 19).replace("T", " ");
    db.query({sql: 'SELECT * FROM userAnxiety WHERE userID = ? AND dateSubmitted = ?', values: [id, today]}, function(err, rows) {
        if (err) reject(err);
        else if (rows[0]) {
            db.query({sql: 'UPDATE userDepression SET question1 = ?, question2 = ?, question3 = ? WHERE userID = ? AND dateSubmitted = ?', values: [data.question1, data.question2, data.question3, id, today]}, function(err, rows) {
                if (err) reject(err);
                else {
                    resolve(rows)
                }
            })
        } else {
            db.query({sql: 'INSERT INTO userDepression (question1, question2, question3, dateSubmitted, userID, surveyID) VALUES (?, ?, ?, ?, ?)', values: [data.question1, data.question2, data.question3, id, today, 2]}, function(err, rows) {
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
    setOrModifyDepressionScores(req.user.id, data)
    .then(results => {
        res.json(results).status(200)
    })
    .catch(err => {
        console.log(err)
        res.json({err: err}).status(500)
    })
})

module.exports = depressionRouter
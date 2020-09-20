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
            db.query({sql: 'UPDATE userAnxiety SET q1Answer = ?, q2Answer = ?, q3Answer = ? WHERE userID = ? AND dateSubmitted = ?', values: [data.q1Answer, data.q2Answer, data.q3Answer, id, today]}, function(err, rows) {
                if (err) reject(err);
                else {
                    resolve(rows)
                }
            })
        } else {
            db.query({sql: 'INSERT INTO userAnxiety (q1Answer, q2Answer, q3Answer, dateSubmitted, userID, surveyID) VALUES (?, ?, ?, ?, ?, ?)', values: [data.q1Answer, data.q2Answer, data.q3Answer, today, id, 2]}, function(err, rows) {
                if (err) reject(err);
                else {
                    resolve(rows)
                }
            })
        }
    })
    })
    
}

const anxietyRouter = express.Router()

anxietyRouter.get('/', (req, res) => {
    getAnxietyScoresByUserID(req.user.userID)
    .then(results => {
        res.json(results)
    })
    .catch(err => {
        console.log(err)
        res.json({err: err}).status(500)
    })
})

anxietyRouter.post('/', (req, res) => {
    const data = req.body;
    setOrModifyAnxietyScores(req.user.userID, data)
    .then(results => {
        res.json(results).status(200)
    })
    .catch(err => {
        console.log(err)
        res.json({err: err}).status(500)
    })
})

module.exports = anxietyRouter
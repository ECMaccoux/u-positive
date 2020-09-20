const express = require('express')
const db = require('../db')

const journalRouter = express.Router()

function getJournalsByUserID(id) {
    return new Promise((resolve, reject) => {
        db.query({sql: 'SELECT * FROM userJournals WHERE userID = ?', values: [id]}, function(err, row) {
            if (err) reject(err);
            else {
                resolve(row)
            }
        })    
    })
}

function createJournal(id, data) {
    var today = new Date();
    today.toISOString().slice(0, 19).replace("T", " ");
    return new Promise((resolve, reject) => {
        db.query({sql: 'INSERT INTO userJournals (userID, journalEntry, title, createdTime) VALUES (?,?, ?, ?)', values: [id, data.journalEntry, data.title, today]}, function(err, row) {
            if (err) reject(err);
            else {
                resolve(row)
            }
        })
    })
}

journalRouter.get('/', (req, res) => {
    getJournalsByUserID(req.user.userID)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err);
        res.json({err: err}).status(500)
    })
})

journalRouter.post('/', (req, res) => {
    createJournal(req.user.userID, req.body)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err)
        res.json({err: err}).status(500)
    })
})

module.exports = journalRouter
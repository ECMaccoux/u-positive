const express = require('express')
const db = require('../db')

const waterRouter = express.Router()

function getWater() {
    db.query({
        sql: 'SELECT * FROM '
    })
}

waterRouter.get('/', (req, res) => {
    
})

module.exports = waterRouter
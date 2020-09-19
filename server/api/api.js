const express = require('express')

const apiRouter = express.Router()

apiRouter.get('/', (req, res) => {
    res.send('Welcome to the UPAPI (U-Positive Application Programming Interface). Please check back later for a better documented API and well rested programmers.')
})


module.exports = apiRouter
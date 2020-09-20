const express = require('express')
const anxietyRouter = require('./anxiety')
const depressionRouter = require('./depression')
const journalRouter = require('./journal')
const userRouter = require('./user')

const apiRouter = express.Router()

apiRouter.use('/user', userRouter)
apiRouter.use('/depression', depressionRouter)
apiRouter.use('/anxiety', anxietyRouter)
apiRouter.use('/journal', journalRouter)

apiRouter.get('/', (req, res) => {
    res.send('Welcome to the UPAPI (U-Positive Application Programming Interface). Please check back later for a better documented API and well rested programmers.')
})


module.exports = apiRouter
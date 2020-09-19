const express = require("express");

const App = express()

App.get('/', (req, res) => {
    res.send('ok')
})

App.listen(3000, () => {
    console.log('Running on port 3000!')
})
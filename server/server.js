const express = require("express");
const path = require('path')
const PATH = path.join(__dirname, "../dev/")


const App = express()

App.get("/*?", (req, res) => {
    //console.log(CURR_PATH + '/img/' + req.params[0])
    res.sendFile(PATH + req.params[0]);
  });

App.listen(3000, () => {
    console.log('Running on port 3000!')
})
const mysql = require('mysql')
const keys = require('../keys')

let db = mysql.createPool({
    database: keys.mysql.database,
    host: keys.mysql.host,
    user: keys.mysql.user,
    password: keys.mysql.pass,
    port: keys.mysql.port
})

module.exports = db
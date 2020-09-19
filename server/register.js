const db = require("./db");
const bcrypt = require("bcrypt");

/**
 * Creates a new UP account - no data verification is done in this call!
 * @param {data} data 
 */
function createAccount(data) {
  return new Promise((resolve, reject) => {
    var time = new Date();
    time.toISOString().slice(0, 19).replace("T", " ");
    var dobTime = new Date(data.dob)
    dobTime.toISOString().slice(0, 19).replace("T", " ");
    bcrypt.hash(data.password, 10, function (err, hash) {
      if (err) {
        throw err;
      }
      //TODO make sure that the account doesn't already exist in the system
      db.query(
        {
          sql:
            "INSERT INTO user (firstName, lastName, email, dob, passwordHash, tac, createdTime) VALUES (?, ?, ?, ?, ?, ?, ?)",
          values: [
            data.firstName,
            data.lastName,
            data.email,
            dobTime,
            hash,
            data.tac,
            time,
          ],
        },
        function (err, row) {
          if (err) {
            console.log(err);
            return;
          } else {
            db.query(
              {
                sql: "SELECT * FROM user WHERE userID = ?",
                values: [row.insertId],
              },
              function (err, row) {
                row.passwordHash = null;
                err ? reject(err) : resolve(row);
              }
            );
          }
        }
      );
    });
  });
}

module.exports = { createAccount };

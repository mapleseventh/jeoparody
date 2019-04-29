const pg = require('pg');
const conString = "postgres://egpfdyzm:T39wuuQoQ9DtnGVbxJZKx5Slob_4qGEk@hansken.db.elephantsql.com:5432/egpfdyzm";
const client = new pg.Client(conString);


const userController = {}

userController.verifyUser = (req, res, next) => {
  console.log(req.body)
  let verifyQuery = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = crypt('${req.body.password}', password)`
  client.connect((err) => {
    client.query(verifyQuery, (err, result) => {
      if (err) {
        console.error('cannot verify user');
      } else {
        console.log("Success! Welcome back", result.rows[0].username)
      }
      client.end();
      next()
    })
  })
}
userController.createUser = (req, res, next) => {
  console.log("create user middleware initiated");
  if (req.body.username && req.body.password) {
    console.log("Request body = ", req.body)
    let register = `INSERT INTO users (username, password) VALUES ('${req.body.username}', crypt('${req.body.password}', gen_salt('bf', 8)))`
    client.connect((err) => {
      client.query(register, (err, result) => {
        if(err) console.error('cannot register new user', err);
        console.log('register success!', result.rows)
        client.end()
        next()
      })
    })
  }
}

module.exports = userController;
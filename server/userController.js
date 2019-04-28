const pg = require('pg');
const conString = "postgres://egpfdyzm:T39wuuQoQ9DtnGVbxJZKx5Slob_4qGEk@hansken.db.elephantsql.com:5432/egpfdyzm";
const client = new pg.Client(conString);


const userController = {}

userController.getUser = (req, response) => {
  console.log(req.body)
  client.query('SELECT * FROM users WHERE username = "Jason"', (err, results) => {
    if (err) console.error(err);
    console.log(results)
    response.status(200).json(results)
    
  })
}
userController.createUser = (req, res, next) => {
  if (req.body.username && req.body.password) {
    console.log("Request body = ", req.body)
    let register = `INSERT INTO users (username, password) VALUES ('${req.body.username}', crypt('${req.body.password}', gen_salt('bf')))`
    client.connect((err) => {
      client.query(register, (err, result) => {
        if(err) console.error('cannot register new user', err);
        console.log('register success!', result)
        client.end()
      })
    })
  }
  next()
}


userController.verifyUser = (req, res, next) => {
  
}
module.exports = userController;
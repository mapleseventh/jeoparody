const pg = require('pg');
const conString = "postgres://egpfdyzm:T39wuuQoQ9DtnGVbxJZKx5Slob_4qGEk@hansken.db.elephantsql.com:5432/egpfdyzm";
const client = new pg.Client(conString);

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  let rand = Math.floor(Math.random()*1000)%99;
  res.cookie('secret', rand);
  console.log(rand)
  return next();
}

cookieController.setSSIDCookie = (req, res, next) => {
  if (err) console.err(err); 
  let setSSID = `SELECT id FROM users WHERE username = '${req.body.username}' AND password = crypt('${req.body.password}', password)`
  client.connect((err) => {
    client.query(setSSID, (err, id) => {
      if (err) {
        console.error('cannot set SSID cookie');
      } else {
        let uid = id.rows[0].id;
        res.cookie('SSID', uid, {httpOnly: true });
        console.log("Success! Welcome back", id.rows[0].id)
        res.status();
      }
      client.end()
    });
  });
};


module.exports = cookieController;
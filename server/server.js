const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const pg = require('pg');

const userController = require('./userController')
const gameController = require('./gameController')

const server = http.createServer(app);
const conString = "postgres://egpfdyzm:T39wuuQoQ9DtnGVbxJZKx5Slob_4qGEk@hansken.db.elephantsql.com:5432/egpfdyzm";
const client = new pg.Client(conString);

client.connect(function(err) {
  if(err) return console.error("Could not connect to postgres", err);
  console.log("Successful connection to elephantSQL");
  
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) return console.error('Error running query', err);
    console.log(result.rows[0].theTime);
    client.end()
  });
});

// const cors = require('cors');
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/signup', userController.createUser, (req, res) => {
  res.end;
});

app.post('/login', userController.getUser, (req, res) => {

})

app.post('/game', gameController.saveGame, (req, res) => {
  res.status()
})







server.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});

module.exports = server;

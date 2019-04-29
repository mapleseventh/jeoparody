/* =========================================
Setting up postgreSQL database;
Connecting via elephantSQL;

=========================================*/


const pg = require('pg');

const conString = "postgres://egpfdyzm:T39wuuQoQ9DtnGVbxJZKx5Slob_4qGEk@hansken.db.elephantsql.com:5432/egpfdyzm";
const client = new pg.Client(conString);


client.connect(function(err) {
  if(err) {
    return console.error("Could not connect to postgres", err);
  }
  console.log("Successful connection to elephantSQL");
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('Error running query', err);
    }
    console.log(result.rows[0].theTime);
    client.end()
  });
});
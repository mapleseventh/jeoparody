const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const server = http.createServer(app);

// const cors = require('cors');
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/signup', (req, res) => {
  
  res.send("HEY YOU")
})








server.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});

module.exports = server;

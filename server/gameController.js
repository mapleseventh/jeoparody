const pg = require('pg');
const conString = "postgres://egpfdyzm:T39wuuQoQ9DtnGVbxJZKx5Slob_4qGEk@hansken.db.elephantsql.com:5432/egpfdyzm";
const client = new pg.Client(conString);

const gameController = {}

gameController.saveGame = (req, res, next) => {
  if (req.body) {
    console.log("Request body = ", req.body)
    let gameScore = `INSERT INTO games (score, date) VALUES ('${req.body.score}', current_date)`;
    client.connect((err) => {

      // Save game score to database
      client.query(gameScore, (err, result) => {
        if(err) console.error('Cannot input score data', err);
        console.log('Score successfully saved', req.body.score)
        let event = req.body.questions.forEach(function(event , index) {
          let bodyObj = {};
          bodyObj.category = event.category;
          bodyObj.question = event.question;
          bodyObj.correct = event.correct;
          bodyObj.answered = event.answered;
          bodyObj.time = event.time;
          let questionData = `INSERT INTO questions (question, loggedAnswer, correctAnswer, time, category) VALUES ('${bodyObj.question}', '${bodyObj.answered}', '${bodyObj.correct}', '${bodyObj.time}', '${bodyObj.category}')`;
          client.query(questionData, (err, result) => {
            if (err) console.error ('Cannot save game data', err);
            console.log('Game data saved!', index)
          })  
        })
      })
    })
  }
}


//   if (req.body.username && req.body.password) {
//     console.log("Request body = ", req.body)
//     let register = `INSERT INTO users (username, password) VALUES ('${req.body.username}', '${req.body.password}')`
//     client.connect((err) => {
//       client.query(register, (err, result) => {
//         if(err) console.error('cannot register new user', err);
//         console.log('register success!', result)
//         client.end()
//       })
//     })
//   }
//   next()
// }

module.exports = gameController;


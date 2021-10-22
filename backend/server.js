const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const db = require("./db")

app.use(bodyParser.json())

// // create table
// db.pool.query(`CREATE TABLE lists (
//   id INTEGER AUTO_INCREMENT,
//   value TEXT,
//   PRIMARY KEY(id)
// )`, (err, results, fields) => {
//   console.log('results', results)
// })


//  get data from db
app.get('/api/values', function(req, res) {
  db.pool.query('SELECT * FROM lists;',
    (err, results, fields) => {
      if (err)
        return res.status(500).send(err)
      else
        return res.json(results)
    })
})

// insert data to db
app.post('/api/values', function(req, res, next) {
  db.pool.query(`INSERT INTO lists (value) VALUES('${req.body.value}');`,
    (err, results, fields) => {
      if (err)
        return res.status(500).send(err)
      else
        return res.json({ success: true, value: req.body.value })
    })
})


app.listen(5000, () => {
  console.log("Running on 5000 port...")
})
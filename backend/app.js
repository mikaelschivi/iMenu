const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // root handler
  res.send('hello world!')
})

app.listen(port, err => {
  if (err){
    return console.log("error:", error);
  }
  console.log(`Example app listening on port ${port}`)
})
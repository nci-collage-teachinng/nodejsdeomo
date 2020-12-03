const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World in the class of Web App Development!')
})


app.get('/test', function (req, res) {
  res.send('Hello world for Test')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

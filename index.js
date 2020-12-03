const express = require('express')
const app = express()
app.get('/remove', function (req, res) {
  res.send('Removed default only remove work!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

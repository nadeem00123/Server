const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  console.log('Hello World!' + req.ip)
  res.send('Hello World!' + req.ip)
})

//10.252.2.15:3000
//127.0.0.1:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const Request = require('request')
const url = `https://api.exchangeratesapi.io/latest`

let data;

Request.get(url, (error, response, body) => {
  if (error) {
    return console.dir(error)
  }
  data = {
    results: {
      base: JSON.parse(body).base,
      date: JSON.parse(body).date,
      rates: JSON.parse(body).rates,
    },
  }
      
})


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/rates', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

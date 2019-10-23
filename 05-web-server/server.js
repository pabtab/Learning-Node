const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const response = {
    name: 'pabtab',
    age: 26,

  };

  res.send(response);
})

app.get('/data', function (req, res) {

  res.send('Hello Data');
})

app.listen(3000, () => console.log('Listening 300'));
const express = require('express');
const app = express();
const hbs = require('hbs')

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
/* app.get('/', function (req, res) {
  const response = {
    name: 'pabtab',
    age: 26,

  };

  res.send(response);
})
 */
app.get('/', function (req, res) {

  res.render('home', {
    name: 'Pabtab',
    year: new Date().getFullYear()
  });
})

app.get('/about', function (req, res) {

  res.render('about', {
    year: new Date().getFullYear()
  });
})


app.listen(3000, () => console.log('Listening 300'));
const express = require('express');
const app = express();
const hbs = require('hbs');

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

hbs.registerHelper('getYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('capitalize', (text) => {
  let word = text.split(' ')
  word.forEach((element, i) => {
    word[i] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
  });
  return word.join(' ')
})
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
    name: 'pabtab pablo',
  });
})

app.get('/about', function (req, res) {

  res.render('about');
})


app.listen(PORT, () => console.log(`Listening ${PORT}`));
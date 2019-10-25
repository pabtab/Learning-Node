const express = require('express');
const User = require('../models/user')

const app = express()

app.get('/user', function (req, res) {
  res.json('Hello World')
})

app.post('/user', function (req, res) {
  const body = req.body;
  const {name, email, img, password, role, state, google} = body;
  

  const user = new User({
    name,
    img,
    email,
    password,
    role,
    state,
    google
  })

  user.save((err, userDB) => {
    if (err) return res.status(400).json({
      err,
      ok: false
    })

    res.json({
      user: userDB,
      ok: true
    })
  })

  if (!name) {
    res.status(400).json({
      ok: false,
      message: 'Name required'
    })
  }
})

app.put('/user/:id', function (req, res) {
  const id = req.params.id;

  res.json({ id })
})

app.delete('/user', function (req, res) {
  res.json('delete')
})

module.exports = app
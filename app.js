require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').Server(app);

// set up view engine
app.set('view engine', 'ejs');

// endpoints
app.get('/logout_redirect_uri', (req, res) => {
  res.render('logout');
});

app.get('/todos', (req, res) => {
  res.render('todos');
});

app.get('/users/', (req, res) => {
  res.render('users');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/', (req, res) => {
  res.render('home');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  if (err) {
    res.status(500).send({ Error: err.stack });
  }
});

// Start server
server.listen(process.env.PORT, () => {
  console.log(`-----------------------\nServer started successfully!, Open this URL ${process.env.BASE_URL}\n-----------------------`);
});

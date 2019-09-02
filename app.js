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

app.get('/flights/', (req, res) => {
  res.render('flights');
});

app.get('/settings/', (req, res) => {
  res.render('settings');
});

app.get('/payments/', (req, res) => {
  res.render('payments');
});

app.get('/home/', (req, res) => {
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

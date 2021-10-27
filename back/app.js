const express = require('express');
const session = require('express-session');
const cookie = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(session({
  resave: true,
  saveUninitialized: false,
  secret:process.env.SECRET,
}));
app.use(cookie(process.env.SECRET));

app.get('/', (req, res, next) => {
  res.send('server succesful')
});

app.listen(8080, ()=> {
  console.log('start server')
});
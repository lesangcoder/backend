const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 1235;
const hostname = process.env.HOST_NAME;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World! Le Thanh Sang')
});

app.get('/abc', (req, res) => {
  res.send('Trang ABC')
});

app.get('/test', (req, res) => {
  res.render('sample.ejs')
});

app.listen(port, hostname,() => {
  console.log(`Example app listening on port ${port}`)
})
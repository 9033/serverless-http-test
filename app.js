const express = require('express');
// const router = express.Router();
const app = express();

app.use('/callback/redis', require('./routes/index.js'));

app.get('/callback/*', async (req, res, next)=>{
  res.send('ha');
  res.end()
});

app.use(async (req, res, next)=>{
  res.send('hello world'+`${Date.now()}`);
  res.end()
});

module.exports = app;
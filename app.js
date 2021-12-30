const express = require('express');
// const router = express.Router();
const app = express();

app.use(require('./routes'));


module.exports = app;
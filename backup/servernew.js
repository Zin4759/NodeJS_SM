var express = require('express');
const app = express();

const login = require('./router/login');
const register = require('./router/register');

app.use('/api/login', login);
app.use('/api/register', register);

app.get('/', (req, res) => {
  console.log("Server is run");
});

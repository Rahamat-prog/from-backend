// server.js
const express = require('express');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`<form method="POST" action="/submit">
    <input type="text" name="username" placeholder="Enter your name"><br>
    <input type="email" name="email" placeholder="Enter your email"><br>
    <input type="submit" value="Submit">
  </form>`);
});

app.post('/submit', (req, res) => {
  const { username, email } = req.body;
  res.send(`Thanks, ${username}! We received your email: ${email}`);
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// ✅ Replace with your MongoDB URI
mongoose.connect('mongodb+srv://Rahamat99:Rahamat%40%242022@testcluster.z3k00v7.mongodb.net/')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// 📦 Create a schema (structure of the data)
const formSchema = new mongoose.Schema({
  username: String,
  email: String
});

// 🧱 Create a model from the schema
const FormData = mongoose.model('FormData', formSchema);

// 📝 Show the form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Make sure you have an HTML file here

});

// 🚀 Handle form submission
app.post('/submit', (req, res) => {
  const formData = new FormData({
    username: req.body.username,
    email: req.body.email
  });

  formData.save()
    .then(() => {
      console.log('✅ Data saved');
      res.send('Thanks! Your data has been saved to MongoDB.');
    })
    .catch(err => {
      console.error('❌ Error saving data:', err);
      res.status(400).send('Error saving data.');
    });
});

// 🌐 Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

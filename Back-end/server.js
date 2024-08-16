const express = require('express');
const cors = require('cors'); // Import cors middleware
const bodyParser = require('body-parser');
const listRoutes = require('./routes/Createlist'); // Import your routes
require('dotenv').config();
const app = express();

// Use CORS middleware
app.use(cors()); // Allows all origins

// Middleware
app.use(bodyParser.json()); // For parsing application/json

// Use routes
app.use('/api', listRoutes); // Prefix all routes with /api


app.get('/', (req, res) => {
  res.send('Server is up and running');
});

app.get('/test', (req, res) => {
  res.send('Server is up and running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ... (rest of the code remains the same)

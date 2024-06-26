require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const loginRoute = require('./routes/login');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceaccount/notification.json');
const notificationRoute=require('./routes/notificationRoute');
const scheduleNotifications=require('./notificationScheduler')
const medicalRoute=require("./routes/medicalRoute")

const app = express();




// Middleware
app.use(express.json()); // Replace bodyParser with express.json()
app.use(cors());

// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    app.listen(process.env.PORT, () => {
      console.log("Listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

// Routes
app.use('/api', loginRoute);

app.use('/api',notificationRoute);

app.use('/api',medicalRoute)



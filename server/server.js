// server.js

require('dotenv').config(); 
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const staffRoutes = require('./routes/staffRoutes');
const patientRoutes = require('./routes/patientRoutes');
const searchRoutes = require('./routes/searchRoutes');
const isAuthenticated = require('./middleware/authMiddleware'); // Import the isAuthenticated middleware
const scheduleNotifications = require('./notificationScheduler');
const vaccineRoute = require('./routes/vaccineRoutes');
const scheduleCronjob=require('./cronjob')



scheduleCronjob();

const app = express();

// Start scheduled notification

// Middleware
app.use(cors());
app.use(express.json());

// Session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true // or false, depending on your use case
}));

// Logging middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

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
app.use('/api/search', searchRoutes);
app.use('/api/patients',  patientRoutes); // Apply isAuthenticated middleware to protect this route
app.use('/api/medicalstaff',  staffRoutes); // Apply isAuthenticated middleware to protect this route
app.use('/api', authRoutes);
app.use('/api/', vaccineRoute);//vaccinestatusroute

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

module.exports = app;

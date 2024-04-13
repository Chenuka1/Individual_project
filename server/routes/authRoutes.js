
//routes/authRoutes.js
const express = require("express");
const router = express.Router();
const loginController = require("../controllers/authController");

// Route to handle user login
router.post("/login", loginController);

module.exports = router;

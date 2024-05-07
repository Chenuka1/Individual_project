// authMiddleware.js

const authMiddleware = (req, res, next) => {
    // Check if the user is authenticated
    if (req.session && req.session.user_id) {
      // If authenticated, allow the request to proceed
      next();
    } else {
      // If not authenticated, redirect to the login page
      res.redirect('/login');
    }
  };
  
  module.exports = authMiddleware;
  
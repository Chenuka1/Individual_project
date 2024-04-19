// isAuthenticated.js

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    // Check if user session exists or if user_id cookie is present
    if (req.session.user || req.cookies.user_id) {
        // User is authenticated, proceed to the next middleware or route handler
        next();
    } else {
        // User is not authenticated, send unauthorized response
        res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = isAuthenticated;

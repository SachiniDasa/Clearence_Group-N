const isAdmin = (req, res, next) => {
    // Check if the user is an admin based on their role or any other criteria
    if (req.user && req.user.role === 'admin') {
      return next(); 
    }
    return res.status(403).json({ message: 'Access denied: Only admin users are allowed.' });
  };
  
  const isStudent = (req, res, next) => {
    // Check if the user is a student based on their email domain
    if (req.user && req.user.email.endsWith('@sci.pdn.ac.lk')) {
      return next(); 
    }
    return res.status(403).json({ message: 'Access denied: Only students with @sci.pdn.ac.lk domain are allowed.' });
  };
  
  module.exports = { isAdmin, isStudent };

  // middleware/authMiddleware.js
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

module.exports = { isAuthenticated };

  
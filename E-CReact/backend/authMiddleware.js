const jwt = require('jsonwebtoken');


const authorize = (requiredRole) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; 
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });

    
      if (decoded.role !== requiredRole) {
        return res.status(403).json({ message: 'Access Denied' });
      }

      req.user = decoded; 
      next(); 
    });
  };
};

module.exports = { authorize };

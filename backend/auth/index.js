const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access denied');
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};
module.exports = auth;
const jwt = require('jsonwebtoken');
import sequelize from '../data/sequelize';
//const sequelize = require('../data/sequelize');
const User = sequelize.import('../src/data/models/users');
const auth = require('../config').auth;


/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }
  
  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  
  // decode the token using a secret key-phrase
  return jwt.verify(token, auth.jwt.secret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }
    
    const username = decoded.username;
    
    // check if a user exists
    return User.findAll({
      where: {
        username: username
      }
    }).then(function(user){
      return user;
    }).catch(function(err){
      return res.status(401);
    });
  });
};

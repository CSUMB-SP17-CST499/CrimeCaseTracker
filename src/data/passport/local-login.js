const jwt = require('jsonwebtoken');
import sequelize from '../sequelize';
//const sequelize = require('../data/sequelize');
const User = sequelize.import('../src/data/models/users');
const PassportLocalStrategy = require('passport').Strategy;
const auth = require('../../config').auth;


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) => {
  const userData = {
    username: username.trim(),
    password: password.trim()
  };
  
  // find a user by email address
  return User.findAll({
    where: {
      username: userData.username
    }
  }).then(function(user){
    
    //Check hashed password
    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if(passwordErr) {return done(passwordErr);}
      if(!isMatch){
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';
        return done(error);
      }
      
      const payload = {
        sub: user.username
      };
      
      // create token string
      const token = jwt.sign(payload, auth.jwt.secret);
      const data = {
        name: user.username
      };
      
      return done(null, token, data);
    }) ;
    
  }).catch(function(err) {
    return done(err);
  });
});

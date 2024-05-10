

import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/User.js';


function passportConfig(passport) {

  passport.use(new LocalStrategy.Strategy({
      usernameField: 'email',
      passwordField: 'password' 
    },
    async function(email, password, done) {
      try {
      
        const user = await User.findOne({ email });

      
        if (!user || !user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect email or password' });
        }

      
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  ));


  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}

export default passportConfig;

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const UserModel = require('../models/user')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
   UserModel.findOne({ 'googleId': profile.id }, function(err, user) {
      if (err) return cb(err);
      if (user) {
        return cb(null, user);
      } else {
        // we have a new user via OAuth!
        const user = new UserModel({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        user.save(function(err, saveUser) {
          if (err) return cb(err);
          return cb(null, saveUser);
        });
      }
    });
  }
));


passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   UserModel.findById(id, function(err, user) {
      done(err, user);
    });
  });
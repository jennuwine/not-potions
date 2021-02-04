const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/', function(req, res) {
    res.redirect('/notpotions')
    })

router.get('/auth/google', passport.authenticate('google',{ scope: ['profile', 'email'] }
    ));

    router.get('/oauth2callback', passport.authenticate(
        'google',
        {
          successRedirect : '/students',
          failureRedirect : '/'
        }
      ));

       router.get('/logout', function(req, res){
   req.logout();
   res.redirect('/');
 });

module.exports = router; 
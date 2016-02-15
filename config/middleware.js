var passport = require('passport')
    , FacebookStrategy = require('passport-facebook').Strategy
    , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


var verifyHandler = function(token, tokenSecret, profile, done) {
  process.nextTick(function() {
      var flag = 0;
      var user = "";
    /*Start getting the data from the profile*/
    var err = "";
    var item = {
             provider: profile.provider,
             uid: profile.id,
             name: profile.displayName
           };
            //  console.log(profile);
           if (profile.emails && profile.emails[0] && profile.emails[0].value) {
             item.email = profile.emails[0].value;
           }
           if (profile.name && profile.name.givenName) {
             item.firstname = profile.name.givenName;
           }
           if (profile.name && profile.name.familyName) {
             item.lastname = profile.name.familyName;
           }
           var email = item.email;
           //console.log(email + 'is the mail');
           /*Checking for the email received*/
           if(!email){
             //console.log("Matlab mail nai mila");
            return done(null, false);
          }
            /*Valid email*/
            else {
              //console.log("Matlab mail mil gaya");
           SendGetRequest(email);
         }
  });// process.nextTick ends
  function SendGetRequest(email)
  {
    var http = require('http'), options = {
     host: "host address(127.0.0.1)",
     port: 1330,
     path: "/login/gplus?email="+email+"&authparam=true",
     method: "GET"
   };
   //console.log("ab toh chalo jaaaa");
   var data = "";
   var request = http.get(options, function(response){
     response.on('error', function(){
       console.log('error');
     });
     response.on('data', function(chunk){
       data += chunk;
     });
     response.on('end', function(){
       var reply = data;
       reply = JSON.parse(reply);
      //  console.log(reply);
       // Status code : 1 means users is valid and is in the database
       if(reply.status === 1){
         flag = 1;
         user = reply.user;
         //console.log(user + "is dfnfksadjfbasdkfjbs");
            return done(null,user);
       } else {
         //console.log("Nahi hai account mc");
          return done(null, false);
       }
     });
   });
  }
}

passport.serializeUser(function(user, done) {
  //console.log(user.name + "us the value");
  if(!user){
    done(null, false);
  }
  else{
    done(null, user.id);
  }
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

/**
 * Configure advanced options for the Express server inside of Sails.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#documentation
 */
module.exports.http = {

  customMiddleware: function(app) {

    passport.use(new FacebookStrategy({
      clientID: 'Your Client ID',
      clientSecret: 'Your Client Secret',
      callbackURL: "http://localhost:1337/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'photos', 'email']
    }, verifyHandler));

    passport.use(new GoogleStrategy({
      clientID: 'Your Client ID',
      clientSecret: 'Your Client Secret',
      callbackURL: 'http://localhost:1337/auth/google/callback'
    }, verifyHandler));

    app.use(passport.initialize());
    app.use(passport.session());
  }

};

module.exports.cache = {

  // The number of seconds to cache files being served from disk
  // (only works in production mode)
  maxAge: 31557600000
};

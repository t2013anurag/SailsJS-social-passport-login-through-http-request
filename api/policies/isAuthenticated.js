/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 * @author      :: Anurag Tiwari
 *
 */
 module.exports = function(req, res, next) {
    if (req.isAuthenticated() || req.session.authenticated) {
         return next();
     }
     else{
         return res.redirect('/login');
     }
 };

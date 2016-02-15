/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'index' : function(req, res){
		//Check if the user session doesn't exist, then redirect to login page
		if(!req.session.authenticated){
			res.redirect('/login');
			console.log("Please Login Again");
		} else {
			res.view('partial/dashboard/index');
		}
	}
};


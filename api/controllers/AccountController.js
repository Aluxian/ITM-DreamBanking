/**
 * AccountController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	new: function(req, res) {
    Account.create({
      currency: req.param('currency'),
      type: req.param('type'),
      owner: res.locals.user.id,
      amount: 0
    }, function(err) {
      res.redirect('/dashboard');
    });
  },

  delete: function(req, res) {
    Account.destroy({
      id: req.param('aid')
    }, function(err) {
      res.redirect('/dashboard');
    });
  }
};


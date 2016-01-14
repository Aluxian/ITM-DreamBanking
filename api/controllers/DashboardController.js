var _ = require('underscore');

/**
 * AccountController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res) {
    User.findOne({
      id: res.locals.user.id
    })
      .populate('accounts')
      .populate('transactionsSent')
      .populate('transactionsReceived')
      .exec(function(err, user) {
        user.transactions = [].concat(user.transactionsSent).concat(user.transactionsReceived)

        user.transactions = _.map(_.uniq(_.collect(user.transactions, function(transaction) {
          return JSON.stringify(transaction);
        })), function(t) {
          return JSON.parse(t);
        });

        res.view({
          user: user,
          exRates: moneyfx.rates
        });
      });
  }
};


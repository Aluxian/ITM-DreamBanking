var async = require('async');

/**
 * TransactionController
 *
 * @description :: Server-side logic for managing transactions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	send: function(req, res) {
    var fromAccountId = req.param('fromAccount').split(' | ')[0];
    var toAccountId = req.param('toAccount');
    var moneyAmount = parseFloat(req.param('amount'));

    async.parallel({
      oFromAccount: async.apply(Account.findOne, fromAccountId),
      oToAccount: async.apply(Account.findOne, toAccountId)
    }, function(err, result) {
      var oFromAccount = result.oFromAccount;
      var oToAccount = result.oToAccount;

      async.parallel([
        // Decrement from old account
        function(callback) {
          oFromAccount.amount -= moneyAmount;
          oFromAccount.save(callback);
        },

        // Increment into new account
        function(callback) {
          var convertedMoneyAmount = moneyfx(moneyAmount).from(oFromAccount.currency).to(oToAccount.currency);
          oToAccount.amount += convertedMoneyAmount;
          oToAccount.save(callback);
        }
      ], function(err, result) {
        Transaction.create({
          fromUser: res.locals.user.id,
          fromAccount: fromAccountId,
          toUser: oToAccount.owner,
          toAccount: oToAccount.id,
          amount: moneyAmount
        }, function(err) {
          res.redirect('/dashboard');
        });
      });
    });
  },

  delete: function(req, res) {
    Transaction.destroy({
      id: req.param('tid')
    }, function(err) {
      res.redirect('/dashboard');
    });
  }
};


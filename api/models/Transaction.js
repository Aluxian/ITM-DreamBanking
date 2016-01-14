/**
* Transaction.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    fromUser    : { model: 'user' },
    toUser      : { model: 'user' },
    fromAccount : { model: 'account' },
    toAccount   : { model: 'account' },
    amount      : { type: 'float' }
  }

};


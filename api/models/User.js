module.exports = {

  attributes: {
    username             : { type: 'string', unique: true, required: true },
    email                : { type: 'email',  unique: true, required: true },
    passports            : { collection: 'Passport', via: 'user' },
    transactionsSent     : { collection: 'Transaction', via: 'fromUser' },
    transactionsReceived : { collection: 'Transaction', via: 'toUser' },
    accounts             : { collection: 'Account', via: 'owner' },
    title                : { type: 'string', required: true },
    first_name           : { type: 'string', required: true },
    last_name            : { type: 'string', required: true },
    gender               : { type: 'string', required: true },
    date_of_birth        : { type: 'date', required: true },
    marital_status       : { type: 'string', required: true },
    phone_no             : { type: 'string', required: true },
    nationality          : { type: 'string', required: true },
    employment_status    : { type: 'string', required: true },
    address              : { type: 'string', required: true }
  }

};

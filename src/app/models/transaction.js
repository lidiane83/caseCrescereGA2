const mongoose = require('../../config/db');

const transactionSchema = mongoose.Schema(
  {
    cardNumber: {
      type: Number,
      required: true,
    },
    establishment: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const transaction = mongoose.model('transaction', transactionSchema);
module.exports = transaction;

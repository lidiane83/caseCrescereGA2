const mongoose = require('../../config/db');

const cardSchema = mongoose.Schema(
  {
    Number: { // numero do cartão
      type: String,
      required: true,
    },
    limit: {//limite do cartão
      type: Number,
      required: true,
    },
    type: {//débito, crédito,
      type: String,
      required: true,
    },
    company: { // empresa que administra a bandeira
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const card = mongoose.model('card', cardSchema);
module.exports = card;
/**
 * Cadastro de cartões para os usuários
 * 
 */
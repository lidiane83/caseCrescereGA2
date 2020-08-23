const cardModel = require('../models/card');

class cardController {
  // post - Criar Transação
  async store(req, res) {
    const card = await cardModel.create(req.body);
    return res.status(201).json({ card });
  }
  // GET - Listar todos os cartões
  async index(req, res) {
    const card = await cardModel.find();
    return res.json(card);
  }
  // Encontrar um cartão
  async show(req, res) {
    const { id } = req.params;

    const card = await cardModel.findById(id);
    return res.status(200).json({ card });
  }
}

module.exports = new cardController();

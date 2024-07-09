import ITEM_ORDEM_DE_COMPRAR from "../repositories/ITEM_ORDEM_DE_COMPRARepositorie.js";

class ITEM_ORDEM_DE_COMPRARController {
  //CREATE
  async store(req, res) {
    const ITEM_ORDEM_DE_COMPRAR = req.body;
    const row = await ITEM_ORDEM_DE_COMPRAR.create(ITEM_ORDEM_DE_COMPRAR);
    res.json(row);
  }
  //GET
  async index(req, res) {
    const row = await ITEM_ORDEM_DE_COMPRAR.findAll();
    res.json(row);
  }
  //GET por id
  async show(req, res) {
    const id = req.params.id;
    const row = await ITEM_ORDEM_DE_COMPRAR.finById(id);
    res.json(row);
  }
  //UPDATE
  async update(req, res) {
    const id = req.params.id;
    const ITEM_ORDEM_DE_COMPRAR = req.body;
    const row = await ITEM_ORDEM_DE_COMPRAR.update(ITEM_ORDEM_DE_COMPRAR, id);
    res.json(row);
  }
  //DELETE
  async delete(req, res) {
    const id = req.params.id;
    const row = await ITEM_ORDEM_DE_COMPRAR.delete(id);
    res.json(row);
  }
}

export default new ITEM_ORDEM_DE_COMPRARController();

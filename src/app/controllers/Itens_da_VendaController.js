import Itens_da_Venda from "../repositories/Itens_da_VendaRepositorie.js";

class Itens_da_VendaController {
  //CREATE
  async store(req, res) {
    const Itens_da_Venda = req.body;
    const row = await Itens_da_Venda.create(Itens_da_Venda);
    res.json(row);
  }
  //GET
  async index(req, res) {
    const row = await Itens_da_Venda.findAll();
    res.json(row);
  }
  //GET por id
  async show(req, res) {
    const id = req.params.id;
    const row = await Itens_da_Venda.finById(id);
    res.json(row);
  }
  //UPDATE
  async update(req, res) {
    const id = req.params.id;
    const Itens_da_Venda = req.body;
    const row = await Itens_da_Venda.update(Itens_da_Venda, id);
    res.json(row);
  }
  //DELETE
  async delete(req, res) {
    const id = req.params.id;
    const row = await Itens_da_Venda.delete(id);
    res.json(row);
  }
}

export default new Itens_da_VendaController();

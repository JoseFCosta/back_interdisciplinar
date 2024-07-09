import EscrituraFiscal from "../repositories/EscrituraFiscalRepositorie.js";

class EscrituraFiscalController {
  //CREATE
  async store(req, res) {
    const EscrituraFiscal = req.body;
    const row = await EscrituraFiscal.create(EscrituraFiscal);
    res.json(row);
  }
  //GET
  async index(req, res) {
    const row = await EscrituraFiscal.findAll();
    res.json(row);
  }
  //GET por id
  async show(req, res) {
    const id = req.params.id;
    const row = await EscrituraFiscal.finById(id);
    res.json(row);
  }
  //UPDATE
  async update(req, res) {
    const id = req.params.id;
    const EscrituraFiscal = req.body;
    const row = await EscrituraFiscal.update(EscrituraFiscal, id);
    res.json(row);
  }
  //DELETE
  async delete(req, res) {
    const id = req.params.id;
    const row = await EscrituraFiscal.delete(id);
    res.json(row);
  }
}

export default new EscrituraFiscalController();

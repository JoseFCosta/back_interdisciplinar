import MovimentoContabil from "../repositories/MovimentoContabilRepositorie.js";

class MovimentoContabilController {
  //CREATE
  async store(req, res) {
    const MovimentoContabil = req.body;
    const row = await MovimentoContabil.create(MovimentoContabil);
    res.json(row);
  }
  //GET
  async index(req, res) {
    const row = await MovimentoContabil.findAll();
    res.json(row);
  }
  //GET por id
  async show(req, res) {
    const id = req.params.id;
    const row = await MovimentoContabil.finById(id);
    res.json(row);
  }
  //UPDATE
  async update(req, res) {
    const id = req.params.id;
    const MovimentoContabil = req.body;
    const row = await MovimentoContabil.update(MovimentoContabil, id);
    res.json(row);
  }
  //DELETE
  async delete(req, res) {
    const id = req.params.id;
    const row = await MovimentoContabil.delete(id);
    res.json(row);
  }
}

export default new MovimentoContabilController();

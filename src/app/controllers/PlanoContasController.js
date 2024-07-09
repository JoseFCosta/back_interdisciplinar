import PlanoContasRepositorie from "../repositories/PlanoContasRepositorie.js"

class PlanoContasController {
  //CREATE
  async store(req, res) {
    const PlanoContas = req.body;
    const row = await PlanoContasRepositorie.create(PlanoContas);
    res.json(row);
  }
  //GET
  async index(req, res) {
    const row = await PlanoContasRepositorie.findAll();
    res.json(row);
  }
  //GET por id
  async show(req, res) {
    const id = req.params.id;
    const row = await PlanoContasRepositorie.finById(id);
    res.json(row);
  }
  //UPDATE
  async update(req, res) {
    const id = req.params.id;
    const PlanoContas = req.body;
    const row = await PlanoContasRepositorie.update(PlanoContas, id);
    res.json(row);
  }
  //DELETE
  async delete(req, res) {
    const id = req.params.id;
    const row = await PlanoContasRepositorie.delete(id);
    res.json(row);
  }
}

export default new PlanoContasController();

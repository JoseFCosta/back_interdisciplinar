import PessoaRespositorie from "../repositories/PessoaRespositorie.js";

class PessoaController {
  //CREATE
  async store(req, res) {
    const pessoa = req.body;
    const row = await PessoaRespositorie.create(pessoa);
    res.json(row);
  }
  //GET
  async index(req, res) {
    const row = await PessoaRespositorie.findAll();
    res.json(row);
  }
  //GET por id
  async show(req, res) {
    const id = req.params.id;
    const row = await PessoaRespositorie.finById(id);
    res.json(row);
  }
  //UPDATE
  async update(req, res) {
    const id = req.params.id;
    const pessoa = req.body;
    const row = await PessoaRespositorie.update(pessoa, id);
    res.json(row);
  }
  //DELETE
  async delete(req, res) {
    const id = req.params.id;
    const row = await PessoaRespositorie.delete(id);
    res.json(row);
  }
}

export default new PessoaController();

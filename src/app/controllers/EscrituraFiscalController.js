import EscrituraFiscalRepositorie from "../repositories/EscrituraFiscalRepositorie.js";

class EscrituraFiscalController {
  // CREATE
  async store(req, res) {
    try {
      const escrituraFiscal = req.body;
      const newRow = await EscrituraFiscalRepositorie.create(escrituraFiscal);
      res.json(newRow);
    } catch (error) {
      console.error('Erro ao criar escritura fiscal:', error);
      res.status(500).json({ error: 'Erro interno ao criar escritura fiscal.' });
    }
  }

  // READ ALL
  async index(req, res) {
    try {
      const rows = await EscrituraFiscalRepositorie.findAll();
      res.json(rows);
    } catch (error) {
      console.error('Erro ao buscar escrituras fiscais:', error);
      res.status(500).json({ error: 'Erro interno ao buscar escrituras fiscais.' });
    }
  }

  // READ BY ID
  async show(req, res) {
    try {
      const id = req.params.id;
      const row = await EscrituraFiscalRepositorie.findById(id);
      if (!row) {
        return res.status(404).json({ error: 'Escritura fiscal não encontrada.' });
      }
      res.json(row);
    } catch (error) {
      console.error('Erro ao buscar escritura fiscal por ID:', error);
      res.status(500).json({ error: 'Erro interno ao buscar escritura fiscal por ID.' });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const id = req.params.id;
      const escrituraFiscal = req.body;
      const updatedRow = await EscrituraFiscalRepositorie.update(escrituraFiscal, id);
      if (!updatedRow) {
        return res.status(404).json({ error: 'Escritura fiscal não encontrada para atualização.' });
      }
      res.json(updatedRow);
    } catch (error) {
      console.error('Erro ao atualizar escritura fiscal:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar escritura fiscal.' });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedRow = await EscrituraFiscalRepositorie.delete(id);
      if (!deletedRow) {
        return res.status(404).json({ error: 'Escritura fiscal não encontrada para exclusão.' });
      }
      res.json({ message: 'Escritura fiscal excluída com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir escritura fiscal:', error);
      res.status(500).json({ error: 'Erro interno ao excluir escritura fiscal.' });
    }
  }
}

export default new EscrituraFiscalController();

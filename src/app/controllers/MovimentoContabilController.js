import MovimentoContabilRepositorie from "../repositories/MovimentoContabilRepositorie.js";

class MovimentoContabilController {
  // CREATE
  async store(req, res) {
    try {
      const movimentoContabil = req.body;
      const newRow = await MovimentoContabilRepositorie.create(movimentoContabil);
      res.json(newRow);
    } catch (error) {
      console.error('Erro ao criar movimento contábil:', error);
      res.status(500).json({ error: 'Erro interno ao criar movimento contábil.' });
    }
  }

  // READ ALL
  async index(req, res) {
    try {
      const rows = await MovimentoContabilRepositorie.findAll();
      res.json(rows);
    } catch (error) {
      console.error('Erro ao buscar movimentos contábeis:', error);
      res.status(500).json({ error: 'Erro interno ao buscar movimentos contábeis.' });
    }
  }

  // READ BY ID
  async show(req, res) {
    try {
      const id = req.params.id;
      const row = await MovimentoContabilRepositorie.findById(id);
      if (!row) {
        return res.status(404).json({ error: 'Movimento contábil não encontrado.' });
      }
      res.json(row);
    } catch (error) {
      console.error('Erro ao buscar movimento contábil por ID:', error);
      res.status(500).json({ error: 'Erro interno ao buscar movimento contábil por ID.' });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const id = req.params.id;
      const movimentoContabil = req.body;
      const updatedRow = await MovimentoContabilRepositorie.update(movimentoContabil, id);
      if (!updatedRow) {
        return res.status(404).json({ error: 'Movimento contábil não encontrado para atualização.' });
      }
      res.json(updatedRow);
    } catch (error) {
      console.error('Erro ao atualizar movimento contábil:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar movimento contábil.' });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedRow = await MovimentoContabilRepositorie.delete(id);
      if (!deletedRow) {
        return res.status(404).json({ error: 'Movimento contábil não encontrado para exclusão.' });
      }
      res.json({ message: 'Movimento contábil excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir movimento contábil:', error);
      res.status(500).json({ error: 'Erro interno ao excluir movimento contábil.' });
    }
  }
}

export default new MovimentoContabilController();

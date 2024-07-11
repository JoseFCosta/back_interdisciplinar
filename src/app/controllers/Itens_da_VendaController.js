import Itens_da_VendaRepositorie from "../repositories/Itens_da_VendaRepositorie.js";

class Itens_da_VendaController {
  // CREATE
  async store(req, res) {
    try {
      const itensDaVenda = req.body;
      const newRow = await Itens_da_VendaRepositorie.create(itensDaVenda);
      res.json(newRow);
    } catch (error) {
      console.error('Erro ao criar item da venda:', error);
      res.status(500).json({ error: 'Erro interno ao criar item da venda.' });
    }
  }

  // READ ALL
  async index(req, res) {
    try {
      const rows = await Itens_da_VendaRepositorie.findAll();
      res.json(rows);
    } catch (error) {
      console.error('Erro ao buscar itens da venda:', error);
      res.status(500).json({ error: 'Erro interno ao buscar itens da venda.' });
    }
  }

  // READ BY ID
  async show(req, res) {
    try {
      const id = req.params.id;
      const row = await Itens_da_VendaRepositorie.findById(id);
      if (!row) {
        return res.status(404).json({ error: 'Item da venda não encontrado.' });
      }
      res.json(row);
    } catch (error) {
      console.error('Erro ao buscar item da venda por ID:', error);
      res.status(500).json({ error: 'Erro interno ao buscar item da venda por ID.' });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const id = req.params.id;
      const itensDaVenda = req.body;
      const updatedRow = await Itens_da_VendaRepositorie.update(itensDaVenda, id);
      if (!updatedRow) {
        return res.status(404).json({ error: 'Item da venda não encontrado para atualização.' });
      }
      res.json(updatedRow);
    } catch (error) {
      console.error('Erro ao atualizar item da venda:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar item da venda.' });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedRow = await Itens_da_VendaRepositorie.delete(id);
      if (!deletedRow) {
        return res.status(404).json({ error: 'Item da venda não encontrado para exclusão.' });
      }
      res.json({ message: 'Item da venda excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir item da venda:', error);
      res.status(500).json({ error: 'Erro interno ao excluir item da venda.' });
    }
  }
}

export default new Itens_da_VendaController();

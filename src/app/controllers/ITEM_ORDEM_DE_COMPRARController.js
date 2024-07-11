import ITEM_ORDEM_DE_COMPRARepositorie from "../repositories/ITEM_ORDEM_DE_COMPRARepositorie.js";

class ITEM_ORDEM_DE_COMPRARController {
  // CREATE
  async store(req, res) {
    try {
      const itemOrdemCompra = req.body;
      const newRow = await ITEM_ORDEM_DE_COMPRARepositorie.create(itemOrdemCompra);
      res.json(newRow);
    } catch (error) {
      console.error('Erro ao criar item da ordem de compra:', error);
      res.status(500).json({ error: 'Erro interno ao criar item da ordem de compra.' });
    }
  }

  // READ ALL
  async index(req, res) {
    try {
      const rows = await ITEM_ORDEM_DE_COMPRARepositorie.findAll();
      res.json(rows);
    } catch (error) {
      console.error('Erro ao buscar itens da ordem de compra:', error);
      res.status(500).json({ error: 'Erro interno ao buscar itens da ordem de compra.' });
    }
  }

  // READ BY ID
  async show(req, res) {
    try {
      const id = req.params.id;
      const row = await ITEM_ORDEM_DE_COMPRARepositorie.findById(id);
      if (!row) {
        return res.status(404).json({ error: 'Item da ordem de compra não encontrado.' });
      }
      res.json(row);
    } catch (error) {
      console.error('Erro ao buscar item da ordem de compra por ID:', error);
      res.status(500).json({ error: 'Erro interno ao buscar item da ordem de compra por ID.' });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const id = req.params.id;
      const itemOrdemCompra = req.body;
      const updatedRow = await ITEM_ORDEM_DE_COMPRARepositorie.update(itemOrdemCompra, id);
      if (!updatedRow) {
        return res.status(404).json({ error: 'Item da ordem de compra não encontrado para atualização.' });
      }
      res.json(updatedRow);
    } catch (error) {
      console.error('Erro ao atualizar item da ordem de compra:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar item da ordem de compra.' });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedRow = await ITEM_ORDEM_DE_COMPRARepositorie.delete(id);
      if (!deletedRow) {
        return res.status(404).json({ error: 'Item da ordem de compra não encontrado para exclusão.' });
      }
      res.json({ message: 'Item da ordem de compra excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir item da ordem de compra:', error);
      res.status(500).json({ error: 'Erro interno ao excluir item da ordem de compra.' });
    }
  }
}

export default new ITEM_ORDEM_DE_COMPRARController();

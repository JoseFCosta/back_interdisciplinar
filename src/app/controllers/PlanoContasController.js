// PlanoContasController.js

import PlanoContasRepositorie from "../repositories/PlanoContasRepositorie.js";

class PlanoContasController {
  // CREATE
  async store(req, res) {
    try {
      const { CodigoPlano, Descricao, Tipo } = req.body;
      const newPlanoContas = await PlanoContasRepositorie.create({
        CodigoPlano,
        Descricao,
        Tipo,
      });
      res.json(newPlanoContas);
    } catch (error) {
      console.error('Erro ao criar plano de contas:', error);
      res.status(500).json({ error: 'Erro interno ao criar plano de contas.' });
    }
  }

  // READ ALL
  async index(req, res) {
    try {
      const planosContas = await PlanoContasRepositorie.findAll();
      res.json(planosContas);
    } catch (error) {
      console.error('Erro ao buscar planos de contas:', error);
      res.status(500).json({ error: 'Erro interno ao buscar planos de contas.' });
    }
  }

  // READ BY ID
  async show(req, res) {
    try {
      const id = req.params.id;
      const planoContas = await PlanoContasRepositorie.findById(id);
      if (!planoContas) {
        return res.status(404).json({ error: 'Plano de contas não encontrado.' });
      }
      res.json(planoContas);
    } catch (error) {
      console.error('Erro ao buscar plano de contas por ID:', error);
      res.status(500).json({ error: 'Erro interno ao buscar plano de contas por ID.' });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const id = req.params.id;
      const { CodigoPlano, Descricao, Tipo } = req.body;
      const updatedPlanoContas = await PlanoContasRepositorie.update({
        CodigoPlano,
        Descricao,
        Tipo,
      }, id);
      if (!updatedPlanoContas) {
        return res.status(404).json({ error: 'Plano de contas não encontrado para atualização.' });
      }
      res.json(updatedPlanoContas);
    } catch (error) {
      console.error('Erro ao atualizar plano de contas:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar plano de contas.' });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedPlanoContas = await PlanoContasRepositorie.delete(id);
      if (!deletedPlanoContas) {
        return res.status(404).json({ error: 'Plano de contas não encontrado para exclusão.' });
      }
      res.json({ message: 'Plano de contas excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir plano de contas:', error);
      res.status(500).json({ error: 'Erro interno ao excluir plano de contas.' });
    }
  }
}

export default new PlanoContasController();

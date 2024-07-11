// PlanoContasRepositorie.js
import PlanoContas from "../../models/planoContas.js";

const PlanoContasRepositorie = {
  async create(data) {
    try {
      return await PlanoContas.create(data);
    } catch (error) {
      throw new Error(`Erro ao criar plano de contas no repositório: ${error.message}`);
    }
  },

  async findAll() {
    try {
      return await PlanoContas.findAll();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os planos de contas no repositório: ${error.message}`);
    }
  },

  async findById(id) {
    try {
      return await PlanoContas.findByPk(id);
    } catch (error) {
      throw new Error(`Erro ao buscar plano de contas por ID no repositório: ${error.message}`);
    }
  },

  async update(data, id) {
    try {
      const planoContas = await PlanoContas.findByPk(id);
      if (!planoContas) return null;
      await planoContas.update(data);
      return planoContas;
    } catch (error) {
      throw new Error(`Erro ao atualizar plano de contas no repositório: ${error.message}`);
    }
  },

  async delete(id) {
    try {
      const planoContas = await PlanoContas.findByPk(id);
      if (!planoContas) return null;
      await planoContas.destroy();
      return planoContas;
    } catch (error) {
      throw new Error(`Erro ao excluir plano de contas no repositório: ${error.message}`);
    }
  },
};

export default PlanoContasRepositorie;

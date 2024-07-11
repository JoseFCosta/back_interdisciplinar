import { consulta } from "../database/conexao.js";
import MovimentoContabil from "../../models/MovimentoContabil.js";

const MovimentoContabilRepositorie = {
  async create(data) {
    try {
      return await MovimentoContabil.create(data);
    } catch (error) {
      throw new Error(`Erro ao criar movimento contábil no repositório: ${error.message}`);
    }
  },

  async findAll() {
    try {
      return await MovimentoContabil.findAll();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os movimentos contábeis no repositório: ${error.message}`);
    }
  },

  async findById(id) {
    try {
      return await MovimentoContabil.findByPk(id);
    } catch (error) {
      throw new Error(`Erro ao buscar movimento contábil por ID no repositório: ${error.message}`);
    }
  },

  async update(data, id) {
    try {
      const movimento = await MovimentoContabil.findByPk(id);
      if (!movimento) return null;
      await movimento.update(data);
      return movimento;
    } catch (error) {
      throw new Error(`Erro ao atualizar movimento contábil no repositório: ${error.message}`);
    }
  },

  async delete(id) {
    try {
      const movimento = await MovimentoContabil.findByPk(id);
      if (!movimento) return null;
      await movimento.destroy();
      return movimento;
    } catch (error) {
      throw new Error(`Erro ao excluir movimento contábil no repositório: ${error.message}`);
    }
  },
};

export default MovimentoContabilRepositorie;

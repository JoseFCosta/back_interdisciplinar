import EscrituraFiscal from "../../models/EscrituraFiscal.js";

const EscrituraFiscalRepositorie = {
  async create(data) {
    try {
      return await EscrituraFiscal.create(data);
    } catch (error) {
      throw new Error(`Erro ao criar escritura fiscal no repositório: ${error.message}`);
    }
  },

  async findAll() {
    try {
      return await EscrituraFiscal.findAll();
    } catch (error) {
      throw new Error(`Erro ao buscar todas as escrituras fiscais no repositório: ${error.message}`);
    }
  },

  async findById(id) {
    try {
      return await EscrituraFiscal.findByPk(id);
    } catch (error) {
      throw new Error(`Erro ao buscar escritura fiscal por ID no repositório: ${error.message}`);
    }
  },

  async update(data, id) {
    try {
      const escrituraFiscal = await EscrituraFiscal.findByPk(id);
      if (!escrituraFiscal) return null;
      await escrituraFiscal.update(data);
      return escrituraFiscal;
    } catch (error) {
      throw new Error(`Erro ao atualizar escritura fiscal no repositório: ${error.message}`);
    }
  },

  async delete(id) {
    try {
      const escrituraFiscal = await EscrituraFiscal.findByPk(id);
      if (!escrituraFiscal) return null;
      await escrituraFiscal.destroy();
      return escrituraFiscal;
    } catch (error) {
      throw new Error(`Erro ao excluir escritura fiscal no repositório: ${error.message}`);
    }
  },
};

export default EscrituraFiscalRepositorie;

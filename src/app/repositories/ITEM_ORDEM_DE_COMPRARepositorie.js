
import ITEM_ORDEM_DE_COMPRA from "../../models/itemOrdemDeCompra.js";

const ITEM_ORDEM_DE_COMPRARepositorie = {
  async create(data) {
    try {
      return await ITEM_ORDEM_DE_COMPRA.create(data);
    } catch (error) {
      throw new Error(`Erro ao criar item de ordem de compra no repositório: ${error.message}`);
    }
  },

  async findAll() {
    try {
      return await ITEM_ORDEM_DE_COMPRA.findAll();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os itens de ordem de compra no repositório: ${error.message}`);
    }
  },

  async findById(id) {
    try {
      return await ITEM_ORDEM_DE_COMPRA.findByPk(id);
    } catch (error) {
      throw new Error(`Erro ao buscar item de ordem de compra por ID no repositório: ${error.message}`);
    }
  },

  async update(data, id) {
    try {
      const item = await ITEM_ORDEM_DE_COMPRA.findByPk(id);
      if (!item) return null;
      await item.update(data);
      return item;
    } catch (error) {
      throw new Error(`Erro ao atualizar item de ordem de compra no repositório: ${error.message}`);
    }
  },

  async delete(id) {
    try {
      const item = await ITEM_ORDEM_DE_COMPRA.findByPk(id);
      if (!item) return null;
      await item.destroy();
      return item;
    } catch (error) {
      throw new Error(`Erro ao excluir item de ordem de compra no repositório: ${error.message}`);
    }
  },
};

export default ITEM_ORDEM_DE_COMPRARepositorie;

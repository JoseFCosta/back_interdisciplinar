import Itens_da_Venda from "../../models/itensDaVenda.js";

const Itens_da_VendaRepositorie = {
  async create(data) {
    try {
      return await Itens_da_Venda.create(data);
    } catch (error) {
      throw new Error(`Erro ao criar item da venda no repositório: ${error.message}`);
    }
  },

  async findAll() {
    try {
      return await Itens_da_Venda.findAll();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os itens da venda no repositório: ${error.message}`);
    }
  },

  async findById(id) {
    try {
      return await Itens_da_Venda.findByPk(id);
    } catch (error) {
      throw new Error(`Erro ao buscar item da venda por ID no repositório: ${error.message}`);
    }
  },

  async update(data, id) {
    try {
      const item = await Itens_da_Venda.findByPk(id);
      if (!item) return null;
      await item.update(data);
      return item;
    } catch (error) {
      throw new Error(`Erro ao atualizar item da venda no repositório: ${error.message}`);
    }
  },

  async delete(id) {
    try {
      const item = await Itens_da_Venda.findByPk(id);
      if (!item) return null;
      await item.destroy();
      return item;
    } catch (error) {
      throw new Error(`Erro ao excluir item da venda no repositório: ${error.message}`);
    }
  },
};

export default Itens_da_VendaRepositorie;

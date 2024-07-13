// repositories/UserRepository.js

import User from "../../models/user.js";
import bcrypt from "bcrypt";

const UserRepositorie = {
  async create(data) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;
      return await User.create(data);
    } catch (error) {
      throw new Error(`Erro ao criar usuário no repositório: ${error.message}`);
    }
  },

  async findAll() {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error(
        `Erro ao buscar todos os usuários no repositório: ${error.message}`
      );
    }
  },

  async findById(id) {
    try {
      return await User.findByPk(id);
    } catch (error) {
      throw new Error(
        `Erro ao buscar usuário por ID no repositório: ${error.message}`
      );
    }
  },

  async update(data, id) {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;
      if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
      }
      await user.update(data);
      return user;
    } catch (error) {
      throw new Error(
        `Erro ao atualizar usuário no repositório: ${error.message}`
      );
    }
  },

  async delete(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;
      await user.destroy();
      return user;
    } catch (error) {
      throw new Error(
        `Erro ao excluir usuário no repositório: ${error.message}`
      );
    }
  },
};

export default UserRepositorie;

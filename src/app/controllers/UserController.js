
import UserRepository from '../repositories/UserRepositorie.js';
import User from '../../models/user.js'
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";


class UserController {
  // CREATE
  async store(req, res) {
    try {
      const { username, email, password } = req.body;
      const newUser = await UserRepository.create({ username, email, password });
      res.json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao criar usuário.' });
    }
  }

  // READ ALL
  async index(req, res) {
    try {
      const users = await UserRepository.findAll();
      res.json(users);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      res.status(500).json({ error: 'Erro interno ao buscar usuários.' });
    }
  }

  // READ BY ID
  async show(req, res) {
    try {
      const id = req.params.id;
      const user = await UserRepository.findById(id);
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      res.json(user);
    } catch (error) {
      console.error('Erro ao buscar usuário por ID:', error);
      res.status(500).json({ error: 'Erro interno ao buscar usuário por ID.' });
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const id = req.params.id;
      const { username, email, password } = req.body;
      const updatedUser = await UserRepository.update({ username, email, password }, id);
      if (!updatedUser) {
        return res.status(404).json({ error: 'Usuário não encontrado para atualização.' });
      }
      res.json(updatedUser);
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ error: 'Erro interno ao atualizar usuário.' });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedUser = await UserRepository.delete(id);
      if (!deletedUser) {
        return res.status(404).json({ error: 'Usuário não encontrado para exclusão.' });
      }
      res.json({ message: 'Usuário excluído com sucesso.' });
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      res.status(500).json({ error: 'Erro interno ao excluir usuário.' });
    }
  }

  // LOGIN
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: 'Email ou senha inválidos.' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Email ou senha inválidos.' });
      }
      const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      res.status(500).json({ error: 'Erro interno ao fazer login.' });
    }
  }
}

export default new UserController();

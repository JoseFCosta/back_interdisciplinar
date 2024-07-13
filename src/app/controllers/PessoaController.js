import PessoaRespositorie from "../repositories/PessoaRespositorie.js";
class PessoaController {
  //CREATE
  async store(req, res) {
    const pessoa = req.body;
    const row = await PessoaRespositorie.create(pessoa);
    res.json(row);
  }
  //GET
  async index(req, res) {
    const row = await PessoaRespositorie.findAll();
    res.json(row);
  }
  //GET por id
  async show(req, res) {
    const id = req.params.id;
    const row = await PessoaRespositorie.finById(id);
    res.json(row);
  }
  //UPDATE
  async update(req, res) {
    const id = req.params.id;
    const pessoa = req.body;
    const row = await PessoaRespositorie.update(pessoa, id);
    res.json(row);
  }
 // DELETE
async delete(req, res) {
  try {
    const id = req.params.id;
    // Validação do ID
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido para exclusão do plano de contas.' });
    }

    // Verifica se o plano de contas está sendo utilizado na tabela de movimento contábil
    const movimentoContabilCount = await MovimentoContabil.count({
      where: {
        idPlanoContas: id
      }
    });

    if (movimentoContabilCount > 0) {
      return res.status(400).json({ error: 'Não é possível excluir o plano de contas porque ele está sendo utilizado em movimentações contábeis.' });
    }

    // Se não houver movimentação contábil vinculada, prossegue com a exclusão
    const deletedRow = await PlanoContasRepositorie.delete(id);
    if (!deletedRow) {
      return res.status(404).json({ error: 'Plano de contas não encontrado para exclusão.' });
    }

    res.json({ message: 'Plano de contas excluído com sucesso.' });
  } catch (error) {
    console.error('Erro ao excluir plano de contas:', error);
    res.status(500).json({ error: 'Erro interno ao excluir plano de contas.' });
  }
}



}

export default new PessoaController();

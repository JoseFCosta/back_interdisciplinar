import { consulta } from "../database/conexao.js";

class PessoaRepositorie {
    
  create(pessoa) {
    const sql = "INSERT INTO bd.pessoas SET ?;";
    return consulta(sql, pessoa, "Não foi possivel cadastrar");
  }

  findAll() {
    const sql = "SELECT * FROM bd.pessoas;";
    return consulta(sql, "Não foi possivel cadastrar");
  }

  finById(id) {
    const sql = "SELECT * FROM bd.pessoas WHERE idpessoas=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
  update(pessoa, id) {
    const sql = "UPDATE bd.pessoas SET ? WHERE idpessoas=?;";
    return consulta(sql, [pessoa,id], "Não foi possivel cadastrar");
  }
  delete(id) {
    const sql = "DELETE FROM bd.pessoas WHERE idpessoas=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
}

export default new PessoaRepositorie();

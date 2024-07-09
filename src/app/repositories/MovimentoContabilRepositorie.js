import { consulta } from "../database/conexao.js";

class MovimentoContabilRepositorie {
    
  create(pessoa) {
    const sql = "INSERT INTO contabil.co_MovimentoContabil SET ?;";
    return consulta(sql, pessoa, "Não foi possivel cadastrar");
  }

  findAll() {
    const sql = "SELECT * FROM contabil.co_MovimentoContabil;";
    return consulta(sql, "Não foi possivel cadastrar");
  }

  finById(id) {
    const sql = "SELECT * FROM contabil.co_MovimentoContabil WHERE idMovimentoContabil=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
  update(pessoa, id) {
    const sql = "UPDATE contabil.co_MovimentoContabil SET ? WHERE idMovimentoContabil=?;";
    return consulta(sql, [pessoa,id], "Não foi possivel cadastrar");
  }
  delete(id) {
    const sql = "DELETE FROM contabil.co_MovimentoContabil WHERE idMovimentoContabil=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
}

export default new MovimentoContabilRepositorie();

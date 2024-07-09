import { consulta } from "../database/conexao.js";

class PlanoContasRepositorie {
    
  create(PlanoContas) {
    const sql = "INSERT INTO contabil.co_PlanoContas SET ?;";
    return consulta(sql, PlanoContas, "Não foi possivel cadastrar");
  }

  findAll() {
    const sql = "SELECT * FROM contabil.co_PlanoContas;";
    return consulta(sql, "Não foi possivel cadastrar");
  }

  finById(id) {
    const sql = "SELECT * FROM contabil.co_PlanoContas WHERE idPlanoContas=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
  update(PlanoContas, id) {
    const sql = "UPDATE contabil.co_PlanoContas SET ? WHERE idPlanoContas=?;";
    return consulta(sql, [PlanoContas,id], "Não foi possivel cadastrar");
  }
  delete(id) {
    const sql = "DELETE FROM contabil.co_PlanoContas WHERE idPlanoContas=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
}

export default new PlanoContasRepositorie();

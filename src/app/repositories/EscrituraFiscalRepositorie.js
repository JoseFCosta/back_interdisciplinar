import { consulta } from "../database/conexao.js";

class EscrituraFiscalRepositorie {
    
  create(pessoa) {
    const sql = "INSERT INTO contabil.co_EscrituraFiscal SET ?;";
    return consulta(sql, pessoa, "Não foi possivel cadastrar");
  }

  findAll() {
    const sql = "SELECT * FROM contabil.co_EscrituraFiscal;";
    return consulta(sql, "Não foi possivel cadastrar");
  }

  finById(id) {
    const sql = "SELECT * FROM contabil.co_EscrituraFiscal WHERE idEscrituraFiscal=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
  update(pessoa, id) {
    const sql = "UPDATE contabil.co_EscrituraFiscal SET ? WHERE idEscrituraFiscal=?;";
    return consulta(sql, [pessoa,id], "Não foi possivel cadastrar");
  }
  delete(id) {
    const sql = "DELETE FROM contabil.co_EscrituraFiscal WHERE idEscrituraFiscal=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
}

export default new EscrituraFiscalRepositorie();

import { consulta } from "../database/conexao.js";

class ITEM_ORDEM_DE_COMPRARepositorie {
    
  create(pessoa) {
    const sql = "INSERT INTO contabil.ITEM_ORDEM_DE_COMPRA SET ?;";
    return consulta(sql, pessoa, "Não foi possivel cadastrar");
  }

  findAll() {
    const sql = "SELECT * FROM contabil.ITEM_ORDEM_DE_COMPRA;";
    return consulta(sql, "Não foi possivel cadastrar");
  }

  finById(id) {
    const sql = "SELECT * FROM contabil.ITEM_ORDEM_DE_COMPRA WHERE idITEM_ORDEM_DE_COMPRA=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
  update(pessoa, id) {
    const sql = "UPDATE contabil.ITEM_ORDEM_DE_COMPRA SET ? WHERE idITEM_ORDEM_DE_COMPRA=?;";
    return consulta(sql, [pessoa,id], "Não foi possivel cadastrar");
  }
  delete(id) {
    const sql = "DELETE FROM contabil.ITEM_ORDEM_DE_COMPRA WHERE idITEM_ORDEM_DE_COMPRA=?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
}

export default new ITEM_ORDEM_DE_COMPRARepositorie();

import { consulta } from "../database/conexao.js";

class Itens_da_VendaRepositorie {
    
  create(pessoa) {
    const sql = "INSERT INTO contabil.Itens_da_Venda  SET ?;";
    return consulta(sql, pessoa, "Não foi possivel cadastrar");
  }

  findAll() {
    const sql = "SELECT * FROM contabil.Itens_da_Venda ;";
    return consulta(sql, "Não foi possivel cadastrar");
  }

  finById(id) {
    const sql = "SELECT * FROM contabil.Itens_da_Venda  WHERE idItens_da_Venda =?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
  update(pessoa, id) {
    const sql = "UPDATE contabil.Itens_da_Venda  SET ? WHERE idItens_da_Venda =?;";
    return consulta(sql, [pessoa,id], "Não foi possivel cadastrar");
  }
  delete(id) {
    const sql = "DELETE FROM contabil.Itens_da_Venda  WHERE idItens_da_Venda =?;";
    return consulta(sql, id, "Não foi possivel cadastrar");
  }
}

export default new Itens_da_VendaRepositorie();

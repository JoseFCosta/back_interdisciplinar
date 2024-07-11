console.log("Iniciando sincronização do banco de dados...");

import sequelize from "./db.js";
import PlanoContas from "./models/planoContas.js";
import EscrituraFiscal from "./models/EscrituraFiscal.js";
import ItensDaVenda from "./models/itensDaVenda.js";
import ItemOrdemDeCompra from "./models/itemOrdemDeCompra.js";
import MovimentoContabil from "./models/MovimentoContabil.js";

const models = [
  PlanoContas,
  EscrituraFiscal,
  ItensDaVenda,
  ItemOrdemDeCompra,
  MovimentoContabil,
];

const checkAndSyncModel = async (model) => {
  const tableName = model.getTableName();
  const [results] = await sequelize.query(`SHOW TABLES LIKE '${tableName}'`);
  if (results.length === 0) {
    console.log(`Criando tabela ${tableName}...`);
    await model.sync({ alter: true });
  } else {
    console.log(`Tabela ${tableName} já existe. Sincronização ignorada.\n`);
    //await model.sync({ alter: true });
  }
};

const syncDatabase = async () => {
  try {
    for (const model of models) {
      await checkAndSyncModel(model);
    }

    console.log("Banco de dados sincronizado com sucesso.");
  } catch (error) {
    console.error("Erro ao sincronizar o banco de dados:", error);
  }
};

syncDatabase();

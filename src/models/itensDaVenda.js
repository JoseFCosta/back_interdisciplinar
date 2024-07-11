import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const ItensDaVenda = sequelize.define(
  "Itens_da_Venda",
  {
    id_Vendas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    QTD_Itens: {
      type: DataTypes.INTEGER,
    },
    cod_espec: {
      type: DataTypes.STRING(250),
    },
    id_Procedimento: {
      type: DataTypes.INTEGER,
    },
    id_Profissional: {
      type: DataTypes.INTEGER,
    },
    Valor: {
      type: DataTypes.DECIMAL(10, 2),
    },
    Forma_Pagamento: {
      type: DataTypes.STRING(250),
    },
  },
  {
    timestamps: false,
  }
);

export default ItensDaVenda;

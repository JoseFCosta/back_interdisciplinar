import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const ItensDaVenda = sequelize.define(
  "Itens_da_Venda",
  {
    id_Vendas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    QTD_Itens: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cod_espec: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    id_Procedimento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_Profissional: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    Forma_Pagamento: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default ItensDaVenda;

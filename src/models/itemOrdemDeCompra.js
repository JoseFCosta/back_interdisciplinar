import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const ItemOrdemDeCompra = sequelize.define(
  "ITEM_ORDEM_DE_COMPRA",
  {
    id_item_ordem_comp: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    num_ordem_comp: {
      type: DataTypes.INTEGER,
    },
    id_produto: {
      type: DataTypes.INTEGER,
    },
    qtd_produto: {
      type: DataTypes.INTEGER,
    },
    valor: {
      type: DataTypes.REAL,
    },
    data_vencimento: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

export default ItemOrdemDeCompra;

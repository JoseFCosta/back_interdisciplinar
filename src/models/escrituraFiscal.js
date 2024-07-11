import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const EscrituraFiscal = sequelize.define(
  "Co_EscrituraFiscal",
  {
    IdEscrituraFiscal: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Descricao: {
      type: DataTypes.STRING(100),
    },
    Data: {
      type: DataTypes.DATE,
    },
    ValorFinal: {
      type: DataTypes.REAL,
    },
  },
  {
    timestamps: false,
  }
);

export default EscrituraFiscal;

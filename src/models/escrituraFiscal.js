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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    ValorFinal: {
      type: DataTypes.REAL,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default EscrituraFiscal;

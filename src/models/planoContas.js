// PlanoContas.js

import { DataTypes, Model } from "sequelize";
import sequelize from "../db.js";

class PlanoContas extends Model {}

PlanoContas.init(
  {
    idPlanoContas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
      allowNull: false,
    },
    CodigoPlano: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumericOrDot(value) {
          if (!/^[0-9.]+$/.test(value)) {
            throw new Error('O código do plano deve conter apenas números e pontos');
          }
        },
      },
    },
    Descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Tipo: {
      type: DataTypes.ENUM,
      values: ["Ativo", "Passivo", "Receita", "Despesa"],
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "PlanoContas",
    tableName: "Co_PlanoContas", 
    timestamps: false, 
  }
);

export default PlanoContas;

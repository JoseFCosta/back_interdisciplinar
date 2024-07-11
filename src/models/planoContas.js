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
    },
    CodigoPlano: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Tipo: {
      type: DataTypes.STRING,
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

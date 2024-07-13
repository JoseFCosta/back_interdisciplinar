import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const ItemOrdemDeCompra = sequelize.define(
  "ITEM_ORDEM_DE_COMPRA",
  {
    id_item_ordem_comp: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    num_ordem_comp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qtd_produto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isValidFormat(value) {
          if (!/^\d{1,3}$/.test(value.toString())) {
            throw new Error(
              "Formato inválido. Use um número de até 3 dígitos."
            );
          }
        },
      },
    },
    valor: {
      type: DataTypes.REAL,
      allowNull: false,
      validate: {
        isDecimal: true, // Certifica-se de que o valor é decimal
        hasTwoDecimalPlaces(value) {
          // Validar o formato aqui
          if (!/^\d+(\.\d{2})$/.test(value.toString())) {
            throw new Error(
              "Formato inválido. Use um valor com duas casas decimais, como '100.00'."
            );
          }
        },
      },
    },
    data_vencimento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isValidFormat(value) {
          // Validar o formato aqui
          if (!/^(\d{2}\/\d{2}\/\d{4})$/.test(value)) {
            throw new Error(
              'Formato inválido. Use o formato "02/02/2023".'
            );
          }
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

export default ItemOrdemDeCompra;

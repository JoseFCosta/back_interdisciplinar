import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import PlanoContas from "./planoContas.js";
import EscrituraFiscal from "./EscrituraFiscal.js";
import ItensDaVenda from "./itensDaVenda.js";
import ItemOrdemDeCompra from "./itemOrdemDeCompra.js";

const MovimentoContabil = sequelize.define(
  "Co_MovimentoContabil",
  {
    idMovimentoContabil: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NumeroLancamento: {
      type: DataTypes.STRING(250),
    },
    Data: {
      type: DataTypes.DATE,
    },
    idPlanoContas: {
      type: DataTypes.INTEGER,
      references: {
        model: PlanoContas,
        key: "idPlanoContas",
      },
    },
    IdEscrituraFiscal: {
      type: DataTypes.INTEGER,
      references: {
        model: EscrituraFiscal,
        key: "IdEscrituraFiscal",
      },
    },
    id_Vendas: {
      type: DataTypes.INTEGER,
      references: {
        model: ItensDaVenda,
        key: "id_Vendas",
      },
    },
    id_item_ordem_comp: {
      type: DataTypes.INTEGER,
      references: {
        model: ItemOrdemDeCompra,
        key: "id_item_ordem_comp",
      },
    },
    ValorDebito: {
      type: DataTypes.DECIMAL(10, 2),
    },
    ValorCredito: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    timestamps: false,
  }
);

export default MovimentoContabil;

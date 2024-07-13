import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import PlanoContas from "./planoContas.js";
import EscrituraFiscal from "./EscrituraFiscal.js";
import ItensDaVenda from "./itensDaVenda.js";
import ItemOrdemDeCompra from "./itemOrdemDeCompra.js";

// Função para gerar um número de lançamento único
async function generateUniqueNumeroLancamento() {
  let numero;
  let exists = true;

  const MovimentoContabil = sequelize.models.Co_MovimentoContabil;

  while (exists) {
    numero = Math.floor(Math.random() * 1000).toString();

    const count = await MovimentoContabil.count({ where: { NumeroLancamento: numero } });
    if (count === 0) {
      exists = false;
    }
  }

  return numero;
}

const MovimentoContabil = sequelize.define(
  "Co_MovimentoContabil",
  {
    idMovimentoContabil: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    NumeroLancamento: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    Data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    VerificacaoFinanceiro: {
      type: DataTypes.ENUM,
      values: ["aprovado", "negado", "indefinido"],
      allowNull: false,
    },
    VerificacaoContabil: {
      type: DataTypes.ENUM,
      values: ["aprovado", "negado", "indefinido"],
      allowNull: false,
    },
    idPlanoContas: {
      type: DataTypes.INTEGER,
      references: {
        model: PlanoContas,
        key: "idPlanoContas",
        allowNull: true,
      },
    },
    IdEscrituraFiscal: {
      type: DataTypes.INTEGER,
      references: {
        model: EscrituraFiscal,
        key: "IdEscrituraFiscal",
        allowNull: true,
      },
    },
    id_Vendas: {
      type: DataTypes.INTEGER,
      references: {
        model: ItensDaVenda,
        key: "id_Vendas",
        allowNull: true,
      },
    },
    id_item_ordem_comp: {
      type: DataTypes.INTEGER,
      references: {
        model: ItemOrdemDeCompra,
        key: "id_item_ordem_comp",
        allowNull: true,
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
    hooks: {
      beforeCreate: async (instance, options) => {
        instance.NumeroLancamento = await generateUniqueNumeroLancamento();
      },
    },
  }
);

export default MovimentoContabil;

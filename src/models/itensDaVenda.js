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
      validate: {
        isIn: {
          args: [["00", "10", "20", "30", "40", "50", "70", "80", "90"]],
          msg: "Valor inválido para cod_espec"
        }
      }
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
      validate: {
        isIn: {
          args: [["DEBITO", "CREDITO"]],
          msg: "Forma de pagamento inválida. Use 'DEBITO' ou 'CREDITO'."
        }
      }
    },
  },
  {
    timestamps: false,
    hooks: {
      afterValidate: (item, options) => {
        const especialidades = {
          "00": "Biomedicina",
          "10": "Enfermagem",
          "20": "Estética e Cosmetologia",
          "30": "Fisioterapia",
          "40": "Nutrição",
          "50": "Odontologia",
          "70": "Psicologia",
          "80": "NPJ",
          "90": "Medicina"
        };
        if (item.cod_espec in especialidades) {
          console.log(`Especialista: ${especialidades[item.cod_espec]}`);
        }
      }
    }
  }
);

export default ItensDaVenda;

import { Router } from "express";
import cors from 'cors';
//import PessoaController from "./app/controllers/PessoaController.js";
import PlanoContasController from "./app/controllers/PlanoContasController.js"
import EscrituraFiscalController from "./app/controllers/EscrituraFiscalController.js"
import Itens_da_VendaController from "./app/controllers/Itens_da_VendaController.js"
import ITEM_ORDEM_DE_COMPRARController from "./app/controllers/ITEM_ORDEM_DE_COMPRARController.js"
import MovimentoContabilController from "./app/controllers/MovimentoContabilController.js"

const router = Router();
router.use(cors());

//ENDPOINTS

/*
//POST
router.post("/cadastrar", PessoaController.store);

//GET
//Visualizar todos os valores
router.get("/visualizar", PessoaController.index);

//Procura um valor por id
router.get("/visualizar/:id", PessoaController.show);

//UPDATE
router.put("/atualizar/:id", PessoaController.update);

//DELETE
router.delete("/deletar/:id", PessoaController.delete);
*/

//PlanoContas
router.post("/PlanoContas/cadastrar", PlanoContasController.store);
router.get("/PlanoContas/visualizar", PlanoContasController.index);
router.get("/PlanoContas/visualizar/:id", PlanoContasController.show);
router.put("/PlanoContas/atualizar/:id", PlanoContasController.update);
router.delete("/PlanoContas/deletar/:id", PlanoContasController.delete);

//EscrituraFiscal
router.post("/EscrituraFiscal/cadastrar", EscrituraFiscalController.store);
router.get("/EscrituraFiscal/visualizar", EscrituraFiscalController.index);
router.get("/EscrituraFiscal/visualizar/:id", EscrituraFiscalController.show);
router.put("/EscrituraFiscal/atualizar/:id", EscrituraFiscalController.update);
router.delete("/EscrituraFiscal/deletar/:id", EscrituraFiscalController.delete);

//Itens_da_Venda
router.post("/Itens_da_Venda/cadastrar", Itens_da_VendaController.store);
router.get("/Itens_da_Venda/visualizar", Itens_da_VendaController.index);
router.get("/Itens_da_Venda/visualizar/:id", Itens_da_VendaController.show);
router.put("/Itens_da_Venda/atualizar/:id", Itens_da_VendaController.update);
router.delete("/Itens_da_Venda/deletar/:id", Itens_da_VendaController.delete);

//ITEM_ORDEM_DE_COMPRAR
router.post("/ITEM_ORDEM_DE_COMPRAR/cadastrar", ITEM_ORDEM_DE_COMPRARController.store);
router.get("/ITEM_ORDEM_DE_COMPRAR/visualizar", ITEM_ORDEM_DE_COMPRARController.index);
router.get("/ITEM_ORDEM_DE_COMPRAR/visualizar/:id", ITEM_ORDEM_DE_COMPRARController.show);
router.put("/ITEM_ORDEM_DE_COMPRAR/atualizar/:id", ITEM_ORDEM_DE_COMPRARController.update);
router.delete("/ITEM_ORDEM_DE_COMPRAR/deletar/:id", ITEM_ORDEM_DE_COMPRARController.delete);

//MovimentoContabil
router.post("/MovimentoContabil/cadastrar", MovimentoContabilController.store);
router.get("/MovimentoContabil/visualizar", MovimentoContabilController.index);
router.get("/MovimentoContabil/visualizar/:id", MovimentoContabilController.show);
router.put("/MovimentoContabil/atualizar/:id", MovimentoContabilController.update);
router.delete("/MovimentoContabil/deletar/:id", MovimentoContabilController.delete);


export default router;

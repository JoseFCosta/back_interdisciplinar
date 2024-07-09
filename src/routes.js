import { Router } from "express";
import cors from 'cors';
import PessoaController from "./app/controllers/PessoaController.js";
import PlanoContasController from "./app/controllers/PlanoContasController.js"

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

export default router;

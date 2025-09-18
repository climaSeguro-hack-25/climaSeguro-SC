import express from "express";
import climaController from "../controllers/climaController.js";

const router = express.Router();

router.get("/:cidade", climaController.obterClimaPorCidade);

export default router;

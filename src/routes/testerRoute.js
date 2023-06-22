import { Router } from "express";
import TesterController from "../controllers/testerController";

const router = Router();

router.route("/").post(TesterController.createTests);
router.route("/").get(TesterController.getTestedList);

export default router;

import { Router } from "express";
import testerRoute from "./testerRoute";

const router = Router();

router.use("/tester", testerRoute);

export default router;

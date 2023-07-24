import {Router} from "express";

import houseRouter from "./houseRouter";

const router = Router();

router.use('/houses', houseRouter);

export default router;

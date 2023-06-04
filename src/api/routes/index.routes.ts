import express from "express";
import userRouter from "./user.routes";
import productRouter from "./product.routes";
import { errorHandler } from "../middlewares/errorHandler";

const router = express.Router();

router.use(errorHandler)

router.use('/user', userRouter);
router.use('/product', productRouter);

export default router;
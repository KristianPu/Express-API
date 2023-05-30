import express from "express";
import * as product from "./product.routes";
import * as review from "./review.routes";
import * as user from "./user.routes";

const router = express.Router();

router.use('/review', review.default);
router.use('/user', user.default);
router.use('/product', product.default);

export default router;
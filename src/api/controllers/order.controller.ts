import { Types } from "mongoose";
import orderService from "../../services/order.service";
import { tryCatch } from "../../utils/try-catch"
import { Request, Response } from 'express';

const getOrderByUserId = tryCatch(async (req: Request, res: Response) => {
    const userId = new Types.ObjectId(req.params.id);
    const order = await orderService.getOrderByUserId(userId);
    res.send(order);
}); 

const createOrder = tryCatch(async (req: Request, res: Response) => {
    const newOrder = await orderService.createOrder(req.body);
    res.status(201).send(newOrder);
}); 

export default {
    getOrderByUserId,
    createOrder
}
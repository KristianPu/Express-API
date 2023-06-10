import { Types } from "mongoose";
import cartService from "../../services/cart.service";
import { tryCatch } from "../../utils/try-catch"
import { Request, Response } from 'express';

const getCartByUserId = tryCatch(async (req: Request, res: Response) => {
    const userId = new Types.ObjectId(req.params.id);
    const cart = await cartService.getCartByUserId(userId);
    res.send(cart);
}); 

const createCart = tryCatch(async (req: Request, res: Response) => {
    const newCart = await cartService.createCart(req.body);
    res.status(201).send(newCart);
}); 

const updateCart = tryCatch(async (req: Request, res: Response) => {
    const updatedCart = await cartService.updateCart(req.body);
    res.send(updatedCart);
}); 

const removeCart = tryCatch(async (req: Request, res: Response) => {
    const cartId = new Types.ObjectId(req.params.id);
    const deletedCart = await cartService.removeCart(cartId);
    res.status(204).send(deletedCart);
}); 

export default {
    getCartByUserId,
    createCart,
    updateCart,
    removeCart
}
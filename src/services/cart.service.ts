import { Types } from "mongoose";
import cartRepository from "../repositories/cart.repository";
import Cart from "../schemas/cart.schema";

const getCartByUserId = (id: Types.ObjectId) => {
    return cartRepository.findByUserId(id);
}

const createCart = (cart: Cart) => {
    return cartRepository.create(cart);
}

const updateCart = (cart: Cart) => {
    return cartRepository.update(cart);
}

const removeCart = (id: Types.ObjectId) => {
    return cartRepository.remove(id);
}

export default {
    getCartByUserId,
    createCart,
    updateCart,
    removeCart
}
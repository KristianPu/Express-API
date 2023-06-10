import Cart, { CartModel } from '../schemas/cart.schema';
import { Types } from 'mongoose';

async function findByUserId(_id: Types.ObjectId): Promise<Cart | null> {
    return CartModel.findOne({ userId: _id }).exec();
}

async function create(cart: Cart): Promise<Cart> {
    return await CartModel.create(cart);
}

async function update(cart: Cart): Promise<Cart | null> {
    return await CartModel.findByIdAndUpdate(cart._id, cart).exec();
}

async function remove(_id: Types.ObjectId): Promise<Cart | null> {
    return await CartModel.findByIdAndRemove(_id).exec();
}

export default {
    findByUserId,
    create,
    update,
    remove
}
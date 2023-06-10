import Order, { OrderModel } from '../schemas/order.schema';
import { Types } from 'mongoose';

async function findByUserId(_id: Types.ObjectId): Promise<Order | null> {
    return OrderModel.findOne({ userId: _id }).exec();
}

async function create(order: Order): Promise<Order> {
    return await OrderModel.create(order);
}

export default {
    findByUserId,
    create
}
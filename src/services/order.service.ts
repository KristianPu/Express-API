import { Types } from "mongoose";
import orderRepository from "../repositories/order.repository";
import Order from "../schemas/order.schema";

const getOrderByUserId = (id: Types.ObjectId) => {
    return orderRepository.findByUserId(id);
}

const createOrder = (order: Order) => {
    return orderRepository.create(order);
}

export default {
    getOrderByUserId,
    createOrder
}
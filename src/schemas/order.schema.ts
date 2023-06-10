import { Schema, Types, model } from "mongoose";

export default interface Order {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    products: Types.ObjectId[];
    shippingAddress: string;
    billing: string;
    orderTotal: number;
}

const schema = new Schema<Order>(
  {
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    products: [{ 
      type: Schema.Types.ObjectId,
      ref: 'ProductModel'
    }],
    shippingAddress: { 
        type: Schema.Types.String, 
        required: true 
    },
    billing: { 
        type: Schema.Types.String, 
        required: true 
    },
    orderTotal: { 
        type: Schema.Types.Number, 
        required: true 
    },
  }
);

export const OrderModel = model('Order', schema, 'order');
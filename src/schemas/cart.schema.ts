import { Schema, Types, model } from "mongoose";

export default interface Cart {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    products: Types.ObjectId[];
}

const schema = new Schema<Cart>(
  {
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    products: [{ 
      type: Schema.Types.ObjectId,
      ref: 'ProductModel'
    }],
  }
);

export const CartModel = model('Cart', schema, 'cart');
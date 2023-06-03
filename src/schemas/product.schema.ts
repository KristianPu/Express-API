import { Schema, Types, model } from "mongoose";

export default interface Product {
    _id: Types.ObjectId;
    name: string;
    description: string;
    price: number;
}

const schema = new Schema<Product>(
  {
    name: { 
      type: Schema.Types.String, 
      unique: true,
      required: true 
    },
    description: { 
      type: Schema.Types.String, 
      required: true 
    },
    price: { 
      type: Schema.Types.Number, 
      required: true 
    },
  }
);

export const ProductModel = model('Product', schema, 'products');
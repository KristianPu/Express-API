import Product, { ProductModel } from '../schemas/product.schema';
import { Types } from 'mongoose';

async function findAll(): Promise<Product[] | null> {
    return ProductModel.find().exec();
}

async function findById(_id: Types.ObjectId): Promise<Product | null> {
    return ProductModel.findOne({ _id }).exec();
}

async function create(product: Product): Promise<Product> {
    return await ProductModel.create(product);
}

async function update(product: Product): Promise<Product | null> {
    return await ProductModel.findByIdAndUpdate(product._id, product).exec();
}

async function remove(_id: Types.ObjectId): Promise<Product | null> {
    return await ProductModel.findByIdAndRemove(_id).exec();
}

export default {
    findAll,
    findById,
    create,
    update,
    remove
}
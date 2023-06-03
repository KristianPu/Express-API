import { Types } from "mongoose";
import productRepository from "../repositories/product.repository";
import Product from "../schemas/product.schema";

const getAllProducts = () => {
    return productRepository.findAll();
}

const getProductById = (id: Types.ObjectId) => {
    return productRepository.findById(id);
}

const createProduct = (product: Product) => {
    return productRepository.create(product);
}

const updateProduct = (product: Product) => {
    return productRepository.update(product);
}

const removeProduct = (id: Types.ObjectId) => {
    return productRepository.remove(id);
}

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    removeProduct
}
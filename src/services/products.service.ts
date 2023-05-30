import * as productRepository from "../repositories/product.repository";

export const getAllProducts = () => {
    return productRepository.getAllProducts();
}

export const getProductById = (id: string) => {
    return productRepository.getProductById(id);
}

export const createProduct = (name: string, price: number) => {
    return productRepository.createProduct(name, price);
}

export const updateProduct = (id: string, name: string, price: number) => {
    return productRepository.updateProduct(id, name, price);
}

export const deleteProduct = (id: string) => {
    return productRepository.deleteProduct(id);
}
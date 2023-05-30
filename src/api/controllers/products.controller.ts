import * as productService from "../../services/products.service";
import { tryCatch } from "../../utils/try-catch"
import { Request, Response } from 'express';

export const getAllProducts = tryCatch((req: Request, res: Response) => {
    const products = productService.getAllProducts();
    res.json(products);
}); 

export const getProductById = tryCatch((req: Request, res: Response) => {
    const { id } = req.params;
    const product = productService.getProductById(id);
    res.json(product);
}); 

export const createProduct = tryCatch((req: Request, res: Response) => {
    const { name, price } = req.body;
    const newProduct = productService.createProduct(name, price);
    res.status(201).json(newProduct);
}); 

export const updateProduct = tryCatch((req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const updatedProduct = productService.updateProduct(id, name, price);
    res.json(updatedProduct);
}); 

export const deleteProduct = tryCatch((req: Request, res: Response) => {
    const { id } = req.params;
    productService.deleteProduct(id);
    res.sendStatus(204);
}); 
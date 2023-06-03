import { Types } from "mongoose";
import productService from "../../services/product.service";
import { tryCatch } from "../../utils/try-catch"
import { Request, Response } from 'express';
import reviewService from "../../services/review.service";

export const getAllProducts = tryCatch((req: Request, res: Response) => {
    const products = productService.getAllProducts();
    res.send(products);
}); 

export const getProductById = tryCatch((req: Request, res: Response) => {
    const productId = new Types.ObjectId(req.params.id);
    const product = productService.getProductById(productId);
    res.send(product);
}); 

export const createProduct = tryCatch((req: Request, res: Response) => {
    const newProduct = productService.createProduct(req.body);
    res.status(201).send(newProduct);
}); 

export const updateProduct = tryCatch((req: Request, res: Response) => {
    const updatedProduct = productService.updateProduct(req.body);
    res.send(updatedProduct);
}); 

export const removeProduct = tryCatch((req: Request, res: Response) => {
    const productId = new Types.ObjectId(req.params.id);
    const deletedProduct = productService.removeProduct(productId);
    res.status(204).send(deletedProduct);
}); 

export const createProductReview = tryCatch((req: Request, res: Response) => {
    const newProductReview = reviewService.createReview(req.body);
    res.status(201).send(newProductReview);
})
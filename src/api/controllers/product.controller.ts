import { Types } from "mongoose";
import productService from "../../services/product.service";
import { tryCatch } from "../../utils/try-catch"
import { Request, Response } from 'express';
import reviewService from "../../services/review.service";

const getAllProducts = tryCatch(async (req: Request, res: Response) => {
    const products = await productService.getAllProducts();
    res.send(products);
}); 

const getProductById = tryCatch(async (req: Request, res: Response) => {
    const productId = new Types.ObjectId(req.params.id);
    const product = await productService.getProductById(productId);
    res.send(product);
}); 

const createProduct = tryCatch(async (req: Request, res: Response) => {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).send(newProduct);
}); 

const updateProduct = tryCatch(async (req: Request, res: Response) => {
    const updatedProduct = await productService.updateProduct(req.body);
    res.send(updatedProduct);
}); 

const removeProduct = tryCatch(async (req: Request, res: Response) => {
    const productId = new Types.ObjectId(req.params.id);
    const deletedProduct = await productService.removeProduct(productId);
    res.status(204).send(deletedProduct);
}); 

const createProductReview = tryCatch(async (req: Request, res: Response) => {
    const newProductReview = await reviewService.createReview(req.body);
    res.status(201).send(newProductReview);
})

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    removeProduct,
    createProductReview
}
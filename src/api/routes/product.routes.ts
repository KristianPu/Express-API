import * as productController from "../controllers/product.controller";
import express from 'express';

const productRouter = express.Router();

productRouter.get('/products', productController.getAllProducts);
productRouter.get('/products/:id', productController.getProductById);
productRouter.post('/products', productController.createProduct);
productRouter.put('/products/:id', productController.updateProduct);
productRouter.delete('/products/:id', productController.removeProduct);
productRouter.post('/products/:id/reviews', productController.createProductReview);

export default productRouter;

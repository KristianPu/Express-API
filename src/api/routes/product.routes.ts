import productController from "../controllers/product.controller";
import express from 'express';

const productRouter = express.Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/', productController.createProduct);
productRouter.put('/', productController.updateProduct);
productRouter.delete('/:id', productController.removeProduct);
productRouter.post('/reviews', productController.createProductReview);

export default productRouter;

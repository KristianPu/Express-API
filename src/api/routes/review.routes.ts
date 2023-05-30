import * as reviewController from "../controllers/review.controller";
import express from 'express';

const router = express.Router();

router.get('/review', reviewController.getAllReview);
router.get('/review/:id', reviewController.getReviewById);
router.post('/review', reviewController.createReview);
router.put('/review/:id', reviewController.updateReview);
router.delete('/review/:id', reviewController.deleteReview);

export default router;

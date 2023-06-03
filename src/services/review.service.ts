import reviewRepository from "../repositories/review.repository";
import Review from "../schemas/review.schema";

const createReview = (review: Review) => {
    return reviewRepository.create(review);
}

export default {
    createReview
}
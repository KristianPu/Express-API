import Review, { ReviewModel } from "../schemas/review.schema";

async function create(review: Review): Promise<Review | null> {
    return await ReviewModel.create(review);
}

export default {
    create
}
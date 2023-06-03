import { Schema, Types, model } from "mongoose";

export default interface Review {
    _id: Types.ObjectId;
    productId: Types.ObjectId;
    userId: Types.ObjectId;
    rating: number;
    comment: string;
}

const schema = new Schema<Review>(
    {
        productId: { 
            type: Schema.Types.ObjectId, 
            required: true 
        },
        userId: { 
            type: Schema.Types.ObjectId, 
            required: true 
        },
        rating: { 
            type: Schema.Types.Number, 
            required: true 
        },
        comment: { 
            type: Schema.Types.String, 
            required: true 
        }
    }
);

export const ReviewModel = model('Review', schema, 'reviews');
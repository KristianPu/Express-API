import { Schema, Types, model } from "mongoose";

export default interface User {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
}

const schema = new Schema<User>(
    {
        name: { 
            type: Schema.Types.String, 
            required: true 
        },
        email: { 
            type: Schema.Types.String, 
            required: true 
        },
        password: {
            type: Schema.Types.String,
            required: true
        }
    }
);

export const UserModel = model('User', schema, 'users');
import dotenv from 'dotenv';
dotenv.config();

export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;

export const db = {
    uri: process.env.MONGODB_URI || ''
};

export const jwt = {
    secret: process.env.JWT_SECRET || ''
}
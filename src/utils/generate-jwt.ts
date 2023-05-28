import jwt from 'jsonwebtoken';

export const generateJWT = (payload: any) => {
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: '24h' };
    return jwt.sign(payload, secret, options);
}
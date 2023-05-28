import { NextFunction, RequestHandler, Request, Response } from "express";

export const tryCatch = (controller: RequestHandler) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        controller(req, res, next);
    } catch (error) {
        return next(error);
    }
}
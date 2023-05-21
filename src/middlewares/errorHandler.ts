import { logger } from "./logger";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    logger.error(error);
    response.status(500).send('Internal Server Error');
}
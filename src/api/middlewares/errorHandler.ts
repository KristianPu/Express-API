import { HttpStatusCode } from "../utils/http-status-code";
import { Request, Response, NextFunction } from 'express';
import { logger } from "./logger";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500;
    logger.error(error);

    res.status(statusCode).json({ statusCode, message: error.message });
}

class BaseError extends Error {
    public httpCode: number;
    public isOperational: boolean;

    constructor(name: string, httpCode: number, description: string, isOperational: boolean) {

        super(description);
        this.name = name;
        this.httpCode = httpCode;
        this.isOperational = isOperational;

        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    };
};

export class BadRequestError extends BaseError {
    constructor(
        name: string = 'Bad Request Error', 
        httpCode: number = HttpStatusCode.BAD_REQUEST,
        description = 'bad request error',
        isOperational: boolean = true, 
    ) {
        super(name, httpCode, description, isOperational);
    }
}

export class UnauthorizedError extends BaseError {
    constructor(
        name: string = 'Unauthorized Error', 
        httpCode: number = HttpStatusCode.UNAUTHORIZED,
        description = 'unauthorized error',
        isOperational: boolean = true, 
    ) {
        super(name, httpCode, description, isOperational);
    }
}

export class ForbiddenError extends BaseError {
    constructor(
        name: string = 'Forbidden Error', 
        httpCode: number = HttpStatusCode.FORBIDDEN,
        description = 'forbidden error',
        isOperational: boolean = true, 
    ) {
        super(name, httpCode, description, isOperational);
    }
}

export class NotFoundError extends BaseError {
    constructor(
        name: string = 'Not Found Error', 
        httpCode: number = HttpStatusCode.NOT_FOUND,
        description = 'not found error',
        isOperational: boolean = true, 
    ) {
        super(name, httpCode, description, isOperational);
    }
}

export class InternalServerError extends BaseError {
    constructor(
        name: string = 'Internal Server Error', 
        httpCode: number = HttpStatusCode.INTERNAL_SERVER,
        description = 'internal server error',
        isOperational: boolean = true, 
    ) {
        super(name, httpCode, description, isOperational);
    }
}
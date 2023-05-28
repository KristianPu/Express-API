// import { NextFunction, Request, Response } from "express";
// import { tryCatch } from "../utils/try-catch";
// import { logger } from "./logger";
// import { BadRequestError, InternalServerError } from "./errorHandler";

// export const validate = (schema) => tryCatch((req: Request, res: Response, next: NextFunction) => {
//     const { definition, input } = schema(req, res, next);

//     if (!definition || !input) {
//         logger.error(`[DEV ERROR] - [Validate Middleware] - ${req.path} - Definition or input schema missing`);
//         throw new InternalServerError();
//     }

//     const validatedInput = definition.validate(input);
//     const { error } = validatedInput;
//     const valid = error == null;
//     res.locals.input = validatedInput.value || validatedInput;

//     if (valid) {
//         next()
//     }

//     const { details } = error;
//     const errorsArray = [];

//     details.forEach(detail => {
//         errorsArray.push({ [detail.context.key]: detail.message });
//     });

//     throw new BadRequestError(error);
// })
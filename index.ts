import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./src/middlewares/errorHandler";
import { logger } from "./src/middlewares/logger";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`Received a ${req.method} request for ${req.url}`);
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.use(errorHandler);

app.listen(port, () => {
  logger.log("info", `App listening on port ${port}!`);
});
import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./src/middlewares/errorHandler";
import { logger } from "./src/middlewares/logger";
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan('combined'));

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
import express, { Request, Response } from "express";
import { errorHandler } from "./src/middlewares/errorHandler";
import { logger } from "./src/middlewares/logger";
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
import { validateEnvVars } from "./src/validations/env.validation";
dotenv.config();

const app = express();
const envVars = validateEnvVars();
const { PORT, MONGODB_URI } = envVars;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(errorHandler);

mongoose.connect(MONGODB_URI)
  .then(() => {
    logger.log("info", `Connected to MongoDB!`);

    app.listen(PORT, () => {
      logger.log("info", `App listening on port ${PORT}!`);
    });
  })
  .catch(error => {
    logger.error('Error connecting to MongoDB: ', error);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});
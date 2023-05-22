import express, { Request, Response } from "express";
import { errorHandler } from "./src/middlewares/errorHandler";
import { logger } from "./src/middlewares/logger";
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI || "";

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(errorHandler);

mongoose.connect(uri)
  .then(() => {
    logger.log("info", `Connected to MongoDB!`);

    app.listen(port, () => {
      logger.log("info", `App listening on port ${port}!`);
    });
  })
  .catch(error => {
    logger.error('Error connecting to MongoDB: ', error);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});
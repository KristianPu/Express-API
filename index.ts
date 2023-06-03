import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler } from "./src/api/middlewares/errorHandler";
import { logger } from "./src/api/middlewares/logger";
import router from "./src/api/routes/index.routes";
import { port } from './config';
import './src/schemas/database';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(errorHandler);
app.use('/api', router)

app.listen(port, () => {
  logger.log("info", `App listening on port ${port}!`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});
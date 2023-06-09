import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";
import cors from 'cors';
import { errorHandler } from "./src/api/middlewares/errorHandler";
import router from "./src/api/routes/index.routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(errorHandler);
app.use('/', router)

export default app;
import app from "./app";
import { port } from "./config";
import { logger } from "./src/api/middlewares/logger";
import { Request, Response } from 'express';
import './src/schemas/database';

app.listen(port, () => {
  logger.log("info", `App listening on port ${port}!`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});
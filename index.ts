import { logger } from "./middlewares/logger";
import express from "express";
const app = express();
const port = 3000;

app.use((req, res, next) => {
  // Log an info message for each incoming request
  logger.info(`Received a ${req.method} request for ${req.url}`);
  next();
});

// Handle HTTP GET requests to the root path
app.get("/", (req, res) => {
  // Log messages at different log levels
  logger.log("error", "This is an error message");
  logger.log("warn", "This is a warning message");
  logger.log("info", "This is an info message");
  logger.log("verbose", "This is a verbose message");
  logger.log("debug", "This is a debug message");
  logger.log("silly", "This is a silly message");

  // Send a response to the client
  res.send("Hello, world!");
});

// A route for manually triggering an error
app.get("/error", (req, res, next) => {
  throw new Error('This is a test error');
})

// Handle errors using the logger
app.use((err, req, res, next) => {

  // Log the error message at the error level
  logger.error(err.message);
  res.status(500).send('Internal Server Error');
});

// Start the app and listen on the specified port
app.listen(port, () => {
  logger.log("info", `App listening on port ${port}!`);
});
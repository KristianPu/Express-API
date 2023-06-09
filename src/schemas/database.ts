import mongoose from "mongoose";
import { logger } from "../api/middlewares/logger";
import { db } from '../../config';

mongoose.connect(db.uri)
  .then(async () => {
    logger.log("info", `Connected to MongoDB!`);
  })
  .catch(error => {
    logger.error('Error connecting to MongoDB: ', error);
});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
    logger.debug('Mongoose default connection open to ' + db.uri);
});

// If the connection throws an error
mongoose.connection.on('error', (error) => {
    logger.error('Mongoose default connection error: ' + error);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    mongoose.connection.close().then(() => {
        logger.info('Mongoose default connection disconnected through app termination');
        process.exit(0);
    }).catch((error) => {
        logger.error('Error occured while closing Mongoose connection:', error);
        process.exit(1);
    })
});

export const connection = mongoose.connection;
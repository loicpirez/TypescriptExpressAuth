require('dotenv').config();

import environment from './lib/environment';
import initializeExpress from './lib/express';

import logger from './lib/logger';
import express from 'express';

import {Server} from 'http';

/**
 * In case something fatal occurs and the server cannot continue, throw an
 * error and exit the process.
 *
 * @param {Error} error - Error to handle.
 *
 */
const handleFatalError: Function = (error: Error): void => {
  global.logger.error('Fatal Error:', error.message);
  global.logger.error(error.stack);
  process.exit(1);
};

/**
 * Initialize the API.
 *
 * @async
 *
 */
const startServer: Function = async (): Promise<Server> => {
  {
    const {HOST, LOG_LEVEL, PORT} = environment.getEnvironment();

    global.logger = logger(LOG_LEVEL);

    global.logger.info('📱 Welcome to the backend API !');

    // global.logger.info('Connecting to MongoDB...');
    // await initializeMongoose();
    // global.logger.info('Database loaded and connected.');

    global.logger.info('Initializing Express server...');
    global.expressApp = express();
    await initializeExpress();
    return global.expressApp.listen(PORT, HOST, () => {
      global.logger.info(`Server listening at http://${HOST}:${PORT} !`);
    });
  }
};

startServer().catch((error: Error) => {
  handleFatalError(error);
});

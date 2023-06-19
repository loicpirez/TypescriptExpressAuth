/* eslint-disable no-var */ // disabled as we cannot use let in a global scope

import {Application} from 'express';
import {Logger} from 'winston';

declare global {
  namespace Express {
    interface Request {
      // TODO: add types
    }
  }

  var logger: Logger;
  var expressApp: Application;
}

import {Router as router} from 'express';
import mainRoute from './routes/main';
import authRoute from './routes/auth';

/**
 * Creation of a Router with routes applied.
 *
 * @async
 *
 * @return {router} - Express Router with routes applied.
 */
const initAppRouter: Function = async (): Promise<router> => {
  const appRouter: router = router();

  authRoute(appRouter);
  mainRoute(appRouter);

  return appRouter;
};

export default initAppRouter;

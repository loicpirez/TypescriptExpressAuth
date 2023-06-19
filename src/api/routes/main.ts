import {NextFunction, Request, Response, Router as router} from 'express';

/**
 * Route which display Hello World.
 *
 * @async
 *
 * @param {router} appRouter - Express Router with routes applied.
 */
const mainRoute: Function = async (appRouter: router): Promise<void> => {
  const route: router = router();

  appRouter.use('/main', route);

  route.get('/hello', (req: Request, res: Response, next: NextFunction) => {
    res.json({status: 'hello'});
  });
};

export default mainRoute;

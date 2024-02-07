import 'dotenv/config';

import express, { json } from 'express';

import { setupMongo } from './database';
import { errorHandler } from './middleware/error-handler.middleware';
import { routes } from './routes';

setupMongo().then(() => {
  const app = express();

  const port = 3333;

  app.use(json());
  app.use(routes);
  app.use(errorHandler);

  app.listen(port, () => console.log(`🚀 App is running at port ${port}`));
});

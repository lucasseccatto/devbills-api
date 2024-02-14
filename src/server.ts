import 'dotenv/config';

import cors from 'cors';
import express, { json } from 'express';

import { setupMongo } from './database';
import { errorHandler } from './middleware/error-handler.middleware';
import { routes } from './routes';

setupMongo().then(() => {
  const app = express();

  const port = 3333;

  app.use(
    cors({
      origin: process.env.FRONT_URL,
    }),
  );
  app.use(json());
  app.use(routes);
  app.use(errorHandler);

  app.listen(port, () => console.log(`🚀 App is running at port ${port}`));
});

import { Router } from 'express';

import { TransactionsController } from '../controllers/transactions.controller';
import {
  createTransactionSchema,
  getDashboardSchema,
  indexTransactionSchema,
} from '../dtos/transactions.dto';
import { TransactionsFactory } from '../factories/transations.factory';
import { ParamsType, validator } from '../middleware/validator.middleware';

export const transactionsRoutes = Router();

const controller = new TransactionsController(
  TransactionsFactory.getServiceInstance(),
);

transactionsRoutes.post(
  '/',
  validator({
    schema: createTransactionSchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);

transactionsRoutes.get(
  '/',
  validator({
    schema: indexTransactionSchema,
    type: ParamsType.QUERY,
  }),
  controller.index,
);

transactionsRoutes.get(
  '/dashboard',
  validator({
    schema: getDashboardSchema,
    type: ParamsType.QUERY,
  }),
  controller.getDashboard,
);

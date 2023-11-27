import 'reflect-metadata';

import app from './config/app.js';
import env from './config/env.js';

import { TypeOrmHelper } from './../infra/db/typeorm/index.js';

TypeOrmHelper.create();

try {
  await TypeOrmHelper.initialize();
  app.listen({ port: env.port });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { createLogger } from 'winston';

import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';

async function bootstrap() {
  // create winston logger instance
  // to replace nest logger
  const instance = createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),

    transports: [
      // log redirect to console
      new winston.transports.Console({
        format: winston.format.combine(
          nestWinstonModuleUtilities.format.nestLike('logging-strategy', {
            colors: true,
            prettyPrint: true,
          }),
        ),
      }),

      // log redirect to a file
      new winston.transports.File({
        filename: 'logfile.log',
        format: winston.format.json({
          bigint: true,
          space: 3,
        }),
      }),
    ],
  });

  const app = await NestFactory.create(AppModule, {
    // overload nest logger by the winston logger
    logger: WinstonModule.createLogger({
      instance,
    }),
  });
  await app.listen(3000);
}
bootstrap();

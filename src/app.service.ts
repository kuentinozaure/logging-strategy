import { Injectable } from '@nestjs/common';
import { objectToLog } from './const/objectToLog';
import { getLogger } from 'loglevel';

@Injectable()
export class AppService {
  logObject = objectToLog;
  private readonly logger = getLogger(AppService.name);

  getHello(): string {
    this.logger.warn(this.logObject);
    this.logger.error(this.logObject);

    return 'Hello World!';
  }
}

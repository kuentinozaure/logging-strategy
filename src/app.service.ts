import { Injectable, Logger } from '@nestjs/common';
import { objectToLog } from './const/objectToLog';

@Injectable()
export class AppService {
  private object = objectToLog;
  constructor(
    private readonly logger: Logger, // use nest logger, but is overloaded by winston
  ) {}

  getHello(): string {
    this.logger.error('Error', this.object);
    return 'Hello World!';
  }
}

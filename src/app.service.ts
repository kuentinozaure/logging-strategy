import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { objectToLog } from './const/objectToLog';

@Injectable()
export class AppService {
  private object = objectToLog;

  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.error(this.object);
    return 'Hello World!';
  }
}

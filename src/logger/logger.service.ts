/* eslint-disable @typescript-eslint/ban-types */
import { Logger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends Logger {
  // eslint-disable-next-line prettier/prettier
  info(state: string, funcName: string , logObject?: object, requestId?: string,) {
    this.log({
      state,
      funcName,
      logObject,
      requestId,
    });
  }
}
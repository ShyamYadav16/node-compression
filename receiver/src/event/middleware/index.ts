import { ForbiddenException, Injectable, NestMiddleware} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * Compression middleware handles request and response object of event controller APIs
 */
@Injectable()
export class CompressionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // If event controller API headers doesn't contains content-encoding to be 'br' throw Access forbidden 403
    if(req.headers['content-encoding'] !== 'br')
      throw new ForbiddenException('Content Encoding Error');
    else
      next();
  }
}

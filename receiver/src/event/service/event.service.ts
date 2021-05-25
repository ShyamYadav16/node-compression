import { Injectable } from '@nestjs/common';
import { brotliDecompressSync } from 'zlib';

/**
 * EventService provides logic to operate EventController
 */
@Injectable()
export class EventService {

  /**
   * Helps to brotli decompress Messages, converts buffer to utf8 string and returns string.
   * @param {string | ArrayBuffer | NodeJS.ArrayBufferView} message
   * @returns {string}
   */
  decompressMessage(message: string | ArrayBuffer | NodeJS.ArrayBufferView): string {
    const buffer = brotliDecompressSync(message);
    return buffer.toString('utf8');
  }

}

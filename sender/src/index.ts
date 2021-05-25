import { parseAndDelay, passThrough } from './helpers/streamHelper';

/**
 * Listens to the terminal inputs, splits up a stream and reassemble so each line is a chunk,
 * adds the delay and passes message to transmit
 */
process.stdin
  .pipe(require('split')())
  .pipe(parseAndDelay)
  .pipe(passThrough)
  .on('error', console .error)
  .on('finish', () => console.log('End of stream'));